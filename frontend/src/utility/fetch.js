const axios = require('axios');

let host 

if(window.origin.includes("herokuapp")){
    host = "https://pokequiz1.herokuapp.com"
}else if (window.origin.includes(":5000") ||window.origin.includes(":3000")) {
    host = "http://localhost:5000"
} else {
    host = "http://127.0.0.1:8000"
}

export const fetchQuizes = () => {
    return axios.get(`${host}/quizes`).then(response =>{
        return response.data.quizes
    }).catch(error =>{
        console.log('error occurred on server side when attempting to fetch questions', error)
    })
}

export const fetchQuiz = (id,scores) => {
    return axios.post(`${host}/quiz`,{id:id,scores:scores}).then(response =>{
        return response.data.quiz
    }).catch(error =>{
        console.log('error occurred on server side when attempting to fetch questions', error)
    })
}

export const fetchQuizAttempt = (id) => {
    return axios.get(`${host}/attempt?id=${id}`).then(response =>{
        return response.data
    }).catch(error =>{
        console.log('error occurred on server side with fetch quiz attempt call', error)
    })
}

export const fetchQuestions = (id) => {
    return axios.get(`${host}/questions?id=${id}`).then(response =>{
        return response.data
    }).catch(error =>{
        console.log('error occurred on server side when attempting to fetch questions', error)
    })
}



  

