const axios = require('axios');


export const createQuiz = (title, questions) => {
    return axios.post('http://localhost:5000/create',{
        title: title,
        questions: questions
        }).then(response =>{
            console.log('here the response', response)
            return response.data
        })

}