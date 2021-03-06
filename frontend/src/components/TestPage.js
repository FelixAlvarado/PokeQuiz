import React,{ useState, useRef, useEffect } from 'react';
import '../style/scorepage.css'
import { useSelector, useDispatch } from 'react-redux';
import { getQuestions, addQuiz  } from '../app/quizesSlice.js'
import { addScore  } from '../app/scoresSlice.js'
import {gradeQuiz, mergeScores} from '../utility/util'
import {Redirect, useLocation} from "react-router-dom";
import '../style/createpage.css'
import '../style/testpage.css'
import {scoreQuiz} from '../utility/quizMethods'


export default function TestPage() {
    const dispatch = useDispatch();
    let quizId = window.location.href.split('/')[4].split('?')[0]
    const onLoad = useRef(true)
    let location = useLocation()
    const [name, setName] = useState('')
    const [attempts, setAttempts] = useState({})
    const [quizSubmitted, setQuizSubmitted] = useState({boolean: false, scoreId:''})
    let questionList

    let quiz = useSelector(state => {
      if(state.quizes[`${quizId}`])
        return state.quizes[`${quizId}`]
        else{
          return {scores:[]}
        }
    })

    const justCreated = (quiz.questions && location.state && location.state.justCreated) ? true : false

    function handleSubmit()  {
      let unfilled = []
      if (name.length === 0) unfilled.push('Please enter your name before submitting your answers')
      if (Object.keys(questionList).length !== Object.keys(attempts).length) unfilled.push('Please answer all of the questions before submitting your answers')
  
      if(unfilled.length === 0){
       scoreQuiz(Object.values(attempts),{score:gradeQuiz(quiz.questions, attempts),quiz:quiz,testTaker:name})
       .then(response => {
         let newObject = Object.assign({}, quizSubmitted)
         newObject.scoreId = response.score_id 
         newObject.boolean = true
        let scoreObject = {}
        scoreObject[`${response.score_id}`] = [response.score_id,quizId,name,gradeQuiz(quiz.questions, attempts)]
        dispatch(addScore(scoreObject))
        dispatch(addQuiz(response.quiz))
        setQuizSubmitted(newObject)
       })
       .catch((error) =>{
        console.log(error)
        alert('An error occurred with our servers. Please try submitting your answers at a later time.')
       })
        return
      }
      let alertString = ''
  
      if (unfilled.length > 0){
        unfilled.forEach((input,i) =>{
          alertString += "\n"
          alertString += input 
        })   
      } 
      alert(alertString)
  
    }

    function handleChange(e){
  
      let value = e.currentTarget.value 
      if (value.length === 0) value = ''
   
      if(value.length > 8){
        e.currentTarget.value = name 
        return
      }
      let counter = document.getElementById('name')
      counter.innerHTML = value.length.toString() + "/8"
      setName(value)
      return
    }

    function handleSelect( key, answer){
      let newObject = Object.assign({}, attempts)
      newObject[`${key}`] = {questionId:key,answer:answer}
      setAttempts(newObject)
    }

    function handleRedirect(){
      if(quizSubmitted.boolean){
        let stateScores = (location.state && location.state.scores) ? location.state.scores : []
        return <Redirect to={{pathname:`/score/${quizSubmitted.scoreId}?quiz=${quizId}`,state:{justScored:true,score:gradeQuiz(quiz.questions,attempts)}}}/>
      }
    }


    useEffect(() => {
      if(onLoad.current){
      if(!justCreated) dispatch(getQuestions(quizId))
        onLoad.current = false;
      }
    },[dispatch,quizId]);

    if(quiz && quiz.questions && quiz.test_questions){
      questionList = Object.keys(quiz.test_questions).map((key,i) =>{
        let question = quiz.test_questions[`${key}`]
        return (
          <div key={i} className="question-holder question-margin">
            <div className="question">
                <div>Question {i + 1}: {question.question}</div>
            </div>
              <div className={question.answer_1.toLowerCase() !== 'n/a' ? "" : "no-display" }><input onChange={(e) => handleSelect(key, question.answer_1)} type="radio" name={question.id} /><label>{question.answer_1}</label></div>
              <div className={question.answer_2.toLowerCase() !== 'n/a' ? "" : "no-display" }><input onChange={(e) => handleSelect(key, question.answer_2)} type="radio" name={question.id} /><label>{question.answer_2}</label></div>
              <div className={question.answer_3.toLowerCase() !== 'n/a' ? "" : "no-display" }><input onChange={(e) => handleSelect(key, question.answer_3)} type="radio" name={question.id} /><label>{question.answer_3}</label></div>
              <div className={question.answer_4.toLowerCase() !== 'n/a' ? "" : "no-display" }><input onChange={(e) => handleSelect(key, question.answer_4)} type="radio" name={question.id} /><label>{question.answer_4}</label></div>
          
          </div>
        );

      });
    }



  return (
  
<div className="page-holder">
      <div className="page-top-section">
      <div className="pokeball"></div>
          <div className="page-top-right">
            <div className="test-title"><div>{quiz.title}</div></div>
          </div>
          <div className="pokeball2"></div>
      </div>
      <div className="questions test-questions">
        <span>Name: </span><input className="name-input" onChange={(e) => handleChange(e)} /><div id="name" className="name-counter">0/8</div>
        <div className="result-title">Questions</div>
        {questionList}
        <button onClick={(e) => handleSubmit(e)} className="submit test-submit">Submit</button>
        {handleRedirect()}
      </div>
</div>
  );    
}