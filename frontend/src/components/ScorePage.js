import React,{ useRef, useEffect } from 'react';
import '../style/scorepage.css'
import { useSelector, useDispatch } from 'react-redux';
import { getQuizAttempt  } from '../app/quizesSlice.js'




export default function ScorePage() {
    const dispatch = useDispatch();
    let scoreId = window.location.href.split('/')[4].split('?')[0]
    let quizId =  window.location.href.split('=')[1]
    const onLoad = useRef(true)

    const quiz = useSelector(state => {
      if(state.quizes[`${quizId}`]){
      return state.quizes[`${quizId}`]
      }else{
        return {}
      }
    })

    console.log('here is the quiz', quiz)


    useEffect(() => {
      if(onLoad.current){
        dispatch(getQuizAttempt(scoreId))
        onLoad.current = false;
      }
    },[dispatch,scoreId]);

  return (
    <div className="score-page-holder">
        <div>Made it to score page for score {scoreId} </div>
        <div>Made it to score page for score {scoreId} </div>
        <div>Made it to score page for score {scoreId} </div>
        <div>Made it to score page for score {scoreId} </div>
        <div>Made it to score page for score {scoreId} </div>
        <div>Made it to score page for score {scoreId} </div>
        <div>Made it to score page for score {scoreId} </div>
        <div>Made it to score page for score {scoreId} </div>
        <div>Made it to score page for score {scoreId} </div>
        <div>Made it to score page for score {scoreId} </div>
    </div>

  );    
}