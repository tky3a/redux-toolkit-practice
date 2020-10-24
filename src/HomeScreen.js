import { SafeAreaView, View, Text } from "react-native"
import React from "react"
// import { Provider } from "react-redux"

import CounterBasic from "../src/components/CounterBasic"
import CounterRTKwithSliceConnect from "../src/components/CounterRTKwithSliceConnect"
import CounterRTKwithSliceReactHook from "../src/components/CounterRTKwithSliceReactHook"
import CounterRTKwithSliceReduxHooks from "../src/components/CounterRTKwithSliceReduxHooks"

// import store from "./src/store"
export const HomeScreen = () => {
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
    </View>
  )
}
