import { combineReducers } from "redux"
import { configureStore } from "@reduxjs/toolkit"

import countReducer from "../reducers/countReducer"
import countsReducer from "../modules/countsSlice"
import todosSlice from "../modules/todosSlice"

// 複数のSliceを追加していく
const rootReducer = combineReducers({
  count: countReducer,
  counts: countsReducer,
  todos: todosSlice.reducer,
})

// storeにreducerを返す
const store = configureStore({
  reducer: rootReducer,
})
export default store
