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

query = ("SELECT * FROM questions")

delete_query = ("DELETE FROM questions WHERE id = 7 AND id = 8 AND id = 9 AND id = 10")

#stopping here. working on delete function

deleted = cursor.execute(query)

print(deleted)

#you must read information from a query via the cursor before using the cursor again
for question in cursor:
  print(question[0])
  # print(f"{id} is the id and {question} is the question")

cnx.commit()

cursor.close()
cnx.close()

#stopping here for today. need to figure out how to properly delete from sql database

