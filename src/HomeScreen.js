import { SafeAreaView, View, Text, Button } from "react-native"
import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addTodo } from "./modules/todosSlice"

import CounterBasic from "../src/components/CounterBasic"
import CounterRTKwithSliceConnect from "../src/components/CounterRTKwithSliceConnect"
import CounterRTKwithSliceReactHook from "../src/components/CounterRTKwithSliceReactHook"
import CounterRTKwithSliceReduxHooks from "../src/components/CounterRTKwithSliceReduxHooks"

// import store from "./src/store"
export const HomeScreen = () => {
  // storeで設定したtodosからinitialStateを取得
  const todos = useSelector((state) => state.todos)
  console.log("kousinn?", todos)
  const dispatch = useDispatch()
  return (
    <View>
      <View>
        <CounterBasic />
      </View>
      <CounterRTKwithSliceConnect />
      <View>
        <CounterRTKwithSliceReactHook />
      </View>
      <View>
        <CounterRTKwithSliceReduxHooks />
      </View>
      <View>
        <Button
          title="- todo"
          onPress={() => dispatch(addTodo({ id: "hoge", text: "hoge" }))}
        />
        <Text style={{ textAlign: "center" }}>TodosCount:{todos.length} </Text>
      </View>
    </View>
  )
}
