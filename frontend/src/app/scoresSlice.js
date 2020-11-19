import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {fetchScores} from '../utility/fetch'


//fetches scores for quiz page
export const getScores = createAsyncThunk(
    'score/getScoresStatus',
    async (id) => {
      const response = await fetchScores(id)
      return response
    
    }     
  )

export const scoresSlice = createSlice({
  name: 'scores',
  initialState: {},
        reducers:{addScore: (state, action) => {
          Object.assign(state,action.payload)
        }},
        extraReducers:{
        [getScores.fulfilled]: (state, action) => {
          Object.assign(state,action.payload)
        }
  },
});

export const { addScore } = scoresSlice.actions;

export const selectScores = state => state.scores;

export default scoresSlice.reducer;