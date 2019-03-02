import React, { Component } from 'react';
import {
  ScrollView
} from 'react-native';
import axios from 'axios';

import Item from './Item';


class ListaItens extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listaItens: [],
    };
  }
  componentWillMount() {
    axios
    .get('http://faus.com.br/recursos/c/dmairr/api/itens.html')
    .then(res => this.setState({ listaItens: res.data }))
    .catch(() => console.log('Erro'));
  }
  
  render() {
    const itens = this.state.listaItens.map(
        (item, key) => <Item key={key} item={item} />
      );

    return (
      <ScrollView style={{ backgroundColor: '#ddd' }}>
        {itens}
      </ScrollView>
    );
  }
}

export default ListaItens;
