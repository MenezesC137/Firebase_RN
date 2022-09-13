import React, { useState } from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

import Login from "./src/components/login";
import TaskList from "./src/components/taskList"

let tasks =[
  {key: '1', name: 'Comprar uma coquinha'},
  {key: '2', name: 'Estudar'},

]

export default function App() {

  const [user, setUser] = useState(null)
  const [newTask, setNewTask] = useState('')

  if(!user) {
    return <Login changeStatus={(user) => setUser(user)}/>
  }

  return(
    <SafeAreaView style={styles.container}>
      <View style={styles.task}>

        <TextInput
          style={styles.input}
          placeholder='O que vai fazer hoje?'
          value={newTask}
          onChangeText={e => setNewTask(e)}
        />

        <TouchableOpacity
          style={styles.buttonAdd}
        >
          <Text style={{fontSize: 22}}>+</Text>
        </TouchableOpacity>

      </View>

      <FlatList
        data={tasks}
        keyExtractor={item => item.key}
        renderItem={({item}) => (
          <TaskList data={item} />
        )}
      />


    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    marginHorizontal:10,
    marginVertical:50,
  },
  task:{
    flexDirection: 'row',
  },
  input:{
    flex: 1,
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#FFF',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#141414',
    height: 45
  },
  buttonAdd: {
    backgroundColor: '#141414',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 5,
    paddingHorizontal: 14,
    borderRadius:4,
  }
})