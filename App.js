import { SafeAreaView, View, Text } from "react-native"
import React from "react"
import { Provider } from "react-redux"

import CounterBasic from "./src/components/CounterBasic"
import CounterRTKwithSliceConnect from "./src/components/CounterRTKwithSliceConnect"
import CounterRTKwithSliceReactHook from "./src/components/CounterRTKwithSliceReactHook"

import store from "./src/store"

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
        <View>
          <View>
            <CounterBasic />
          </View>
          <CounterRTKwithSliceConnect />
          <View>
            <CounterRTKwithSliceReactHook />
          </View>
        </View>
      </Provider>
    </SafeAreaView>
  )
}
