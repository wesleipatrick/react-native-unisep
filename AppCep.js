// App_03_Cep_V1

import React, {Component} from 'react';
import {
    StyleSheet, Text, View, TextInput, Button, Alert,
} from 'react-native';

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',    
    // backgroundColor: '#777',    
    alignItems: 'center',
    // justifyContent: 'center',
    marginTop: 24
  },

  inputCep:{
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    height: 50,
    width: '95%',
    marginTop : 10
  }, 

  btnPesq:{
    backgroundColor: '#333'
  },

  containerInput:{
    backgroundColor: 'red',
    height: 80,
  },

  viewCep: {
    // alignItems: ,
    width: '100%',
    // backgroundColor: '#777',
    textAlign: 'right',
    padding: 10,    
  },
  textCep:{
    fontSize: 24
  }


});


export default class App extends Component {

  constructor( props ){
    super( props );
    this.state = {
      numeroCep : "",
      dadosCep: "",
      carregando: false
    }
  }

  consultarCEP = () => {

      // Alert.alert(
      // `Consultar CEP: ${ String(this.state.numeroCep) }` 
      // ) 
      
      if( this.state.numeroCep.length < 8 ){
        Alert.alert(
          `Consultar CEP: `,
          `O CEP deve conter 8 numeros` 
        ) 
      }else{

        this.setState( { carregando: true } ) 

        fetch(`https://viacep.com.br/ws/${this.state.numeroCep}/json/`)
        .then( resp => resp.json() )
        .then( dados => {
          this.setState( {dadosCep: dados, carregando: false} )
          // Alert.alert(
          //   `Consultar CEP:`,
          //   `${ String( JSON.stringify( dados ) ) }`
          // )
        })
        .catch( erro => {
          Alert.alert(
            `Erro:`,
            `${ String( JSON.stringify( erro ) ) }`
          )
        })
      }      
      
  }


  render() {
    return (
      
        <View style={styles.container}>

          <TextInput
            style={ styles.inputCep } 
            placeholder="Digite um CEP" 
            onChangeText={(numeroCep) => this.setState({numeroCep})}
            value={this.state.numeroCep}
            maxLength={8}
            keyboardType='numeric' 
          />


          <Text style={ {fontSize: 20, marginTop: 5 } } >{this.state.numeroCep}</Text>          

          <View style={{ width: "95%", height: 40, margin: 10, backgroundColor: "800000" }}>
            <Button
                onPress={this.consultarCEP}
                title=" Consultar CEP"
                style={{fontSize: 20}}
                color="#800000"                
                
              />
          </View>
                    
          <View style={ styles.viewCep } >
            <Text style={ styles.textCep } >CEP: {this.state.dadosCep.cep}</Text>
            <Text style={ styles.textCep }>Cidade: {this.state.dadosCep.localidade}</Text>
            <Text style={ styles.textCep }>UF: {this.state.dadosCep.uf}</Text>
          </View>

        </View>

    );
  }


}//Component App


