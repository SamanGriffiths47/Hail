import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rawgReducer from './reducers/rawgReducer'
import localReducer from './reducers/localReducer'
import thunk from 'redux-thunk'

const store = createStore(
  localReducer,
  composeWithDevTools(applyMiddleware(thunk))
)

export default store
