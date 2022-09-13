import React from "react";
import { StyleSheet, Text, TouchableNativeFeedback, TouchableOpacity, View } from "react-native";

import FontAwesome from 'react-native-vector-icons/FontAwesome'

export default function TaskList({ data, deleteItem, editItem }){
  return(
    <View style={styles.container}>
      <TouchableOpacity style={{marginRight: 10}} onPress={() => deleteItem(data.key)}>
        <FontAwesome name='trash' color="#FFF" size={20}/>
      </TouchableOpacity>

      <View style={{ paddingRight: 10 }}>
        <TouchableNativeFeedback onPress={() => editItem(data)}>
          <Text style={{ paddingRight: 10 }}>{data.name}</Text>
        </TouchableNativeFeedback>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#121212',
    alignItems: 'center',
    marginBottom: 10,
    padding:18,
    borderRadius: 4
  }
})