import React, {useState} from 'react';
import '../style/createpage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'

export default function CreatePage() {

  const [title, setTitle] = useState('')
  const questionObject1 = {question:'', correctAnswer:'', wrongAnswer1:'', wrongAnswer2:'', wrongAnswer3:''}
  const questionObject2 = {question:'', correctAnswer:'', wrongAnswer1:'', wrongAnswer2:'', wrongAnswer3:''}
  const [questions, setQuestions] = useState({0:questionObject1, 1:questionObject2})
  const [index, setIndex] = useState(1)
  let questionForm

  function removeQuestion(e){
    e.preventDefault();
    if(index < 2){
      return
    }
    let newObject = Object.assign(questions)
    delete newObject[`${index}`]
    let newIndex = index - 1 
    setQuestions(newObject)
    setIndex(newIndex)
  }

  function addQuestion(e) {
    e.preventDefault();
    if(index > 8){
      return
    } 
    let newIndex = index + 1
    let newObject = {}
    newObject[`${newIndex}`] = {question:'', correctAnswer:'', wrongAnswer1:'', wrongAnswer2:'', wrongAnswer3:''}
    let newState = Object.assign(questions, newObject)
    setQuestions(newState)
    setIndex(newIndex)
    return
  }

  function handleChange(e,keyword, id){

    let counter

    console.log('here is the id', id)

    if(typeof id == 'number'){
      let newId = id.toString() + keyword
      console.log('here is the newId', newId)
      counter = document.getElementById(newId)
      console.log('here is the counter object', counter)
    } else {
      console.log('made it to else')
      counter = document.getElementById(keyword)
    }

    let value = e.currentTarget.value 
    if (value.length === 0) value = ''

    let newObject = Object.assign(questions)

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
        newObject[`${id}`].question = value 
        setQuestions(newObject)
        break;
      default:
        if(value.length > 100){
          e.currentTarget.value = questions[`${id}`][`${keyword}`] 
          break;
        }
        counter.innerHTML = value.length.toString() + "/100"
        newObject[`${id}`][`${keyword}`]  = value 
        setQuestions(newObject)
        break;
        
    }

    return;
  }

  questionForm = Object.values(questions).map((question, i) =>{
    return (
      <div key={i} className="question-holder">
        <div><p>Question {i + 1}: </p><input onChange={(e) =>handleChange(e,"question", i)} placeholder={question.question}/><div id={`${i}question`} className="counter2">0/150</div></div>
        <div><p>Correct Answer: </p><input onChange={(e) =>handleChange(e,"correctAnswer", i)} placeholder={question.correctAnswer}/><div id={`${i}correctAnswer`} className="counter2">0/100</div></div>
        <div><p>Wrong Answer 1: </p><input onChange={(e) =>handleChange(e,"wrongAnswer1", i)} placeholder={question.wrongAnswer}/><div id={`${i}wrongAnswer1`} className="counter2">0/100</div></div>
        <div><p>Wrong Answer 2: </p><input onChange={(e) =>handleChange(e,"wrongAnswer2", i)} placeholder={question.wrongAnswer}/><div id={`${i}wrongAnswer2`} className="counter2">0/100</div></div>
        <div><p>Wrong Answer 3: </p><input onChange={(e) =>handleChange(e,"wrongAnswer3", i)} placeholder={question.wrongAnswer}/><div id={`${i}wrongAnswer3`} className="counter2">0/100</div></div>
        <br/>
        <br/>
      </div>

    );
  })

  function handleAddClass(){
    if (index > 8){
      return "add"
    }else {
      return "add2"
    }
  }

  function handleRemoveClass(){
    if (index < 2){
      return "remove"
    }else {
      return "remove2"
    }
  }

  return (  
    <div className="page-holder">
      <div className="quiz-form">
        <h1>Create Your Quiz!</h1>
        <span>Title: </span><input onChange={(e) => handleChange(e, "title")}/><div id="title" className="counter">0/22</div>
        <p>Questions:</p>
        <br/>
        <br/>
        {questionForm}
        <div className="icon-holder">
          <FontAwesomeIcon className={ index < 2 ? "remove2" : "remove"} onClick={(e) => removeQuestion(e)} icon={faMinus} size="3x" />
          <FontAwesomeIcon className={ index > 8 ? "add2" : "add"} onClick={(e) => addQuestion(e)} icon={faPlus} size="3x" />
        </div>
        <button>Submit</button>
      </div>
    </div>
  );    
}