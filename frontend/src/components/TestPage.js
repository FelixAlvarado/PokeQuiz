import React,{ useState, useRef, useEffect } from 'react';
import '../style/scorepage.css'
import { useSelector, useDispatch } from 'react-redux';
import { getQuestions  } from '../app/quizesSlice.js'
import {pokePicture} from '../utility/util'
import {Redirect} from "react-router-dom";
import '../style/createpage.css'
import '../style/testpage.css'


export default function TestPage() {
    const dispatch = useDispatch();
    let quizId = window.location.href.split('/')[4].split('?')[0]
    const onLoad = useRef(true)
    const [picture, setPicture] = useState('')
    const [picture2, setPicture2] = useState('')
    const [name, setName] = useState('')
    const [attempts, setAttempts] = useState({})
    const [quizSubmitted, setQuizSubmitted] = useState(false)
    let questionList


 
    const quiz = useSelector(state => {
      if(state.quizes[`${quizId}`])
        return state.quizes[`${quizId}`]
        else{
          return {}
        }
    })

    function handleSubmit(e)  {
      //e.preventDefault()
      let unfilled = []
      if (name.length === 0) unfilled.push('Please enter your name before submitting your answers')
      if (Object.keys(questionList).length != Object.keys(attempts).length) unfilled.push('Please answer all of the questions before submitting your answers')
  
      if(unfilled.length === 0){
        setQuizSubmitted(true)
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
      console.log('here is the new object', newObject)
    }

    function handleRedirect(){
      if(quizSubmitted){
        return <Redirect to={{pathname:`/quiz/${quizId}`,state:{justCreated:true}}}/>
      }
    }


    useEffect(() => {
      if(onLoad.current){
        dispatch(getQuestions(quizId))
        setPicture(pokePicture())
        setPicture2(pokePicture())
        onLoad.current = false;
      }
    },[dispatch,quizId]);

    if(quiz && quiz.questions){
      questionList = Object.keys(quiz.questions).map((key,i) =>{
        let question = quiz.questions[`${key}`]
        return (
          <div key={i} className="question-holder question-margin">
            <div className="question">
                <div>Question {i + 1}: {question.question}</div>
            </div>
              <div className={question.answer_1.toLowerCase() != 'n/a' ? "" : "no-display" }><input onChange={(e) => handleSelect(key, question.answer_1)} type="radio" name={question.id} /><label>{question.answer_1}</label></div>
              <div className={question.answer_2.toLowerCase() != 'n/a' ? "" : "no-display" }><input onChange={(e) => handleSelect(key, question.answer_2)} type="radio" name={question.id} /><label>{question.answer_2}</label></div>
              <div className={question.answer_3.toLowerCase() != 'n/a' ? "" : "no-display" }><input onChange={(e) => handleSelect(key, question.answer_3)} type="radio" name={question.id} /><label>{question.answer_3}</label></div>
              <div className={question.answer_4.toLowerCase() != 'n/a' ? "" : "no-display" }><input onChange={(e) => handleSelect(key, question.answer_4)} type="radio" name={question.id} /><label>{question.answer_4}</label></div>
          
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