import { configureStore } from '@reduxjs/toolkit';
import quizesReducer from './quizesSlice'
import scoresReducer from './scoresSlice'

export default configureStore({
    reducer: {
      quizes: quizesReducer,
      scores: scoresReducer
    },
  });

