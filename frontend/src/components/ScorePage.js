import React,{ useState, useRef, useEffect } from 'react';
import '../style/scorepage.css'
import { useSelector, useDispatch } from 'react-redux';
import { getQuizAttempt  } from '../app/quizesSlice.js'
import {pokePicture} from '../utility/util'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy, faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import AttemptItem from './AttemptItem'
import {Link, useLocation} from "react-router-dom";
import AlertModal from './alertModal.js'

export default function ScorePage() {
    const dispatch = useDispatch();
    let scoreId = window.location.href.split('/')[4].split('?')[0]
    let quizId =  window.location.href.split('=')[1]
    const onLoad = useRef(true)
    const [picture, setPicture] = useState('')
    const [copyIcon, setCopyIcon] = useState({icon:faCopy,className:"copy-icon"})
    let questionList
    let location = useLocation()
    let [showAlert, setShowAlert] = useState(false)
    let [alertText, setAlertText] = useState('');


 
    const quiz = useSelector(state => {
      console.log('here is the quizId being used', quizId)
      if(state.quizes[`${quizId}`] && state.quizes[`${quizId}`].attempts){
        console.log('here is the quiz being used', state.quizes[`${quizId}`])
      return state.quizes[`${quizId}`]
      }else{
       // setTimeout(refresh(state),750)
        return {scores:[[]]}
      }
    })

    function refresh(state){
      console.log('made it to refetch for score page')
      if(!!state.quizes[`${quizId}`]){
        console.log('re fetching for score page with the following score_id', scoreId)
       dispatch(getQuizAttempt(scoreId))
            }
    }

    function handleClick(e) {
      e.preventDefault()
      let text = document.getElementById("currentLink")
      text.select()
      document.execCommand("copy")
      setCopyIcon({icon:faCheckCircle,className:"copy-icon2"})
    }

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

    function handleAlert(){
      if(showAlert){
        return <AlertModal showAlert={showAlert} alertText={alertText}/>
  
      }
    }

    useEffect(() => {
      if(onLoad.current){
        dispatch(getQuizAttempt(scoreId))
        setPicture(pokePicture())
        if(location.state && location.state.justScored){
          if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
            alert(`You scored ${location.state.score}%! You can view your answers on this page. Share this page with the quiz creater so they can see how you did!`)
          }else{
            setAlertText(`You scored ${location.state.score}%! You can view your answers on this page. Share this page with the quiz creater so they can see how you did!`)
            setShowAlert(true)
          }
        }
        onLoad.current = false;
      }
    },[dispatch,scoreId, location.state]);

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
      {handleAlert()}
</div>
  );    
}