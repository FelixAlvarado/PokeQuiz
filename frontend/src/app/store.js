import { configureStore } from '@reduxjs/toolkit';
import quizesReducer from './quizesSlice'

export default configureStore({
    reducer: {
      quizes: quizesReducer,
    },
  });
