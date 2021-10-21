// import { SET_USERNAME } from '../actions'
import { GET_BOOKS } from '../actions'
import { initialState } from '../store'

// this is the object bookReducer should mantain from now on!
// {
//     stock: []
// }

const bookReducer = (state = initialState.book, action) => {
  switch (action.type) {
    case GET_BOOKS:
      return {
        ...state,
        stock: action.payload,
      }
    default:
      return state
  }
}

export default bookReducer
