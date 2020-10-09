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
    print("here is the title")
    print(title)
    quiz_data = (title,)

    cursor.execute(quiz_format, quiz_data)

    cnx.commit()

    quiz_id = cursor.lastrowid

    question_format = ("INSERT INTO questions "
        "(question, correct_answer, wrong_answer1, wrong_answer2, wrong_answer3) "
        "VALUES (%s, %s, %s, %s, %s)")

    junction_format = ("INSERT INTO quiz_questions"
        "(quiz_id, question_id) "
        "VALUES (%s, %s)")

    for question in questions:
        question_data = (question["question"], question["correctAnswer"], question["wrongAnswer1"], question["wrongAnswer2"], question["wrongAnswer3"])
        create_question(cursor, cnx, question_format, question_data, junction_format, quiz_id)
    
    return str(quiz_id)

def create_score_attempts(cnx,cursor, attempts,score):

    score_format = ("INSERT INTO scores "
        "(quiz_id, test_taker, score) "
        "VALUES (%s, %s, %s)")

    score_data = (score["quizId"], score["testTaker"],score["score"])

    cursor.execute(score_format, score_data)

    cnx.commit()

    score_id = cursor.lastrowid

    for attempt in attempts:
        attempt_format = ("INSERT INTO attempts "
            "(question_id, score_id, answer) "
            "VALUES (%s, %s, %s)")

        attempt_data = (attempt["questionId"], score_id, attempt["answer"])

        cursor.execute(attempt_format, attempt_data)

        cnx.commit()
    
    return str(score_id)



