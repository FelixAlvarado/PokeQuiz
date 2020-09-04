import React, { useEffect, useRef } from 'react';
import { getQuizes, selectQuizes } from '../app/quizesSlice.js'
import { useSelector, useDispatch } from 'react-redux';

export default function QuizItem({quiz}) {

  return (
    <div>
        <p>Title: {quiz.title}</p>
        <p>Scores: {quiz.scores}</p>
    </div>
  );    
}