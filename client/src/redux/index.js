import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rawgReducer from './reducers/rawgReducer'
import thunk from 'redux-thunk'
import localReducer from './reducers/localReducer'

const store = createStore(
  combineReducers({
    rawgState: rawgReducer,
    localState: localReducer
  }),
  composeWithDevTools(applyMiddleware(thunk))
)

export default store
