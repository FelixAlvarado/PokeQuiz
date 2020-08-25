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

# add_quiz = ("INSERT INTO quizes "
#               "(title) "
#               "VALUES (%(title)s)")

# data_quiz = {
#   'title': 'Gym Leaders'
# }

# cursor.execute(add_quiz, data_quiz)

#add question

add_question = ("INSERT INTO questions "
               "(question, correct_answer, wrong_answer1, wrong_answer2, wrong_answer3) "
               "VALUES (%s, %s, %s, %s, %s)")

data_question = ('Who was the first gym leader in the Kanto Region?', 'Brock', 'Misty', 'Blue', 'Falkner')

# cursor.execute(add_question, data_question)

data_question = ('Which gym leader in the Johto region featured bug type pokemon?', 'Bugsy', 'Morty', 'Jasmine', 'Whitney')

#cursor.execute(add_question, data_question)

data_question = ('Which gym leader was the father of the main character in Generation 3?', 'Norman', 'Wattson', 'Brawly', 'Wallace')

#cursor.execute(add_question, data_question)

data_question = ("Which gym leader eventually became a member of Kanto's Elite Four?", 'Koga', 'Sabrina', 'Blaine', 'Erika')

#cursor.execute(add_question, data_question)

data_question = ("Which one of the following gym leaders had Steelix on their team?", 'Jasmine', 'Clair', 'Fantina', 'Brock')

#cursor.execute(add_question, data_question)

#no error occurred when running the above code. need to do query to verify





cnx.commit()

cursor.close()
cnx.close()