import React, { Component } from 'react';
import { Icon } from 'react-native-elements';
import { View, StyleSheet, TextInput, Text, TouchableOpacity, ScrollView } from 'react-native';
import Modal from 'react-native-modal';
import style from './../styles/common';


export default class HomeScreen extends Component {

    constructor(props) {
        super(props);

        this.state = {
            nome: '',
            email: '',
            cpf: '',
            senha: '',
            confirmarSenha: '',
            modalVisible: false,
            messageModal: '',
            colorIcon: '',
            typeIcon: ''
        };
    }

    maskCPF = (cpf) => {
        let mascara;

        if (cpf.length === 12) {
            mascara = cpf.substr(0, 11);
            mascara += '-' + cpf[11];
            this.setState({ cpf: mascara });
        } else if (cpf.length < 15) {
            mascara = cpf.replace(/\D/g, '');
            mascara = cpf.replace(/(\d{3})(\d)/, '$1.$2');
            mascara = cpf.replace(/(\d{3})(\d)/, '$1.$2');
            mascara = cpf.replace(/(\d{3})(\d)/, '$1.$2');
            this.setState({ cpf: mascara });
        }            
    }

    goTo = () => {
        if (this.state.messageModal === 'Cadastro efeituado com sucesso!') {
            this.props.navigation.navigate('Login');
        } else {
            this.setState({ modalVisible: false });
        }
    }

    registrar = () => {
        const nome = this.state.nome;
        const email = this.state.email;
        const cpf = this.state.cpf;
        const senha = this.state.senha;
        const confirmarSenha = this.state.confirmarSenha;

        if (nome === '' || email === '' || 
            cpf === '' || senha === '' || 
            confirmarSenha === '') {
            this.setState({ 
                messageModal: 'Nenhum dos campos podem ser vazios!', 
                modalVisible: true,
                colorIcon: '#EA4335',
                typeIcon: 'info-outline'
            });

            return;
        }

        if (confirmarSenha === senha) {
           fetch('http://192.168.122.1/bd2/register.php', {
               method: 'post',
               headers: {

                   'Content-Type': 'application/json'
               },
               body: JSON.stringify({
                   nome,
                   email,
                   cpf,
                   senha
               })
           })
          .then((response) => response.json())
          .then((returnElement) => {            
            if (returnElement.result === 'success') {
                this.setState({ 
                    messageModal: 'Cadastro efeituado com sucesso!', 
                    modalVisible: true,
                    colorIcon: '#34A853',
                    typeIcon: 'check-circle'
                });
            }
            else {
              this.setState({ 
                    messageModal: 'Já possui um usuário com o mesmo e-mail ou CPF!', 
                    modalVisible: true,
                    colorIcon: '#EA4335',
                    typeIcon: 'info-outline'
                });
            }
          })
          .catch((error) => {
            console.error(error);
          });
        } else {
            this.setState({ 
                messageModal: 'As senhas não conferem!', 
                modalVisible: true,
                colorIcon: '#EA4335',
                typeIcon: 'info-outline'
            });
        }
    }


  render() {
    return (
      <View style={styles.container} >


        <Modal 
            isVisible={this.state.modalVisible} 
            backdropOpacity={0.4}
        >
            <View style={style.modal}>
                <View style={style.extra}>
                  <View style={style.headerModal} >
                      <Icon name={this.state.typeIcon} color={this.state.colorIcon} size={70} />
                  </View>
                  <View style={style.bodyModal}>
                      <Text style={style.textApresentationModal}>
                          {this.state.messageModal}
                      </Text>
                  </View>
                </View>
                <TouchableOpacity 
                    style={style.hideModal} 
                    onPress={this.goTo}
                    
                >
                  <Text style={style.textConfirmModal} >Ok</Text>
                </TouchableOpacity>
            </View>
        </Modal>
 
      <ScrollView>

      <Text style={styles.titulo}>Registre-se e aproveite as vantagens</Text>

      <Text style={styles.label}> Nome Completo</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={nome => this.setState({ nome })}
      />

      <Text style={styles.label}> Email</Text>
      <TextInput
        keyboardType={'email-address'}
        style={styles.textInput}
        onChangeText={email => this.setState({ email })}
      />

      <Text style={styles.label}> CPF</Text>
      <TextInput
        keyboardType={'numeric'}
        style={styles.textInput}
        value={this.state.cpf}
        onChangeText={cpf => this.maskCPF(cpf)}
      />

      <Text style={styles.label}> Senha</Text>
      <TextInput
        secureTextEntry
        style={styles.textInput}
        onChangeText={senha => this.setState({ senha })}
      />

      <Text style={styles.label}>Confirme a senha</Text>
      <TextInput
        secureTextEntry
        style={styles.textInput}
        onChangeText={confirmarSenha => this.setState({ confirmarSenha })}
      />

      <TouchableOpacity
        style={style.loginBtn}
        onPress={this.registrar}
      >
        <Text style={style.entrar}>Registrar!</Text>
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
