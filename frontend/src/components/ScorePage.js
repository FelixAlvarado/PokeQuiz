import React,{ useState, useRef, useEffect } from 'react';
import '../style/scorepage.css'
import { useSelector, useDispatch } from 'react-redux';
import { getQuizAttempt  } from '../app/quizesSlice.js'
import {pokePicture} from '../utility/util'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy, faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import AttemptItem from './AttemptItem'
import {Link} from "react-router-dom";

export default function ScorePage() {
    const dispatch = useDispatch();
    let scoreId = window.location.href.split('/')[4].split('?')[0]
    let quizId =  window.location.href.split('=')[1]
    const onLoad = useRef(true)
    const [picture, setPicture] = useState('')
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

    function handleImage(){
      if (picture.length > 0){
        return(
          <img alt="pokemon" src={picture} className="page-picture"/>
        )
      } else {
        return(
          <div className="page-picture"></div>
        )
      }
    }

    useEffect(() => {
      if(onLoad.current){
        dispatch(getQuizAttempt(scoreId))
        setPicture(pokePicture())
        onLoad.current = false;
      }
    },[dispatch,scoreId]);

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
        {handleImage()}
          <div className="page-top-right">
            <div className="page-title"><div>{quiz.title}</div></div>
              <div className="link-button-holder">
              <Link className="quiz-button" to={`/quiz/${quizId}`}>Quiz Page</Link>
              <div className="page-link-holder">
                <input id="currentLink" defaultValue={window.location.href}/>
                <FontAwesomeIcon onClick={(e) => handleClick(e)} className="copy-icon" icon={copyIcon.icon} size="lg" />
              </div>
            </div>
          </div>
      </div>
      <Link className="quiz-button2" to={`/quiz/${quizId}`}><span>Quiz Page</span></Link>
      <button onClick={(e) => handleClick(e)} className="copy-link">Copy Link</button>
      <div className="score-info-holder">
        <div>Testee: {quiz.scores[0][0]}</div>
        <div>Score: {quiz.scores[0][1]}</div>
      </div>
      <div className="questions">
        <div className="result-title">Results</div>
        {questionList}
      </div>
</div>
  );    
}