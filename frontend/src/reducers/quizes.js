import merge from 'lodash/merge';

const quizes = (state = {}, action) => {
    switch (action.type) {
      case 'GET_QUIZES':
        return merge({}, action.quizes);
      default:
        return state
    }
  }
  
  export default quizes