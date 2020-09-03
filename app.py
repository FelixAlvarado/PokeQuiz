from flask import Flask
from queries import fetch_quizes
import mysql.connector
from mysql.connector import errorcode 
from dotenv import load_dotenv
import os 
from flask_cors import CORS

load_dotenv()

user = os.environ.get("USERNAME")
password = os.environ.get("PASSWORD")
DB_NAME = os.environ.get("DB_NAME")

cnx = mysql.connector.connect(user=f"{user}", password=f"{password}")
cursor = cnx.cursor()
cursor.execute("USE {}".format(DB_NAME))

app = Flask(__name__)
CORS(app)

@app.route('/quizes', methods=["GET"])
def quizes():
    return fetch_quizes(cursor)

if __name__ == "__main__":
    app.run(debug=True)