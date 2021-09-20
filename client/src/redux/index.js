import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rawgReducer from './reducers/rawgReducer'
import thunk from 'redux-thunk'

const store = createStore(
  combineReducers({
    rawgState: rawgReducer
  }),
  composeWithDevTools(applyMiddleware(thunk))
)

export default store
