import { combineReducers } from 'redux'
import repos from '../../client/modules/Repos/Reducer'
import home from '../../client/modules/Home/Reducer'

const rootReducer = combineReducers({
  repos,
  home
})

export default rootReducer
