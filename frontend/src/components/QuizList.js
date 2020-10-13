import React, { useEffect, useRef } from 'react';
import { getQuizes, selectQuizes } from '../app/quizesSlice.js'
import { useSelector, useDispatch } from 'react-redux';
import QuizItem from './QuizItem'

export default function QuizList() {
    const quizes = useSelector(selectQuizes)
    const dispatch = useDispatch();
    const onLoad = useRef(true)
    let quizList

  useEffect(() => {
    if(onLoad.current){
      dispatch(getQuizes());
      onLoad.current = false;
    }
  });

  if(quizes) { 
          quizList = Object.values(quizes).reverse().map((quiz, i) =>{
          return <QuizItem key={i} quiz={quiz} />
      })

      // let array = Object.values(quizes);
      // array = array.concat(array);
      // array = array.concat(array);

    // quizList = array.map((quiz, i) =>{
    //       return <QuizItem key={i} quiz={quiz} />
    //   })
  }

  return (
    <div className="quiz-list">
        {quizList}
    </div>
  );    
}