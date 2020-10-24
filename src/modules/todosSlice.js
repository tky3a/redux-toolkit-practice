import { createSlice } from "@reduxjs/toolkit"

const todosSlice = createSlice({
  name: "todos", // ①
  initialState: [], // ②
  reducers: {
    addTodo(state, action) {
      console.log("state?", state)
      console.log("action?", action)
      // ③
      const { id, text } = action.payload
      console.log("?------------?-------------?")
      state.push({ id, text, completed: false }) // ④
    },
  },
})

export const { addTodo } = todosSlice.actions
export default todosSlice

// ①：Sliceの名前。Action Typeのプレフィックスに使われる
// ②：Stateの初期値。Todoの配列を持つ。
// ③：Reducerの定義。Action Typeが`todos/addTodo`のAction Creatorが自動的に生成される
// ④：stateの配列にTodoのデータを追加する。
