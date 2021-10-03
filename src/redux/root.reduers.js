import { combineReducers } from 'redux'
import { dataReducer } from './data/data.reducer'

import { userReducer } from './user/user.reducer'

const rootReducer = combineReducers({
  userReducer,
  dataReducer,
})

export default rootReducer
