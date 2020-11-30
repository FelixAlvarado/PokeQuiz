# PokeQuiz 

PokeQuiz is a pokemon themed site that allows users to make quizzes and share them with friends. React was used for the frontend, and Flask was used for the backend. 

[PokeQuiz](https://pokequiz1.herokuapp.com/)

# Features  

* Quiz creation and scoring.
* Quiz attempts pages that show the answers each testee picked.
* The use of threading to restart MySql at a set interval to prevent connection timeouts.
* Makes use of media queries and browser detection to ensure an excellent user experience on all desktop and mobile browser types.
* Utilizes raw SQL queries to save and retrieve data.
* Uses the Redux Toolkit to ensure a unidirectional data flow with less boilerplate code.

# Technologies  

* React
* Redux Toolkit
* Flask
* MySql
* JawsDB
* Axios
* Pokemon API
* SASS

# SQL Tables

* quizes: id, title
* questions: id, question, correct_answer, wrong_answer1, wrong_answer2, wrong_answer2
* quest_questions: quiz_id, question_id
* scores: id, question_id, score_id, answer 

# Code Samples 

The following Python code utilizes MySql (cursor) to execute the SQL commands needed to fetch a quiz's questions and testee answers (attempts) based on the given score id:

```python

def fetch_attempt(cursor,id):

    result = {}
    scores = []

    try:
        cursor.execute(f"SELECT * FROM scores WHERE id = {id}")

    quiz_id = ''

    for score in cursor:
        scores = [score[0],score[1],score[2],score[3]]
        quiz_id = score[1]

    result[f"{quiz_id}"] = {}
    result[f"{quiz_id}"]["scores"] = [scores]

    cursor.execute(f'''SELECT * FROM quizes JOIN quiz_questions ON quizes.id = quiz_questions.quiz_id JOIN questions ON quiz_questions.question_id = questions.id JOIN attempts ON questions.id = attempts.question_id WHERE attempts.score_id = {id}''')

    result[f"{quiz_id}"]["questions"] = {}
    result[f"{quiz_id}"]["attempts"] = {}

    count = 0
    for attempt in cursor:
        if count < 1:
            result[f"{quiz_id}"]["title"] = attempt[1]
            count += 1

        result[f"{quiz_id}"]["questions"][f"{attempt[4]}"] = {"id":attempt[4],"question":attempt[5],"correct_answer":attempt[6],"wrong_answer1":attempt[7],"wrong_answer2":attempt[8],"wrong_answer3":attempt[9]}

        result[f"{quiz_id}"]["attempts"][f"{attempt[10]}"] = {"id":attempt[10],"question_id":attempt[11],"score_id":attempt[12],"answer":attempt[13]}

    return result

```

The following JavaScript code is the Quiz List component, which list quizes for users to view on the homepage. It lazily loads most of the quizes to ensure faster rendering for the quizes that are initally viewed:

```javascript

import React, { useEffect, useRef, lazy, Suspense } from 'react';
import { getQuizes, selectQuizes } from '../app/quizesSlice.js'
import { useSelector, useDispatch } from 'react-redux';
import QuizItem from './QuizItem'
const QuizItemLazy = lazy(() => import('./QuizItem'))

export default function QuizList() {
    const quizes = useSelector(selectQuizes)
    const dispatch = useDispatch();
    const onLoad = useRef(true)
    let quizList

  useEffect(() => {
    if(onLoad.current){
      document.body.scrollTop = 0; 
      document.documentElement.scrollTop = 0;
      dispatch(getQuizes());
      onLoad.current = false;
    }
  });

  if(quizes) { 
          quizList = Object.values(quizes).reverse().map((quiz, i) =>{
            if(quiz.title && i < 10){
              return (
                <QuizItem key={i} quiz={quiz} />
                )
            }else if (quiz.title){
              return(
              <Suspense key={i}  fallback={<div></div>}>
                <QuizItemLazy quiz={quiz} />
              </Suspense>
              )
            }else{
              return <div key={i}></div>
            }
      })

  return (
    <div className="quiz-list">
        {quizList}
    </div>
  );    
}

```

# Gallary

The quiz page and its view for various page sizes:

![Quiz Page](https://media.giphy.com/media/tsEdNx3xmHARkDBTqf/giphy.gif)




