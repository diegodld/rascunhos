import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import style from "../components/style";

export default function Cokkie() {
  const [frases, setFrase] = useState([
    "A gratidão é a memória do coração.",
    "Não importa o que você decidiu. O que importa é que isso te faça feliz.",
    "Deixe pra trás o que não te leva pra frente.",
    "Viver não é esperar a tempestade passar, é aprender a dançar na chuva.",
    "O segredo é ter fé em Deus.",
  ]);

  const [texto, setTexto] = useState()
  const [img, setImg] = useState(require("../img/biscoito.png"))


function quebrarBiscoito(){
let sort = Math.floor(Math.random() * frases.length)
 setTexto(frases[sort])
 setImg(require('../img/biscoitoAberto.png'))
}

  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
      <Image style={style.img} source={img} />
      <Text style={style.frase}>"{texto}"</Text>
      <TouchableOpacity style={style.btn} onPress={quebrarBiscoito}>
        <View style={style.btnArea}>
          <Text style={style.btnText}>Quebrar Biscoito</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
