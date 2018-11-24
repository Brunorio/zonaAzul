
import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import Login from './src/components/Login';
import Register from './src/components/Register';
import Painel from './src/components/Painel';
import LostPassword from './src/components/LostPassword';


type Props = {};

export default class App extends Component<Props> {
  render() {
    return (

        <AppStackNavigatior />

    );
  }
}

const AppStackNavigatior = createStackNavigator({
  Painel: { screen: Painel,
    navigationOptions: {
          header: null,
        }
  },
  Login: { screen: Login,
    navigationOptions: {
          header: null,
        }
  },
  Registrar: { screen: Register },
  Recuperar: { screen: LostPassword }
  
});
