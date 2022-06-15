import React, { Component } from "react";
import { View, Text, TextInput, Button } from "react-native";
import Estilo from "../style";

import MegaNumero from "./MegaNumero";

export default class Mega extends Component {
  state = {
    qtdeNumeros: "",
    numeros: [],
  };

  alterarQtdeNumero = (qtde) => {
    this.setState({ qtdeNumeros: +qtde });
  };

  gerarNumeroNaoContido = (nums) => {
    const novo = parseInt(Math.random() * 60) + 1;
    return nums.includes(novo) ? this.gerarNumeroNaoContido(nums) : novo;
  };

  gerarNumeros = () => {
    const numeros = Array(this.state.qtdeNumeros)
      .fill()
      .reduce((n) => [...n, this.gerarNumeroNaoContido(n)], [])
      .sort((a, b) => a - b);
    this.setState({ numeros });
  };

  exibirNumeros = () => {
    const nums = this.state.numeros;
    return nums.map((num) => {
      return <MegaNumero key={num} num={num} />;
    });
  };

  render() {
    return (
      <>
        <Text style={Estilo.fontGrande}>Gerador de Mega-Sena</Text>
        <TextInput
          keyboardType={"numeric"}
          style={{ borderBottomWidth: 1, marginBottom: 10, marginTop: 10 }}
          placeholder="Qtde de Números"
          value={`${this.state.qtdeNumeros}`}
          onChangeText={this.alterarQtdeNumero}
        />
        <Button title="Gerar" onPress={this.gerarNumeros} />
        <View
          style={{
            width: 380,
            marginTop: 20,
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
            borderWidth: 1,
            borderRadius: 10,
            paddingTop: 10,
            paddingBottom: 10,
          }}
        >
          {this.exibirNumeros()}
        </View>
      </>
    );
  }
}
