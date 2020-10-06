const axios = require('axios');


export const createQuiz = (title, questions) => {
    return axios.post('http://localhost:5000/create',{
        title: title,
        questions: questions
        }).then(response =>{
            return response.data
        })

}