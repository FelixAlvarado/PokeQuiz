import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {fetchQuizes, fetchQuiz, fetchQuizAttempt} from '../utility/fetch'

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
    async (id) => {
      const response = await fetchQuiz(id)
      return response
    
    }     
  )

  //fetches questions and attempt data for the quiz associated with the score id
  export const getQuizAttempt = createAsyncThunk(
    'quiz/fetchQuizStatus',
    async (id) => {
      const response = await fetchQuizAttempt(id)
      return response
    
    }     
  )


export const quizesSlice = createSlice({
  name: 'quizes',
  initialState: {},
        reducers:{},
        extraReducers:{
        [getQuizes.fulfilled]: (state, action) => {
            Object.assign(state,action.payload)
        },
        [getQuiz.fulfilled]: (state, action) => {
          Object.assign(state,action.payload)
      }

  },
});


export const { receiveQuiz } = quizesSlice.actions;

export const selectQuizes = state => state.quizes;

export default quizesSlice.reducer;