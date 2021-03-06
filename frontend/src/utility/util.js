
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
      total += score[3]
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

  let scores = []
  let keys = {}

  oldQuiz.scores.forEach((score) =>{
    keys[`${score[0]}`] = true
    scores.push(score)
  })

  newQuiz.scores.forEach((score) =>{

    if(!keys[`${score[0]}`]){
      scores.push(score)
    }
  })
  
  return scores
};

export const organizeScores = (scores, id) => {
  let  result = []
  Object.values(scores).forEach((score) =>{
    if(id == score[1]) result.push(score)
  })

  return result

 }