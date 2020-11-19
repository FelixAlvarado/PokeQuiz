from flask import Flask, request, render_template, send_from_directory
from queries import fetch_quizes, fetch_quiz, fetch_attempt, fetch_questions, fetch_scores
from create import create_quiz, create_score_attempts, delete_quiz
import mysql.connector
from mysql.connector import errorcode
from dotenv import load_dotenv
import os
from flask_cors import CORS
from subprocess import Popen, PIPE
from utility import set_interval, Database
import string
import random

load_dotenv()

user = os.environ.get("AWS_USERNAME")
password = os.environ.get("AWS_PASSWORD")
DB_NAME = os.environ.get("AWS_DB_NAME")
port = os.environ.get("AWS_PORT")
host = os.environ.get("AWS_HOST")

cnx = mysql.connector.connect(user=f"{user}", password=f"{password}",database=f"{DB_NAME}", host=f"{host}", port=f"{port}")
cursor = cnx.cursor(buffered=True)
cursor.execute("USE {}".format(DB_NAME))

database = Database(cursor, cnx, user, password, DB_NAME, host, port)

set_interval(database.restart_connection,290)

app = Flask(__name__, static_folder='frontend/build')
CORS(app)

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

@app.route('/scores', methods=["GET"])
def scores():
    print('made it to scores route')
    quiz_id = request.args.get('id')
    return fetch_scores(database.cursor,quiz_id)

@app.route('/delete', methods=["GET"])
def delete():
    quiz_id = request.args.get('id')
    return delete_quiz(database.cnx,database.cursor, quiz_id)

if __name__ == "__main__":
    app.run(debug=True)