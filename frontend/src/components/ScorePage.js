import React,{ useState, useRef, useEffect } from 'react';
import '../style/scorepage.css'
import { useSelector, useDispatch } from 'react-redux';
import { getQuizAttempt  } from '../app/quizesSlice.js'
import {pokePicture, mergeScores} from '../utility/util'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy, faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import AttemptItem from './AttemptItem'
import {Link, useLocation} from "react-router-dom";
import AlertModal from './alertModal.js'

export default function ScorePage(scores, props) {
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
    let [marginMod, setMarginMod] = useState('')
 
    let quiz = useSelector(state => {
      if(state.quizes[`${quizId}`] && state.quizes[`${quizId}`].attempts){
      return state.quizes[`${quizId}`]
      }else{
        return {scores:[]}
      }
    })
    let title = quiz ? quiz.title : ''

    let testee = quiz.scores[0] ? quiz.scores[0][2] : ''
    let score =  quiz.scores[0] ? quiz.scores[0][3] : ''

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

    function topSection() {
      if(/chrome/i.test( navigator.userAgent )){
        return( 
      <div className="page-top-section-grid">
        {handleImage()}
          <div className="page-top-right">
            <div className="page-title"><div>{title}</div></div>
              <div className="link-button-holder">
              <Link to={{pathname:`/quiz/${quizId}`}}  className="quiz-button">Quiz Page</Link>
              <div className={`page-link-holder ${marginMod}`}>
                <input id="currentLink" defaultValue={window.location.href}/>
                <FontAwesomeIcon onClick={(e) => handleClick(e)} className="copy-icon" icon={copyIcon.icon} size="lg" />
              </div>
            </div>
          </div>
      </div>)
      }else {
        return(
      <div className="page-top-section-grid">
        {handleImage()}
          <div className="page-top-right">
            <div className="page-title"><div>{title}</div></div>
              <div className="link-button-holder">
              <Link to={{pathname:`/quiz/${quizId}`}}  className="quiz-button">Quiz Page</Link>
              <div className={`page-link-holder ${marginMod}`}>
                <input id="currentLink" defaultValue={window.location.href}/>
                <FontAwesomeIcon onClick={(e) => handleClick(e)} className="copy-icon" icon={copyIcon.icon} size="lg" />
              </div>
            </div>
          </div>
      </div>
        )
      }
    }
  

    useEffect(() => {
      if(onLoad.current){
        if (navigator.userAgent.toLowerCase().indexOf('safari') > -1 && !(navigator.userAgent.toLowerCase().indexOf('chrome') > -1) && !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
          setMarginMod('margin-mod')
        }
        document.body.scrollTop = 0; 
        document.documentElement.scrollTop = 0;
        if(!location.state || (!!location.state && !location.state.justCreated)) dispatch(getQuizAttempt(scoreId))
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
      {topSection()}
      <Link className="quiz-button2" to={`/quiz/${quizId}`}><span>Quiz Page</span></Link>
      <button onClick={(e) => handleClick(e)} className="copy-link">Copy Link</button>
      <div className="score-info-holder">
        <div>Testee: {testee}</div>
        <div>Score: {score}</div>
      </div>
      <div className="questions">
        <div className="result-title">Results</div>
        {questionList}
      </div>
      {handleAlert()}
</div>
  );    
}