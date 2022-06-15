import { View, Text, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";

export default function Relogio() {
  const [hours, setHours] = useState();
  const [minutes, setMinutes] = useState();
  const [seconds, setSeconds] = useState();

  useEffect(() => {
    const interval = setInterval(() => {
      getTime();
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const getTime = () => {
    const date = new Date();
    setHours(date.getHours());
    setMinutes(date.getMinutes());
    setSeconds(date.getSeconds());
  };

  const formatTimeUnit = (unit) =>
    String(unit).length === 1 ? `0${unit}` : unit;

  return (
    <View style={styles.container}>
      <Text style={styles.unit}>{formatTimeUnit(hours)} : </Text>
      <Text style={styles.unit}>{formatTimeUnit(minutes)} : </Text>
      <Text style={styles.unit}>{formatTimeUnit(seconds)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 5,
    padding: 10,
    backgroundColor: "#ccc",
  },
  unit: {
    fontSize: 50,
    fontWeight: "bold",
  },
});
