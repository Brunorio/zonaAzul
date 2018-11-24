import React, { Component } from 'react';
import { View, StyleSheet, TextInput, Text, TouchableOpacity, ScrollView } from 'react-native';
import style from './../styles/common';

export default class LostPassword extends Component {


  render() {
    return (
      <View style={styles.container} >
      <ScrollView>
      <Text style={styles.titulo}>Esqueceu sua senha?!</Text>

      <Text style={styles.label}>CPF</Text>
      <TextInput
        style={styles.textInput}
      />

      <Text style={styles.label}> Email</Text>
      <TextInput
        style={styles.textInput}
      />

      <TouchableOpacity style={style.loginBtn}>
        <Text style={style.entrar}>Recuperar!</Text>
      </TouchableOpacity>
      </ScrollView>
      </View>


    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2D68C4',
    padding: 10
  },

  titulo: {
    fontSize: 30,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 35,
    textShadowColor: 'black',
    textShadowOffset: { width: 1, height: 2 }
  },

  label: {
      color: '#fff',
      fontSize: 21
  },

  textInput: {
    color: '#fff',
    alignSelf: 'stretch',
    padding: 10,
    marginBottom: 25,
    borderBottomColor: '#fff',
    borderBottomWidth: 1.4,
    fontSize: 25,
  }
});
