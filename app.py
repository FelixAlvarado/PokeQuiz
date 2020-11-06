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

user = os.environ.get("AWS_USERNAME")
password = os.environ.get("AWS_PASSWORD")
DB_NAME = os.environ.get("AWS_DB_NAME")
port = os.environ.get("AWS_PORT")
host = os.environ.get("AWS_HOST")

cnx = mysql.connector.connect(user=f"{user}", password=f"{password}",database=f"{DB_NAME}", host=f"{host}", port=f"{port}")
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


set_interval(database.restart_connection,28500)
    

app = Flask(__name__, static_folder='frontend/build')
CORS(app)

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve(path):
    if path != "" and os.path.exists(app.static_folder + '/' + path):
        return send_from_directory(app.static_folder, path)
    else:
        return send_from_directory(app.static_folder, 'index.html')

@app.route('/quizes', methods=["GET"])
def quizes():
    return fetch_quizes(database.cursor)

@app.route('/quiz', methods=["GET"])
def quiz():
    quiz_id = request.args.get('id')
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


if __name__ == "__main__":
    app.run(debug=True)

    # app.run(host='0.0.0.0', debug=True, port=os.environ.get('PORT', 80))