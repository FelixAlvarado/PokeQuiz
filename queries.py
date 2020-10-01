

def fetch_quizes(cursor):
    result = {'quizes':{}}
    search_string = ""
    count = 0
    cursor.execute("SELECT * FROM quizes")
#tuple returned is (id, title)
    for quiz in cursor:
        result['quizes'][f"{quiz[0]}"] = {'id':quiz[0],'title':quiz[1], 'scores':[]}
        count += 1

        if (count < cursor.rowcount):
            search_string += f"quiz_id = {quiz[0]} OR "
        else:
            search_string += f"quiz_id = {quiz[0]} "

    cursor.execute(f"SELECT * FROM scores WHERE {search_string}")

#tuple returned is (id, quiz_id, test_taker, score)
    for score in cursor:
        result['quizes'][f"{score[1]}"]['scores'].append([score[2],score[3]])
  
    return result

def fetch_quiz(cursor, id):
    cursor.execute(f"SELECT * FROM quizes WHERE id = {id}")
    result = {'quiz':{}}
    for quiz in cursor:
        result['quiz'][f"{quiz[0]}"] = {'id':quiz[0],'title':quiz[1], 'scores':[]}
    
    cursor.execute(f"SELECT * FROM scores WHERE quiz_id = {id}")

    for score in cursor:
        result['quiz'][f"{score[1]}"]['scores'].append([score[2],score[3],score[0]])
 
    return result 

def fetch_attempt(cursor,id):

    result = {}
    scores = []

    cursor.execute(f"SELECT * FROM scores WHERE id = {id}")

    quiz_id = ''

    for score in cursor:
        scores = [score[2],score[3],score[0]]
        quiz_id = score[1]
    
    result[f"{quiz_id}"] = {}
    result[f"{quiz_id}"]["scores"] = [scores]

    cursor.execute(f'''SELECT *
                     FROM quizes 
                     JOIN quiz_questions ON quizes.id = quiz_questions.quiz_id 
                     JOIN questions ON quiz_questions.question_id = questions.id
                     JOIN attempts ON questions.id = attempts.question_id 
                     WHERE attempts.score_id = {id}''')

 
    result[f"{quiz_id}"]["questions"] = {}
    result[f"{quiz_id}"]["attempts"] = {}

    count = 0
    for attempt in cursor:
        if count < 1:
            result[f"{quiz_id}"]["title"] = attempt[1]
            count += 1
        
        result[f"{quiz_id}"]["questions"][f"{attempt[4]}"] = {"id":attempt[4],
                                                              "question":attempt[5],  
                                                              "corect_answer":attempt[6],
                                                              "wrong_answer1":attempt[7],
                                                              "wrong_answer2":attempt[8],
                                                              "wrong_answer3":attempt[9]}
        result[f"{quiz_id}"]["attempts"][f"{attempt[10]}"] = {"id":attempt[10],
                                                              "question_id":attempt[11],  
                                                              "score_id":attempt[12],
                                                              "answer":attempt[13]
                                                              }
        return result



