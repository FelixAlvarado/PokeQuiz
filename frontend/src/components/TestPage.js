import React,{ useState, useRef, useEffect } from 'react';
import '../style/scorepage.css'
import { useSelector, useDispatch } from 'react-redux';
import { getQuestions  } from '../app/quizesSlice.js'
import {pokePicture} from '../utility/util'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy, faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import AttemptItem from './AttemptItem'
import {Link} from "react-router-dom";
import '../style/testpage.css'

export default function ScorePage() {
    const dispatch = useDispatch();
    let quizId = window.location.href.split('/')[4].split('?')[0]
    const onLoad = useRef(true)
    const [picture, setPicture] = useState('')
    const [picture2, setPicture2] = useState('')
    const [copyIcon, setCopyIcon] = useState({icon:faCopy,className:"copy-icon"})
    let questionList


 
    const quiz = useSelector(state => {
      if(state.quizes[`${quizId}`]){
      return state.quizes[`${quizId}`]
      }else{
        return {scores:[[]]}
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

    useEffect(() => {
      if(onLoad.current){
        dispatch(getQuestions(quizId))
        setPicture(pokePicture())
        setPicture2(pokePicture())
        onLoad.current = false;
      }
    },[dispatch,quizId]);

    if(quiz.attempts && quiz.questions){
      questionList = Object.keys(quiz.attempts).map((key,i) =>{
        let currentAttempt = quiz.attempts[`${key}`]
        let currentQuestion = quiz.questions[`${currentAttempt.question_id}`]
        return <AttemptItem key={i} attempt={currentAttempt} question={currentQuestion} />
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
      <div className="questions">
        <div className="result-title">Results</div>
        {questionList}
      </div>
</div>
  );    
}