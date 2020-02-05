import { FIRST_ACTION } from '../constants/ActionTypes'

const initialState = {
  firstStateExample: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FIRST_ACTION:
      return {
        ...state,
        firstStateExample: true
      }

    default:
      return state
  }
}