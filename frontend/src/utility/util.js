
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

export const mergeScores = (oldQuiz, newQuiz) => {
  console.log('here is the old quiz', oldQuiz)
  console.log('here is the new quiz', newQuiz)
  let result = Object.assign({}, oldQuiz)
  let keys = {}

  result.scores.forEach((score) =>{
    keys[`${score[0]}`] = true
  })

  oldQuiz.scores.forEach((score) =>{
    if(!keys[`${score[0]}`]){
      result.scores.push(score)
    }
  })

  result.scores.sort((a,b) => a[3] - b[3])
  
  console.log('here is the result', result)
  return result
};
