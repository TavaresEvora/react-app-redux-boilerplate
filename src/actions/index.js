import { FIRST_ACTION } from '../constants/ActionTypes'

export const firstAction = () => dispatch => {
  dispatch({ type: FIRST_ACTION })
}