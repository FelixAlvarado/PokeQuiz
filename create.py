import copy
import random

def create_question(cursor, cnx, question_format, question_data, junction_format, quiz_id):
    try:
        cursor.execute(question_format, question_data)
    except:
         cursor.execute(question_format, question_data)

    question_id = cursor.lastrowid
    cnx.commit()
    try:
        cursor.execute(junction_format, (quiz_id, cursor.lastrowid))
    except:
        cursor.execute(junction_format, (quiz_id, cursor.lastrowid))

    cnx.commit()
    return question_id

def create_quiz(cnx, cursor, title, questions):
    quiz_id = ''
    result = {}
    result["scores"] = []
    result["questions"] = {}
    result["test_questions"] = {}
    result["title"] = title

    quiz_format = ("INSERT INTO quizes "
        "(title) "
        "VALUES (%s)")

    quiz_data = (title,)
    try:
        cursor.execute(quiz_format, quiz_data)
    except:
        cursor.execute(quiz_format, quiz_data)


    cnx.commit()

    quiz_id = cursor.lastrowid
    result["id"] = cursor.lastrowid

    question_format = ("INSERT INTO questions "
        "(question, correct_answer, wrong_answer1, wrong_answer2, wrong_answer3) "
        "VALUES (%s, %s, %s, %s, %s)")

    junction_format = ("INSERT INTO quiz_questions"
        "(quiz_id, question_id) "
        "VALUES (%s, %s)")

    for question in questions:
        question_data = (question["question"], question["correctAnswer"], question["wrongAnswer1"], question["wrongAnswer2"], question["wrongAnswer3"])
        question_id = create_question(cursor, cnx, question_format, question_data, junction_format, quiz_id)
        print('here is the question id', question_id)
        result["questions"][f"{question_id}"] = {"id":question_id,"question":question["question"],"correct_answer":question["correctAnswer"],"wrong_answer1":question["wrongAnswer1"] ,"wrongAnswer2":question["wrongAnswer2"],"wrong_answer3":question["wrongAnswer3"]}
        answers = []
        answers.append(question["correctAnswer"])
        answers.append(question["wrongAnswer1"])
        answers.append(question["wrongAnswer2"])
        answers.append(question["wrongAnswer3"])
        random.shuffle(answers)
        result["test_questions"][f"{question_id}"] = {"id":question_id,"question":question["question"],"correct_answer":question["correctAnswer"],"answer_1": answers[0],"answer_2":answers[1],"answer_3":answers[2],"answer_4":answers[3]}

    return result

def create_score_attempts(cnx,cursor, attempts,score):

    print('here is the score', score)

    scoreArray = []

    score_format = ("INSERT INTO scores "
        "(quiz_id, test_taker, score) "
        "VALUES (%s, %s, %s)")

    score_data = (score["quiz"]["id"], score["testTaker"],score["score"])

    try:
        cursor.execute(score_format, score_data)
    except:
        cursor.execute(score_format, score_data)


    cnx.commit()

    score_id = cursor.lastrowid
    scoreArray.append(score_id)
    scoreArray.append(score["quiz"]["id"])
    scoreArray.append(score["testTaker"])
    scoreArray.append(score["score"])

    new_attempts = {}

    for attempt in attempts:
        attempt_format = ("INSERT INTO attempts "
            "(question_id, score_id, answer) "
            "VALUES (%s, %s, %s)")

        attempt_data = (attempt["questionId"], score_id, attempt["answer"])

        try:
            cursor.execute(attempt_format, attempt_data)
        except:
            cursor.execute(attempt_format, attempt_data)


        cnx.commit()

        attempt_id = cursor.lastrowid

        new_attempts[f"{attempt_id}"] = {"question_id": attempt["questionId"], "score_id": score_id, "answer":attempt["answer"]}

        print('here are the attempts')
        print(new_attempts)

    quiz_copy = copy.deepcopy(score["quiz"])

    quiz_copy["attempts"] = new_attempts

    quiz_copy["scores"] = [scoreArray]

    return {"score_id":score_id,"quiz":{f"{quiz_copy['id']}":quiz_copy}}
