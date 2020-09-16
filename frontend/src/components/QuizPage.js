import React, { useRef, useEffect } from 'react';
import { useParams } from "react-router-dom"
import { getQuiz  } from '../app/quizesSlice.js'
import { useSelector, useDispatch } from 'react-redux';


export default function QuizPage() {
  const dispatch = useDispatch();
  let { id } = useParams();
  const quiz = useSelector(state => state.quizes[`${id}`])
  const onLoad = useRef(true)
  console.log('here is the quiz', quiz)


useEffect(() => {
  if(onLoad.current){
    dispatch(getQuiz(id))
    onLoad.current = false;
  }
});

  return (
    <div>
      <p>here is the id: {id}</p>
      <p>here is the id: {id}</p>
      <p>here is the id: {id}</p>
      <p>here is the id: {id}</p>
      <p>here is the id: {id}</p>
      <p>here is the id: {id}</p>
    </div>
  );    
}
