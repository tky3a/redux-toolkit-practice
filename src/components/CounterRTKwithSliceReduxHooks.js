import React from "react"
import { View, Button, Text } from "react-native"
import { increment, decrement } from "../modules/countsSlice"
import { useSelector, useDispatch } from "react-redux"

export default CounterRTKwithSliceReduxHooks = () => {
  const counts = useSelector((state) => state.counts)
  const dispatch = useDispatch()

  return (
    <View>
      <Button
        title="+ RTKwithSliceReduxHooks"
        onPress={() => dispatch(increment())}
      />
      <Text style={{ textAlign: "center" }}>Count: {counts}</Text>
      <Button
        title="- RTKwithSliceReduxHooks"
        onPress={() => dispatch(decrement())}
      />
    </View>
  )
}
