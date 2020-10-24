// redux toolkit Slice
import { createSlice } from "@reduxjs/toolkit"

const countSlice = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    increment: (state) => state + 1,
    decrement: (state) => state - 1,
  },
})

export const { increment, decrement } = countSlice.actions
export default countSlice.reducer
