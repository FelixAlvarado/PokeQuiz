import React, {useState} from 'react';
import '../style/createpage.css'

export default function CreatePage() {

  const [title, setTitle] = useState('')
  const questionObject = {question:'', correctAnswer:'', wrongAnswer1:'', wrongAnswer2:'', wrongAnswer3:''}
  const [questions, setQuestions] = useState({0:questionObject, 1:questionObject})
  let questionForm

  function handleChange(e,keyword, id){

    let counter

    console.log('here is the id', id)

    if(typeof id == 'number'){
      let newId = id.toString() + keyword
      console.log('here is the newId', newId)
      counter = document.getElementById(newId)
    } else {
      console.log('made it to else')
      counter = document.getElementById(keyword)
    }

    let value = e.currentTarget.value 

    switch(keyword) {
      case 'title':
        if(value.length > 22){
          e.currentTarget.value = title 
          break;
        }
        counter.innerHTML = value.length.toString() + "/22"
        setTitle(value)
        break;
      case 'question':
        if(value.length > 150){
          e.currentTarget.value = questions[`${id}`].question 
          break;
        }
        counter.innerHTML = value.length.toString() + "/150"
        let newObject = Object.assign(questions)
        newObject[`${id}`].question = value 
        setQuestions(newObject)
        break;
    }
    return;
  }

  questionForm = Object.values(questions).map((question, i) =>{
    return (
      <div key={i} className="question-holder">
        <div><p>Question {i + 1}: </p><input onChange={(e) =>handleChange(e,"question", i)} placeholder={question.question}/><div id={`${i}` + 'question'} className="counter2">0/150</div></div>
        <div><p>Correct Answer: </p><input onChange={(e) =>handleChange(e,"correctAnswer", i)} placeholder={question.correctAnswer}/><div id={`${i}` + 'correctAnswer'} className="counter2">0/100</div></div>
        <div><p>Wrong Answer 1: </p><input onChange={(e) =>handleChange(e,"wrongAnswer1", i)} placeholder={question.wrongAnswer}/><div id={`${i}` + 'wrongAnswer1'} className="counter2">0/100</div></div>
        <div><p>Wrong Answer 2: </p><input onChange={(e) =>handleChange(e,"wrongAnswer2", i)} placeholder={question.wrongAnswer}/><div id={`${i}` + 'wrongAnswer2'} className="counter2">0/100</div></div>
        <div><p>Wrong Answer 3: </p><input onChange={(e) =>handleChange(e,"wrongAnswer3", i)} placeholder={question.wrongAnswer}/><div id={`${i}` + 'wrongAnswer3'} className="counter2">0/100</div></div>
        <br/>
        <br/>
      </div>

    );
  })

  return (  
    <div className="page-holder">
      <div className="quiz-form">
        <h1>Create Your Quiz!</h1>
        <span>Title: </span><input onChange={(e) => handleChange(e, "title")}/><div id="title" className="counter">0/22</div>
        <p>Questions:</p>
        <br/>
        <br/>
        {questionForm}
      </div>
    </div>
  );    
}