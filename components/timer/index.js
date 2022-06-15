import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import styles from "./style";

export default function Timer() {
  const [time, setTime] = useState(0);
  const [timerOn, setTimerOn] = useState(false);

  useEffect(() => {
    let interval;
    if (timerOn) {
      interval = setInterval(() => setTime((prevTime) => prevTime + 0.1), 100);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timerOn]);

  return (
    <View style={styles.container}>
      <Image
        source={require("../../img/cronometro.png")}
        style={styles.cronometro}
      />
      <Text style={styles.timer}>{time.toFixed(1)}</Text>

      <View style={styles.btnArea}>
        <TouchableOpacity style={styles.btn} onPress={() => setTimerOn(true)}>
          <Text style={styles.btnText}>Start</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn} onPress={() => setTimerOn(false)}>
          <Text style={styles.btnText}>Pause</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn} onPress={() => setTime(0)}>
          <Text style={styles.btnText}>Clear</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
