import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, Button } from "react-native";
// import style from "./components/style";
// import Inputs from "./components/Inputs";
// import Cokkie from "./components/Cokkie";
// import Timer from "./components/timer";
// import ProdutosAPI from "./components/ProdutosAPI";
import Relogio from "./components/Relogio";
import FlexboxV2 from "./components/layout/FlexboxV2";
import Mega from "./components/mega/Mega";

export default function App() {
  const [nome, setNome] = useState("Programador");

  const alterar = (valor) => {
    setNome(valor);
  };

  return (
    <View style={styles.container}>
      {/* <Text style={style.text}>Imagem</Text>
      <Image
      source={{uri:'https://s1.static.brasilescola.uol.com.br/be/conteudo/images/imagem-em-lente-convexa.jpg'}}
      style={{width:300, height:200}}/>
      <Text style={{fontSize:20}}>{nome}</Text>
<Button title='Alterar' onPress={()=>alterar('Dev React')}/> */}
      <StatusBar style="auto" />
      {/* <ProdutosAPI/> */}
      {/* <Timer/> */}
      {/* <Relogio /> */}
      {/* <FlexboxV2 /> */}
      <Mega />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
