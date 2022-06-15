import { View, Text, StyleSheet } from "react-native";
import React from "react";

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    color: "orange",
  },
  input: {
    flex: 1,
    height: 45,
    borderWidth: 1,
    backgroundColor: "white",
  },
  img: {
    width: 300,
    height: 300,
  },
  frase: {
    fontSize: 20,
    color: "#dd7b22",
    margin: 30,
    fontStyle: "italic",
    textAlign: "center",
  },
  btn: {
    widht: 230,
    height: 50,
    borderWidth: 2,
    borderColor: "#dd7b22",
    borderRadius: 25,
  },
  btnArea: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  btnText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#dd7b22",
  },
  fontGrande: {
    fontSize: 20,
    fontWeight: "bold",
  },
  viewList: {
    backgroundColor: "aquamarine",
    padding: 10,
    borderRadius: 10,
    width: 400,
  },
});

export default styles;
