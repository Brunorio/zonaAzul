import React, { Component } from 'react';
import { Icon } from 'react-native-elements';
import { View, StyleSheet, TextInput, Text, TouchableOpacity, ScrollView } from 'react-native';
import Modal from 'react-native-modal';
import { createStackNavigator } from 'react-navigation';
import style from './../styles/common';


export default class Mapa extends Component {


  render() {
    return (
      <View style={styles.container} >
        <Text>Google Maps</Text>
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
