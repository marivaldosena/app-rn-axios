import React from 'react';
import {
  View, Text, Image, StyleSheet
} from 'react-native';

const Item = ({ item:
  {
    titulo,
    foto,
    valor,
    local_anuncio: localAnuncio,
    data_publicacao: dataPublicacao
  }
}) => {
  const {
    container,
    imagem,
    detalhes,
    tituloProduto,
    textoValor,
    textoDetalhes
  } = estilos;

  return (
    <View style={container}>
      <View style={imagem}>
        <Image style={{ height: 115, width: 115 }} source={{ uri: foto }} />
      </View>

      <View style={detalhes}>
        <Text style={tituloProduto}>{titulo}</Text>
        <Text style={textoValor}>R$ {valor}</Text>
        <Text style={textoDetalhes}>Local: {localAnuncio}</Text>
        <Text style={textoDetalhes}>Data: {dataPublicacao}</Text>
      </View>
    </View>
  );
};

const estilos = StyleSheet.create({
  container: {
    borderWidth: 0.5,
    borderColor: '#999',
    margin: 10,
    padding: 10,
    flexDirection: 'row',
    backgroundColor: '#fff',
  },
  imagem: {
    width: 120,
    height: 120,
  },
  detalhes: {
    flex: 1,
    marginLeft: 10
  },
  tituloProduto: {
    fontSize: 18,
    color: 'blue',
    marginBottom: 5,
  },
  textoValor: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  textoDetalhes: {
    fontSize: 16,
  }
});

export default Item;
