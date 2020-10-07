const axios = require('axios');

export const fetchQuizes = () => {
    return axios.get('http://localhost:5000/quizes').then(response =>{
        return response.data.quizes
    })
}

export const fetchQuiz = (id) => {
    return axios.get(`http://localhost:5000/quiz?id=${id}`).then(response =>{
        return response.data.quiz
    })
}

export const fetchQuizAttempt = (id) => {
    return axios.get(`http://localhost:5000/attempt?id=${id}`).then(response =>{
        return response.data
    })
}

export const fetchQuestions = (id) => {
    return axios.get(`http://localhost:5000/questions?id=${id}`).then(response =>{
        return response.data
    })
}



  

