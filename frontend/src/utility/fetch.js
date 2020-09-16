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

