from flask import Flask, request, render_template, send_from_directory
from queries import fetch_quizes, fetch_quiz, fetch_attempt, fetch_questions
from create import create_quiz, create_score_attempts
import mysql.connector
from mysql.connector import errorcode 
from dotenv import load_dotenv
import os 
from flask_cors import CORS
from subprocess import Popen, PIPE

load_dotenv()

user = os.environ.get("AWS_USERNAME")
password = os.environ.get("AWS_PASSWORD")
DB_NAME = os.environ.get("AWS_DB_NAME")
port = os.environ.get("AWS_PORT")
host = os.environ.get("AWS_HOST")

cnx = mysql.connector.connect(user=f"{user}", password=f"{password}",database=f"{DB_NAME}", host=f"{host}", port=f"{port}")
cursor = cnx.cursor(buffered=True)
cursor.execute("USE {}".format(DB_NAME))

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
    return fetch_quizes(cursor)

@app.route('/quiz', methods=["GET"])
def quiz():
    quiz_id = request.args.get('id')
    return fetch_quiz(cursor,quiz_id)

@app.route('/attempt', methods=["GET"])
def attempt():
    score_id = request.args.get('id')
    return fetch_attempt(cursor,score_id)

@app.route('/create', methods=["POST"])
def create():
    data = request.json 
    title = data['title']
    questions = data['questions']
    quiz_id = create_quiz(cnx, cursor, title, questions)
    return quiz_id

@app.route('/questions', methods=["GET"])
def questions():
    quiz_id = request.args.get('id')
    return fetch_questions(cursor,quiz_id)

@app.route('/score', methods=["POST"])
def score():
    data = request.json 
    attempts = data['attempts']
    print('attempts')
    print(attempts)
    score = data['score']
    print('here is the score')
    print(score)
    return create_score_attempts(cnx, cursor,attempts, score)


if __name__ == "__main__":
    app.run(debug=True)

    # app.run(host='0.0.0.0', debug=True, port=os.environ.get('PORT', 80))