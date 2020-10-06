def create_question(cursor, cnx, question_format, question_data, junction_format, quiz_id):
    cursor.execute(question_format, question_data)
    cnx.commit()
    cursor.execute(junction_format, (quiz_id, cursor.lastrowid))
    cnx.commit()

def create_quiz(cnx, cursor, title, questions):
     quiz_id = ''

     quiz_format = ("INSERT INTO quizes "
                        "(title) "
                        "VALUES (%s)")
    
    # quiz_data = (title)

    #cursor.execute(quiz_format, quiz_data)

    #cnx.commit()

    #quiz_id = cursor.lastrowid

    question_format = ("INSERT INTO questions "
                        "(question, correct_answer, wrong_answer1, wrong_answer2, wrong_answer3) "
                        "VALUES (%s, %s, %s, %s, %s)")

    junction_format = ("INSERT INTO quiz_questions"
                        "(quiz_id, question_id) "
                        "VALUES (%s, %s)")
    
    for index in questions:
        question = questions[f"{index}"]
        print("here is the question")
        print(question)
        #question_data = (question.question, question.correctAnswer, question.wrongAnswer1, question.wrongAnswer2, question.wrongAnswer3)
        #create_question(cursor, cnx, question_format, question_data, junction_format, quiz_id)

        return 

    



