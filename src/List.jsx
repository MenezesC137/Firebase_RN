import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function List({data}){
  return(
    <View style={styles.container}>
      <Text style={styles.text}>{data.name}</Text>
      <Text style={styles.text}>{data.cargo}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    marginBottom: 5,
    padding: 10,
    backgroundColor: '#121212'
  },
  text: {
    fontSize: 17
  }
})