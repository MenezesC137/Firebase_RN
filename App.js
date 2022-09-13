import React, { useState, useEffect } from "react";
import { FlatList, Keyboard, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

import Login from "./src/components/login";
import TaskList from "./src/components/taskList"

import firebase from "./src/components/service/firebaseConnection"

export default function App() {

  const [user, setUser] = useState(null)
  const [newTask, setNewTask] = useState('')
  const [tasks, setTasks] = useState([])

  useEffect(() => {

    function getUser(){

      if(!user){
        return
      }

      firebase.database().ref('tasks').child(user).once('value', (snapshot) => {
        setTasks([])

        snapshot?.forEach((childItem) => {

          let data ={
            key: childItem.key,
            name: childItem.val().name
          }

          setTasks(oldTasks => [...oldTasks, data])

        })

      })

    }
    
    getUser()

  },[user])

  function handleAdd(){
    if(newTask === ''){
      return
    }

    let tarefas = firebase.database().ref('tasks').child(user)
    let keys = tarefas.push().key

    tarefas.child(keys).set({ name: newTask }).then(()=> {  
      const data = {
        key: keys,
        name: newTask 
      }

      setTasks(oldTasks => [...oldTasks, data])

    })

    Keyboard.dismiss()
    setNewTask('')

  }

  function handleDelete(key){
    firebase.database().ref('tasks').child(user).child(key).remove().then(()=>{
      const findTasks = tasks.filter( item => item.key !== key)
      setTasks(findTasks)
    })
  }

  function handleEdit(data){
    console.log(data);
  }

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

        <TouchableOpacity style={styles.buttonAdd} onPress={handleAdd}>
          <Text style={{fontSize: 22}}>+</Text>
        </TouchableOpacity>

      </View>

      <FlatList
        data={tasks}
        keyExtractor={item => item.key}
        renderItem={({item}) => (
          <TaskList data={item} deleteItem={handleDelete} editItem={handleEdit} />
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