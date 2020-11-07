
export const pokePicture = () => {
    let index = Math.floor(Math.random() * 721) + 1
    index = index.toString()
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index}.png`
}

export const averageScore = (scores) => {


    if(!scores || scores.length === 0){
      return 'N/A'
    }

    let total = 0;

    scores.forEach(score =>{
      total += score[1]
    })

    return Math.floor(total / scores.length).toString() + '%'
}

export const gradeQuiz = (questions, answers) => {
  let correct = 0;
  let quizLength = Object.keys(questions).length

  Object.keys(answers).forEach(key =>{
    if(answers[`${key}`].answer === questions[`${key}`].correct_answer){
      correct += 1
    }
  }); 

  return Math.floor((correct / quizLength) * 100)

}

export const organizeState = (state, action) => {
  console.log('here is the state', state, 'here is the action', action)
  let result = Object.assign({}, state)
  let actionKeys = Object.keys(action)
  actionKeys.forEach((action) =>{
    if(state[`${action.id}`] && state[`${action.id}`].scores.length > 0 && action.scores.length === 0){
      
    }else {
      result[`${action.id}`] = action
    }
  })
  console.log('here is the result', result)
  return result
};
