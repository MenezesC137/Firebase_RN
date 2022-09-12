import { useState, useEffect } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import firebase from './src/firebaseConnection';

export default function App() {

  const [name, setName] = useState('Loading...')
  const [cargo, setCargo] = useState('')

  useEffect(() => {

    async function dados(){
      
      //Criando
      //await firebase.database().ref('tipo').set('Cliente');

      //Removendo
      //await firebase.database().ref('tipo').remove()

      // await firebase.database().ref('usuarios').child(3).set({
      //   nome: 'Jose',
      //   cargo: 'DEV'
      // })


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
