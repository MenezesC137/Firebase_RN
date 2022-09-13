import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Login() {

  const [type, setType] = useState('login')

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleLogin(){
    alert('teste')
  }

  return(
    <SafeAreaView style={styles.container}>
      <TextInput
        placeholder="Email"
        style={styles.input}
        value={email}
        onChangeText={e => setEmail(e)}
      />

      <TextInput
        placeholder="Senha"
        style={styles.input}
        value={password}
        onChangeText={e => setPassword(e)}
      />

      <TouchableOpacity 
        style={[styles.handleLogin, {backgroundColor: type === 'login' ? '#3ea6f2' : '#141414'}]}
        onPress={handleLogin}
      >
        <Text style={{fontSize: 17}}>
          { type === 'login' ? 'Acessar' : 'Cadastrar' }
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setType(type => type === 'login' ? 'cadastrar' : 'login')}>
        <Text style={{textAlign: 'center'}}>
          {type === 'login' ? 'Criar uma conta' : 'Já possuo uma conta'}
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    marginHorizontal:10,
    marginVertical:50,
  },
  input:{
    marginBottom: 10,
    backgroundColor: '#FFF',
    borderRadius: 4,
    height: 45,
    padding: 10,
    borderWidth: 1,
    borderColor: '#141414'
  },
  handleLogin: {
    alignItems: 'center',
    justifyContent: 'center',
    height:45,
    marginBottom: 10,
  }
})