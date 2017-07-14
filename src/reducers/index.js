import { combineReducers } from 'redux'
import hoverName from './hoverName'

const etag = (state = '', action) => {
  switch (action.type) {
    case 'SET_ETAG':
      return action.token
    default:
      return state
  }
}

const poop = (state = 'so much poop', action) => {
    return state;
}

const marvel = combineReducers({
    hoverName,
    etag,
    poop
})

export default marvel
