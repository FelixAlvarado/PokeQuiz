import React from 'react';
import '../style/scorelist.css'


export default function ScoreList({scores}) {
    console.log('here are the scores',scores);
    let scoreList 
    
    function barColor(score) {
        if (score > 50){
            return "#4dff4d"
        } else if (score <= 50 && score > 20) {
            return "#ffdb4d"
        } else {
            return "#ff1a1a"
        }
    }
//see if can handle width basis in scss file instead
    function scoreWidthPercent(score){
        //using 55% as the max width the bar will take up
        return (score / 100 * 55).toString() + '%'
    }

    function margin(score) {
        return (55 - (score / 100 * 55)).toString() + '%'

    }


    if (scores) {
        scoreList = scores.map((score,i)=>{
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

  return (
      <div className="score-list">
        <p>Scores</p>
        {scoreList}
      </div>
  );    
}
