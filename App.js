import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

import Login from "./src/components/login";

export default function App() {

  const [user, setUser] = useState(null)

  if(!user) {
    return <Login />
  }

  return(
    <SafeAreaView style={styles.container}>
      <Text>Dentro da tela de tarefas</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    marginHorizontal:10,
    marginVertical:50,
  }
})