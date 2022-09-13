import React from "react";
import { Text, View } from "react-native";

export default function TaskList({data}){
  return(
    <View>
      <Text>{data.name}</Text>
    </View>
  )
}