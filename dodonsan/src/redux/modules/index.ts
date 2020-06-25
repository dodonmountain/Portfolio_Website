import { combineReducers } from "redux"
import base from "./base"
import { penderReducer } from "redux-pender"

export default combineReducers({
  base,
  pender: penderReducer
})
