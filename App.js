import { useState, useEffect } from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import firebase from './src/firebaseConnection';
import List from './src/List';

export default function App() {

  const [name, setName] = useState('')
  const [cargo, setCargo] = useState('')
  const [users, setUsers] = useState([])

  useEffect(() => {

    async function dados(){
      
      await firebase.database().ref('usuarios').on('value', (snapshot) => {

        setUsers([])

        snapshot.forEach((childItem) => {
          let data = {
            key: childItem.key,
            name: childItem.val().name,
            cargo: childItem.val().cargo
          }

          setUsers(oldArray => [...oldArray, data])

        })

      })

    }

    dados()

  }, [])

  async function cadastrar(){
    if(name !== '' & cargo !== ''){

      let users = await firebase.database().ref('usuarios')
      let keys = users.push().key

      users.child(keys).set({
        name: name,
        cargo: cargo
      })

      alert('cadastrado com sucesso!')
      setCargo('')
      setName('')

    }
  }

  return (
    <View style={styles.container}>

      <Text style={styles.text}>Nome</Text>
      <TextInput
        style={styles.input}
        underlineColorAndroid='transparent'
        onChangeText={(text) => setName(text)}
        value={name}
      />

      <Text style={styles.text}>Cargo</Text>
      <TextInput
        style={styles.input}
        underlineColorAndroid='transparent'
        onChangeText={(text) => setCargo(text)}
        value={cargo}
      />

      <Button 
        title='New'
        onPress={cadastrar}
      />

      <FlatList
        keyExtractor={item => item.key}
        data={users}
        renderItem={ ({item}) => ( <List data={item} />)}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin:30,
  },
  text: {
    fontSize: 20
  },
  input: {
    marginBottom: 10,
    padding: 10,
    borderWidth:1,
    borderColor: '#121212',
    height: 45,
    fontSize: 17
  }

});
