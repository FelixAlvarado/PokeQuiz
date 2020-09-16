import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {fetchQuizes, fetchQuiz} from '../utility/fetch'

export const getQuizes = createAsyncThunk(
    'quizes/fetchQuizesStatus',
    async (id) => {
      const response = await fetchQuizes(id)
      return response
    
    }     
  )

  export const getQuiz = createAsyncThunk(
    'quiz/fetchQuizStatus',
    async (id) => {
      const response = await fetchQuiz(id)
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