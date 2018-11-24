import React, { Component } from 'react';
import { Icon } from 'react-native-elements';
import { StyleSheet, View, TextInput, TouchableOpacity, Text, ScrollView } from 'react-native';
import Modal from 'react-native-modal';
import style from './../styles/common';

type Props = {};


export default class LoginForm extends Component<Props> {

  constructor(props) {
    super(props);

    this.state = {
        email: '',
        senha: '',
        modalVisible: false,
        messageModal: '',
        colorIcon: '',
        typeIcon: ''
    };
  }

  hide = () => {
        this.setState({
            modalVisible: false
        });
    };

  logar = () => {
    const email = this.state.email;
    const senha = this.state.senha;


    if (email === '' || senha === '') {
        this.setState({ 
            messageModal: 'Nenhum dos campos podem ser vazios!', 
            modalVisible: true,
            colorIcon: '#EA4335',
            typeIcon: 'info-outline'
        });
        return;
    }

    fetch('http://192.168.122.1/bd2/usuario.php', {
           method: 'post',
           headers: {

               'Content-Type': 'application/json'
           },
           body: JSON.stringify({
               email,
               senha
           })
       })
      .then((response) => response.json())
      .then((returnElement) => {            
        if (returnElement.result === 'success') {
            this.props.navigation.navigate('Painel');
        } else {
          this.setState({ 
                messageModal: 'Email ou senha incorretos!', 
                modalVisible: true,
                colorIcon: '#EA4335',
                typeIcon: 'info-outline'
          });
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    return (

      <ScrollView>
        <Modal 
            isVisible={this.state.modalVisible} 
            backdropOpacity={0.4}
        >
            <View style={style.modal}>
                <View style={style.headerModal} >
                    <Icon name={this.state.typeIcon} color={this.state.colorIcon} size={70} />
                </View>
                <View style={style.bodyModal}>
                    <Text style={style.textApresentationModal}>
                        {this.state.messageModal}
                    </Text>
                </View>
                <TouchableOpacity 
                    style={style.hideModal} 
                    onPress={() =>
                      this.hide()
                    }
                >
                  <Text style={style.textConfirmModal} >Ok</Text>
                </TouchableOpacity>
            </View>
        </Modal>

        <View style={styles.loginFormContainer}>
          <TextInput
            underlineColorAndroid="transparent"
            placeholder="Email"
            keyboardType={'email-address'}
            style={styles.textInput}
            value={this.state.email}
            onChangeText={result => this.setState({ email: result })}
          />

          <TextInput
            secureTextEntry
            underlineColorAndroid="transparent"
            placeholder="Senha"
            value={this.state.senha}
            style={styles.textInput}
            onChangeText={result => this.setState({ senha: result })}
          />


          <TouchableOpacity
            style={style.loginBtn}
            onPress={this.logar}
          >
            <Text style={style.entrar}>Entrar</Text>
          </TouchableOpacity>
        </View>
        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
    textInput: {
      color: '#fff',
      alignSelf: 'stretch',
      padding: 10,
      marginBottom: 10,
      backgroundColor: 'rgba(255,255,255,0.2)',
      borderColor: '#fff',
      borderWidth: 0.6,
      borderRadius: 30,
      fontSize: 25,
      textAlign: 'center'
    }

});
