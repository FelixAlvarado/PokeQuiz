import React, { useState, useEffect} from 'react';
import '../style/scorelist.css'
import {averageScore} from '../utility/util'
import {Link} from "react-router-dom";



export default function ScoreList({scores, quizId}) {

    let scoreList 
    //sets width of bars based on window height
    const [widthBase, setWidthBase] = useState(findWidthBase())
    
    function barColor(score) {
        if (score > 50){
            return "#4dff4d"
        } else if (score <= 50 && score > 20) {
            return "#ffdb4d"
        } else {
            return "#ff1a1a"
        }
    }

    function findWidthBase(){
        let width = window.innerWidth
        if(width < 330){
            return 10
        }else if(width < 400) {
            return 15
        } else if (width < 565) {
            return 25
        } else if (width < 705) {
            return 35
        } else {
            return 45
        }

    }

    function scoreWidthPercent(score){
        return (score / 100 * widthBase).toString() + '%'
    }

    function margin(score) {
        return (widthBase - (score / 100 * widthBase)).toString() + '%'

    }


    if (scores) {
        console.log('here are the scores in quiz page', scores)
        scoreList = scores.map((score,i)=>{
            return (
                <div className="score-info" key={i}>
                    <span>{score[0]}</span>
                    <div className="score-bar" style={{width: `${scoreWidthPercent(score[1])}`, marginRight: `${margin(score[1])}`, backgroundColor: `${barColor(score[1])}`}}></div>
                    <span>{score[1]}</span>
                    <Link to={{pathname:`/score/${score[2]}?quiz=${quizId}`,state:{scores:scores}}}><button className="attempt-button">Attempt</button></Link>
                </div>
            )
        })
    }

    function setWidth(){
        setWidthBase(findWidthBase())
    }

    function handleScoreAverage() {
        if(scores && scores.length > 0){
            return <p className="score-average">Average Score: {averageScore(scores)}</p>;
        }else{
            return <p className="score-average">No one has taken this quiz yet</p>;
        }
    }

    useEffect(() => {

            window.addEventListener("resize", setWidth)

        return function cleanup()  {

            window.removeEventListener('resize', setWidth)
      }
    });

  return (
      <div className="score-list">
        <p>Scores</p>
        {handleScoreAverage()}
        <br></br>
        {scoreList}
      </div>
  );    
}
