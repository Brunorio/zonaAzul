import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';
import Mapa from './Mapa';


export default class PainelHome extends Component {
  mapaOpen = () => {
    this.props.navigation.navigate('Mapa')}
  }
  render() {
    return (
        <View style={styles.container}>

          
          <TouchableOpacity
            style={styles.button}
            onPress={this.mapaOpen}
          >
            <Text style={styles.btnAnother}>Localizar Vaga</Text>
            <Icon
              name='keyboard-arrow-right'
              color='#FFF'
              size={35}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
          >
            <Text style={styles.btnAnother}>Estacionar</Text>
            <Icon
              name='keyboard-arrow-down'
              color='#FFF'
              size={35}
            />
            
          </TouchableOpacity>      

        </View>
    );
  }
}

const navigationStack = createStackNavigator({
  Mapa: { screen: Mapa,
    navigationOptions: {
          header: null,
        }
  }  
});


const styles = StyleSheet.create({
container: {
flex: 1,
justifyContent: 'center',
alignSelf: 'stretch',
width: null,
padding: 10
},
button: {
	marginLeft: 20,
	marginRight: 20,
  marginTop: 10,
	padding: 10,
  backgroundColor: "rgba(92, 99,216, 1)",
  borderColor: "transparent",
  borderWidth: 0,
  borderRadius: 30,
  flexDirection: 'row',
  justifyContent: 'space-around'
},
 btnAnother: {
    color: '#fff',
    fontSize: 25,
    textAlign: 'center'   
  }	

});

