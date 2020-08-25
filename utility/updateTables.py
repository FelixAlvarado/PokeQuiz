import mysql.connector
from mysql.connector import errorcode 
from dotenv import load_dotenv
import os 

load_dotenv()

user = os.environ.get("USERNAME")
password = os.environ.get("PASSWORD")
DB_NAME = os.environ.get("DB_NAME")

cnx = mysql.connector.connect(user=f"{user}", password=f"{password}")
cursor = cnx.cursor()
cursor.execute("USE {}".format(DB_NAME))

#add quiz 

add_quiz = ("INSERT INTO quizes "
              "(title) "
              "VALUES (%(title)s)")

data_quiz = {
  'title': 'Gym Leaders'
}

cursor.execute(add_quiz, data_quiz)

#no error occurred when running the above code. need to do query to verify





cnx.commit()

cursor.close()
cnx.close()