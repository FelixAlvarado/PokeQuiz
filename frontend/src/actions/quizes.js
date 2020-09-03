import { fetchQuizes } from '../utility/fetch'

export const getQuizes = () => dispatch => (
    fetchQuizes().then(quizes => dispatch(addQuizes(quizes)))
  );

  export const addQuizes = quizes => ({
    type: 'GET_QUIZES',
    quizes: quizes
  })
