
// App_Final_01

import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';


class App extends Component{

  state = {
    mensagem: 'Ola mundo state..'    
  }

  render(){
    return(
      <View style={ {flex: 1, marginTop: 24, justifyContent: 'center',
      alignItems: 'center' } } >
        
        <Topo descricao="Mensagem topo 01" />
        <Topo descricao="Mensagem topo 02" />

        <Text>Ola Mundo...</Text>
        <Text>{ this.state.mensagem }</Text>
        
      </View>
    )
  }

}

class Topo extends Component{
  render(){
    return(
      <View style={ { marginTop: 24, justifyContent: 'center',
      alignItems: 'center' } } >
        <Text> { this.props.descricao } </Text>        
      </View>      
    );
  }
}


export default App