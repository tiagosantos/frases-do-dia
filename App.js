
import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Alert } from 'react-native';

type Props = {};

const gerarNovaFrase = () => {
  let numeroAleatorio = Math.random();
  numeroAleatorio = Math.floor(numeroAleatorio * 5);
  let frases = Array();
  frases[0] = 'Não é a consciência do homem que lhe determina o ser, mas, ao contrário, o seu ser social que lhe determina a consciência. - Karl Max';
  frases[1] = 'O caminho do inferno está pavimentado de boas intenções. - Karl Max';
  frases[2] = 'Quanto menos comes, bebes, compras livros e vais ao teatro, pensas, amas, teorizas, cantas, sofres, praticas esporte, etc., mais economizas e mais cresce o teu capital. És menos, mas tens mais. Assim todas as paixões e actividades são tragadas pela cobiça. - Karl Max';
  frases[3] = 'Os filósofos limitaram-se a interpretar o mundo de diversas maneiras; o que importa é modificá-lo. - Karl Max';
  frases[4] = 'A religião é o suspiro da criança acabrunhada, o coração de um mundo sem coração, assim como também o espírito de uma época sem espírito. Ela é o ópio do povo. - Karl Max';

  let fraseEscolhida = frases[ numeroAleatorio ];


  Alert.alert(fraseEscolhida);
};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require('./img/lenin.jpg')}
           style={styles.logo}
        />
        <TouchableOpacity
          onPress={gerarNovaFrase}
          style={styles.btn}
        >
          <Text style={styles.btnText}>Nova frase</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    width: 300,
    height: 300
  },
  btn: {
    width: 200,
    padding: 15,
    alignItems: 'center',
    backgroundColor: '#FC0002'
  },
  btnText: {
    fontSize: 16,
    color: '#FFFF08',
    fontWeight: 'bold'
  }
});
