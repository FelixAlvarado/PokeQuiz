import React from 'react';
import '../style/scorepage.css'


export default function ScorePage() {

    let scoreId = window.location.href.split('/')[4]

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