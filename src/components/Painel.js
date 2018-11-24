import React, { Component } from 'react';
import { Icon } from 'react-native-elements';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import PainelHome from './PainelHome';
import PainelAddVehicle from './PainelAddVehicle';
import PainelProfile from './PainelProfile';
import PainelHistory from './PainelHistory';


type Props = {};
export default class Painel extends Component<Props> {
  render() {
    return (

        <PainelStackNavigatior />


    );
  }
}

const PainelStackNavigatior = createMaterialBottomTabNavigator({
  PainelHome: { screen: PainelHome,
    navigationOptions: {
      tabBarLabel: 'Início',
      tabBarIcon: ({ tintColor }) => (
        <Icon name='home' color={tintColor} size={26} />
      )
    }
  },
  PainelAddVehicle: { screen: PainelAddVehicle,
    navigationOptions: {
      tabBarLabel: 'Adicionar',
      tabBarIcon: ({ tintColor }) => (
        <Icon name='directions-car' color={tintColor} size={26} />
      )
    }
  },
  PainelProfile: { screen: PainelProfile,
    navigationOptions: {
      tabBarLabel: 'Perfil',
      tabBarIcon: ({ tintColor }) => (
        <Icon name='account-circle' color={tintColor} size={26} />
      )
    }
  },
  PainelHistory: { screen: PainelHistory,
    navigationOptions: {
      tabBarLabel: 'Histórico',
      tabBarIcon: ({ tintColor }) => (
        <Icon name='history' color={tintColor} size={26} />
      )
    }
  }
}, {
  initialRouteName: 'PainelHome',
  tabBarOptions: {
    activeTintColor: '#FFFFFF',
    inactiveTintColor: 'grey'
  }


});
