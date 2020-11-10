import React, { useRef, useEffect, useState } from 'react';
import { getQuiz  } from '../app/quizesSlice.js'
import { useSelector, useDispatch } from 'react-redux';
import '../style/quizpage.css'
import {pokePicture, mergeScores} from '../utility/util'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy, faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import ScoreList from './ScoreList'
import {Link, useLocation} from "react-router-dom";
import AlertModal from './alertModal.js'


export default function QuizPage() {
  const dispatch = useDispatch();
  let id = window.location.href.split('/')[4]
  const onLoad = useRef(true)
  const [picture, setPicture] = useState('')
  const [copyIcon, setCopyIcon] = useState({icon:faCopy,className:"copy-icon"})
  let location = useLocation()
  let [showAlert, setShowAlert] = useState(false)
  let [alertText, setAlertText] = useState('');
  let [marginMod, setMarginMod] = useState('');

  const quiz = useSelector(state => {
    if(state.quizes[`${id}`]){
    return state.quizes[`${id}`]
    }else{
      return {scores:[[]]}
    }
  })

  if(location.state && location.state.scores){
    quiz = mergeScores(quiz,{scores:location.state.scores})
  }

  console.log('here is the quiz page quiz', quiz)

  // console.log('here is the quiz', quiz)

  let title = quiz ? quiz.title : ''

  function handleImage(){
    if (picture.length > 0){
      return(
        <img alt="pokemon" src={picture} className="page-picture" style={{width: '100px'}}/>      )
    } else {
      return(
        <div className="page-picture"></div>
      )
    }
  }

  function handleClick(e) {
    e.preventDefault()
    let text = document.getElementById("currentLink")
    text.select()
    document.execCommand("copy")
    setCopyIcon({icon:faCheckCircle,className:"copy-icon2"})
  }

  function handleAlert(){
    if(showAlert){
      return <AlertModal showAlert={showAlert} alertText={alertText}/>

    }
  }


useEffect(() => {

  if(onLoad.current){
  
    if (navigator.userAgent.toLowerCase().indexOf('safari') > -1 && !(navigator.userAgent.toLowerCase().indexOf('chrome') > -1) && !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
      setMarginMod('margin-mod')
    }
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0;
    if(!location.state) dispatch(getQuiz(id,quiz.scores))
    setPicture(pokePicture())
    if(location.state && location.state.justCreated){
      if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        alert("Your quiz was successfully created! Share this page's link with your friends to see how they score!")
      }else{
        setAlertText("Your quiz was successfully created! Share this page's link with your friends to see how they score!")
        setShowAlert(true)
      }
    }
    onLoad.current = false;
  }
},[dispatch,id, location.state]);

  return (

    <div className="page-holder">
      <div className="page-top-section">
        {handleImage()}
          <div className="page-top-right">
            <div className="page-title"><div>{title}</div></div>
              <div className="link-button-holder">
              <Link to={{pathname:`/test/${id}`,state:{scores:quiz.scores}}}  className="quiz-button">Take Quiz</Link>
              <div className={`page-link-holder ${marginMod}`}>
                <input id="currentLink" defaultValue={window.location.href}/>
                <FontAwesomeIcon onClick={(e) => handleClick(e)} className="copy-icon" icon={copyIcon.icon} size="lg" />
              </div>
            </div>
          </div>
      </div>
      <Link to={`/test/${id}`} className="quiz-button2"><span>Take Quiz</span></Link>
      <button onClick={(e) => handleClick(e)} className="copy-link">Copy Link</button>
      <ScoreList scores={quiz.scores} quizId={quiz.id} />
      {handleAlert()}
    </div>


  );    
}
