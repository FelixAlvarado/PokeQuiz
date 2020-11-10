import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {fetchQuizes, fetchQuiz, fetchQuizAttempt, fetchQuestions} from '../utility/fetch'

export const getQuizes = createAsyncThunk(
    'quiz/fetchQuizesStatus',
    async (id) => {
      const response = await fetchQuizes(id)
      return response
    
    }     
  )

  //fetches quiz data for quiz page
  export const getQuiz = createAsyncThunk(
    'quiz/fetchQuizStatus',
    async (id,scores) => {
      const response = await fetchQuiz(id,scores)
      return response
    
    }     
  )

  //fetches questions and attempt data for the quiz associated with the score id
  export const getQuizAttempt = createAsyncThunk(
    'quiz/fetchQuizAttemptStatus',
    async (id) => {
      const response = await fetchQuizAttempt(id)
      return response
    
    }     
  )

  //fetches questions for test page
  export const getQuestions = createAsyncThunk(
    'quiz/fetchQuestionsStatus',
    async (id) => {
      const response = await fetchQuestions(id)
      return response
    
    }     
  )



export const quizesSlice = createSlice({
  name: 'quizes',
  initialState: {},
        reducers:{addQuiz: (state, action) => {
          console.log('adding new quiz', action.payload)
          Object.assign(state,action.payload)
        }},
        extraReducers:{
        [getQuizes.fulfilled]: (state, action) => {
          Object.assign(state,action.payload)
        },
        [getQuiz.fulfilled]: (state, action) => {
          Object.assign(state,action.payload)
      },
        [getQuizAttempt.fulfilled]: (state, action) => {
           Object.assign(state,action.payload)
    },
    [getQuestions.fulfilled]: (state, action) => {
      console.log('here is the action',action)      
      let newQuiz = Object.values(action.payload)[0]
      if(newQuiz && newQuiz.title && newQuiz.questions){
        Object.assign(state,action.payload)
      }
}

  },
});

export const { addQuiz } = quizesSlice.actions;


export const { receiveQuiz } = quizesSlice.actions;

export const selectQuizes = state => state.quizes;

export default quizesSlice.reducer;