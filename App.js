import { useState, useEffect } from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import firebase from './src/firebaseConnection';

export default function App() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function logar(){
    await firebase.auth().signInWithEmailAndPassword(email, password)
      .then((value) => {
        alert('Usuario logado com sucesso!')
      })
      .catch((error) => {
        alert('Ops deu merda!')
        return;
      })
    setEmail('')
    setPassword('')
  }

  return (
    <View style={styles.container}>

      <Text style={styles.text}>Email</Text>
      <TextInput
        style={styles.input}
        underlineColorAndroid='transparent'
        onChangeText={(text) => setEmail(text)}
        value={email}
      />

      <Text style={styles.text}>Senha</Text>
      <TextInput
        style={styles.input}
        underlineColorAndroid='transparent'
        onChangeText={(text) => setPassword(text)}
        value={password}
      />

      <Button 
        title='Entrar'
        onPress={logar}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 50,
    marginHorizontal:20
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
