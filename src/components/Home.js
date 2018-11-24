import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import Mapa from './Mapa';
import PainelHome from './PainelHome';

export default class Home extends Component {
	render() {
		return (
			<navigationStack />
		);
	}
}


const navigationStack = createStackNavigator({
   PainelHome: { screen: PainelHome,
    navigationOptions: {
          header: null,
        }
  },
  Mapa: { screen: Mapa,
    navigationOptions: {
          header: null,
        }
  }
    
});
