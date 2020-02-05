import { FIRST_ACTION } from '../constants/ActionTypes'

const initialState = {
  firstAction: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FIRST_ACTION:
      return {
        ...state,
        firstAction: true
      }

    default:
      return state
  }
}