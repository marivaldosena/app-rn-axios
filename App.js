/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react';
import {
  View, StyleSheet
} from 'react-native';
import ListaItens from './src/components/ListaItens';

class App extends Component {

  render() {
    const { principal } = estilos;
    console.log('Delírio');

    return (
      <View style={principal}>
        <ListaItens />
      </View>
    );
  }
}

const estilos = StyleSheet.create({
  principal: {
    flex: 1
  }
});

export default App;
