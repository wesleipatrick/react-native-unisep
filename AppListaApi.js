
// FlatList - App_04_02_Lista_API.js

import React, {Component} from 'react';
import {
    StyleSheet, Text, View, TextInput, Button, Alert, FlatList
} from 'react-native';

const styles = StyleSheet.create({
  container: {
   flex: 1,
   marginTop: 24
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  titulo:{
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#fff',
    padding: 15,
    fontSize: 20    
  },
  viewTitulo:{ 
    backgroundColor: '#777',   
    color: '#000000' 
  }
})

export default class App extends Component {

  constructor( props ){
    super( props );
    this.state = {    
      estados : []  
    }
  }

  componentDidMount(){    
    fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados`)
    .then( resp => resp.json() )
    .then( dados => {
      // alert(
      //   JSON.stringify( dados )
      // )

      this.setState( { estados : dados } )
    })
  }  

  render() {
    return (
      
        <View style={styles.container}>
          
          <View style={ styles.viewTitulo } >
            <Text style={ styles.titulo }>Estados Brasileiros</Text>
          </View>

          <FlatList
            data={ this.state.estados }
            keyExtractor={estado =>  String(estado.id) }
            renderItem={
              ({item}) => 
                <Text style={styles.item}>
                  {item.id} - {item.nome}
                </Text>              
            }
          />

        </View>

    );
  }


}//Component App

