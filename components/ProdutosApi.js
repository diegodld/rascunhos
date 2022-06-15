import React, { useState, useEffect } from "react";
import { Text, FlatList, View, TextInput } from "react-native";
import axios from "axios";
import style from "./style";

export default function ProdutosAPI() {
  const [produto, setprodutos] = useState([]);
  console.log(produto);
  const getProducts = () => {
    axios.get("http://localhost:8080/produtos").then((response) => {
      setprodutos(response.data);
    });
  };

  useEffect(() => {
    getProducts();
  }, []);

  const [value, setValue] = useState(0);

  const desconto = ({ item }) => {
    value > 100 ? setValue(100) : null;
    let v = 1 - value / 100;
    let desc = item.preco * v;
    return (
      <Text>
        {item.id}) {item.nome} - R$ {desc.toFixed(2)}
        {value != 0 ? ` valor com ${value}% de desconto` : null}
      </Text>
    );
  };

  const renderProducts = ({ item: produto }) => {
    return (
      <Text>
        {produto.id}) {produto.nome} - R$ {produto.preco}
      </Text>
    );
  };

  return (
    <View style={style.viewList}>
      <Text style={style.fontGrande}>Adicionar Desconto</Text>
      <TextInput
        style={style.input}
        placeholder="desconto.."
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <Text style={style.fontGrande}>Lista</Text>
      <FlatList
        data={produto}
        keyExtractor={(i) => `${i.id}`}
        renderItem={desconto}
      />
    </View>
  );
}
