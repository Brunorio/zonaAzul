import React, { Component } from 'react';
import { View, Text } from 'react-native';
import style from './../styles/painel';

type Props = {};

export default class PainelAddVehicle extends Component<Props> {
  render() {
    return (
        <View style={{ flex: 1 }}>
          <View style={style.container}>
            <Text>Adicionar carro</Text>
          </View>

        </View>
    );
  }
}
