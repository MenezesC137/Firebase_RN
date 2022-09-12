import { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from './src/firebaseConnection';

export default function App() {

  const [name, setName] = useState('Loading...')

  useEffect(() => {

    async function dados(){
      await firebase.database().ref('usuarios/1/nome').on('value', (snapshot) => {
        setName(snapshot.val())
      })
    }

    dados()

  }, [])

  return (
    <View style={styles.container}>
      <Text style={{fontSize: 25}}>Olá {name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
