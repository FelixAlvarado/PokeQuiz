import React,{ useState, useRef, useEffect } from 'react';
import '../style/scorepage.css'
import { useSelector, useDispatch } from 'react-redux';
import { getQuestions  } from '../app/quizesSlice.js'
import {pokePicture} from '../utility/util'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy, faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import AttemptItem from './AttemptItem'
import {Link} from "react-router-dom";
import '../style/createpage.css'
import '../style/testpage.css'


export default function TestPage() {
    const dispatch = useDispatch();
    let quizId = window.location.href.split('/')[4].split('?')[0]
    const onLoad = useRef(true)
    const [picture, setPicture] = useState('')
    const [picture2, setPicture2] = useState('')
    const [copyIcon, setCopyIcon] = useState({icon:faCopy,className:"copy-icon"})
    const [name, setName] = useState('')
    let questionList


 
    const quiz = useSelector(state => {
      if(state.quizes[`${quizId}`])
        return state.quizes[`${quizId}`]
        else{
          return {}
        }
    })

    function handleClick(e) {
      e.preventDefault()
      let text = document.getElementById("currentLink")
      text.select()
      document.execCommand("copy")
      setCopyIcon({icon:faCheckCircle,className:"copy-icon2"})
    }

    console.log('here is the quiz', quiz)

    function handleImage(number){

    let image = number === 'two' ? picture2 : picture;
      if (picture.length > 0){
        return(
          <img alt="pokemon" src={image} className="page-picture"/>
        )
      } else {
        return(
          <div className="page-picture"></div>
        )
      }
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
        console.log('here is the quetion')
        return (
          <div key={i} className="question-holder question-margin">
            <div className="question">
                <div>Question {i + 1}: {question.question}</div>
            </div>
              <div><input type="radio" name={question.id} /><label>{question.correct_answer}</label></div>
              <div><input type="radio" name={question.id} /><label>{question.wrong_answer1}</label></div>
              <div><input type="radio" name={question.id} /><label>{question.wrong_answer2}</label></div>
              <div><input type="radio" name={question.id} /><label>{question.wrong_answer3}</label></div>
          
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
      </div>
      <button className="submit">Submit</button>
</div>
  );    
}