import React, { useState, useEffect} from 'react';
import '../style/scorelist.css'


export default function ScoreList({scores}) {
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
            return 25
        } else if (width < 565) {
            return 30
        } else if (width < 705) {
            return 40
        } else {
            return 55
        }

    }

    function scoreWidthPercent(score){
        return (score / 100 * widthBase).toString() + '%'
    }

    function margin(score) {
        return (widthBase - (score / 100 * widthBase)).toString() + '%'

    }


    if (scores) {
        scoreList = scores.map((score,i)=>{
            console.log('score id', score[2])
            return (
                <div className="score-info" key={i}>
                    <span>{score[0]}</span>
                    <div className="score-bar" style={{width: `${scoreWidthPercent(score[1])}`, marginRight: `${margin(score[1])}`, backgroundColor: `${barColor(score[1])}`}}></div>
                    <span>{score[1]}</span>
                    <button className="attempt-button">Attempt</button>
                </div>
            )
        })
    }

    function setWidth(){
        setWidthBase(findWidthBase())
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
        {scoreList}
      </div>
  );    
}