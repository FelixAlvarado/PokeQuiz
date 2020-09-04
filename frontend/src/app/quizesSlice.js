import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {fetchQuizes} from '../utility/fetch'

export const getQuizes = createAsyncThunk(
    'quizes/fetchQuizesStatus',
    async () => {
      const response = await fetchQuizes()
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
        }       
  },
});

export const { increment, decrement, receiveQuizes } = quizesSlice.actions;

export const selectQuizes = state => state.quizes;

export default quizesSlice.reducer;