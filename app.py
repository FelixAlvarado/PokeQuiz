from flask import Flask, request, render_template, send_from_directory
from queries import fetch_quizes, fetch_quiz, fetch_attempt, fetch_questions
from create import create_quiz, create_score_attempts
import mysql.connector
from mysql.connector import errorcode
from dotenv import load_dotenv
import os
from flask_cors import CORS
from subprocess import Popen, PIPE
from utility import set_interval, restart_connection
import threading

load_dotenv()

# user = os.environ.get("AWS_USERNAME")
# password = os.environ.get("AWS_PASSWORD")
# DB_NAME = os.environ.get("AWS_DB_NAME")
# port = os.environ.get("AWS_PORT")
# host = os.environ.get("AWS_HOST")


# clearDBU = os.environ.get("ClearDB_User")
# clearDBP = os.environ.get("ClearDB_Pass")
# clearDBN = os.environ.get("ClearDB_Name")
# clearDBH = os.environ.get("ClearDB_Host")

user = os.environ.get("P_User")
password = os.environ.get("P_Password")
DB_NAME = os.environ.get("P_Name")
port = os.environ.get("P_Port")
host = os.environ.get("P_Host")


print('user')
print(user)
print('password')
print(password)
print('db name')
print(DB_NAME)
print('port')
print(port)
print('host')
print(host)

cnx = mysql.connector.connect(user=f"{user}", password=f"{password}",database=f"{DB_NAME}", host=f"{host}", port="5432")
# cnx = mysql.connector.connect(user=f"{clearDBU}", password=f"{clearDBP}")
cursor = cnx.cursor(buffered=True)
cursor.execute("USE {}".format(DB_NAME))

class Database:
    def __init__(self, cursor_value, cnx_value):
        self.cursor = cursor_value
        self.cnx = cnx_value

    def restart_connection(self):
        self.cnx = mysql.connector.connect(user=f"{user}", password=f"{password}",database=f"{DB_NAME}", host=f"{host}", port=f"{port}")
        self.cursor = self.cnx.cursor(buffered=True)
        self.cursor.execute("USE {}".format(DB_NAME))


database = Database(cursor, cnx)

# set_interval(restart_connection(mysql,cursor, cnx, user,password, DB_NAME, host, port),28700)

def set_interval(func, sec):
    def func_wrapper():
        set_interval(func, sec)
        func()
    t = threading.Timer(sec, func_wrapper)
    t.start()
    return t


set_interval(database.restart_connection,290)


app = Flask(__name__, static_folder='frontend/build')
CORS(app)

TABLES = {}

TABLES['quizes'] = (
    "CREATE TABLE `quizes` ("
    "  `id` int NOT NULL AUTO_INCREMENT,"
    "  `title` varchar(256) NOT NULL,"
    "  PRIMARY KEY (`id`)"
    ")")

TABLES['questions'] = (
    "CREATE TABLE `questions` ("
    "  `id` int NOT NULL AUTO_INCREMENT UNIQUE,"
    "  `question` varchar(1000) NOT NULL,"
    "  `correct_answer` varchar(1000) NOT NULL,"
    "  `wrong_answer1` varchar(1000) NOT NULL,"
    "  `wrong_answer2` varchar(1000) NOT NULL,"
    "  `wrong_answer3` varchar(1000) NOT NULL,"
    "   PRIMARY KEY (`id`)"
    ")")

TABLES['quiz_questions'] = (
    "CREATE TABLE `quiz_questions` ("
    "  `quiz_id` int NOT NULL,"
    "  `question_id` int NOT NULL"
    ")")

TABLES['scores'] = (
    "CREATE TABLE `scores` ("
    "  `id` int NOT NULL AUTO_INCREMENT UNIQUE,"
    "  `quiz_id` int NOT NULL,"
    "  `test_taker` varchar(256) NOT NULL,"
    "  `score` int NOT NULL,"
    "  FOREIGN KEY (`quiz_id`) REFERENCES `quizes` (`id`)"
    ")")

#attempts table has been created
TABLES['attempts'] = (
    "CREATE TABLE `attempts` ("
    "  `id` int NOT NULL AUTO_INCREMENT UNIQUE,"
    "  `question_id` int NOT NULL,"
    "  `score_id` int NOT NULL,"
    "  `answer` varchar(1000) NOT NULL,"
    "  FOREIGN KEY (`question_id`) REFERENCES `questions` (`id`),"
    "  FOREIGN KEY (`score_id`) REFERENCES `scores` (`id`)"
    ")")

# database.cursor.execute("USE {}".format(DB_NAME))

# for table_name in TABLES:
#     table_description = TABLES[table_name]
#     try:
#         print("Creating table {}: ".format(table_name), end='')
#         database.cursor.execute(table_description)
#     except mysql.connector.Error as err:
#         if err.errno == errorcode.ER_TABLE_EXISTS_ERROR:
#             print("already exists.")
#         else:
#             print(err.msg)
#     else:
        # print("OK")


@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve(path):
    if path != "" and os.path.exists(app.static_folder + '/' + path):
        return send_from_directory(app.static_folder, path)
    elif path != 'test_create' and path!= 'test_retrieve':
        return send_from_directory(app.static_folder, 'index.html')

@app.route('/quizes', methods=["GET"])
def quizes():
    return fetch_quizes(database.cursor)

@app.route('/quiz', methods=["POST"])
def quiz():
    data = request.json
    quiz_id = data['id']
    # scores = data['scores']
    return fetch_quiz(database.cursor,quiz_id)

@app.route('/attempt', methods=["GET"])
def attempt():
    score_id = request.args.get('id')
    return fetch_attempt(database.cursor,score_id)

@app.route('/create', methods=["POST"])
def create():
    data = request.json
    title = data['title']
    questions = data['questions']
    quiz_id = create_quiz(database.cnx, database.cursor, title, questions)
    return quiz_id

@app.route('/questions', methods=["GET"])
def questions():
    quiz_id = request.args.get('id')
    return fetch_questions(database.cursor,quiz_id)

@app.route('/score', methods=["POST"])
def score():
    data = request.json
    attempts = data['attempts']
    score = data['score']
    return create_score_attempts(database.cnx, database.cursor,attempts, score)

@app.route('/test_create', methods=["GET"])
def test_create():
    print('made it to test create')
    name = request.args.get('name')

    test_format = ("INSERT INTO test "
        "(name) "
        "VALUES (%s)")

    test_data = (name,)

    cursor.execute(test_format, test_data)

    id = cursor.lastrowid

    return f"Entry successfully created. the id of the new entry is {id}"

@app.route('/test_retrieve', methods=["GET"])
def test_retrieve():

    id = request.args.get('id')

    result_string = ''

    # if id != None:
    #     cursor.execute(f"SELECT * FROM test WHERE id = {id}")
    #     result_string += 'Here is the entry you requested:'
    # else:
    cursor.execute("SELECT * FROM test")
    result_string += 'Here are all entries for the table: '

    for entry in cursor:
        print('here is the entry')
        print(entry)
        result_string += f"id: {entry[0]} name: {entry[1]}"
    
    return result_string



if __name__ == "__main__":
    app.run(debug=True)

    # app.run(host='0.0.0.0', debug=True, port=os.environ.get('PORT', 80))
