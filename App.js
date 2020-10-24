import { SafeAreaView, View, Text } from "react-native"
import React from "react"
import { Provider } from "react-redux"

import CounterBasic from "./src/components/CounterBasic"
import CounterRTKwithSliceConnect from "./src/components/CounterRTKwithSliceConnect"
import CounterRTKwithSliceReactHook from "./src/components/CounterRTKwithSliceReactHook"
import CounterRTKwithSliceReduxHooks from "./src/components/CounterRTKwithSliceReduxHooks"

import store from "./src/store"

import { HomeScreen } from "./src/HomeScreen"

export default function () {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Provider store={store}>
        <HomeScreen />
      </Provider>
    </SafeAreaView>
  )
}
