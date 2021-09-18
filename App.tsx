import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <View style={styles.container}>
      <Text>{count}</Text>
      <View style={styles.buttonContainer}>
      <Button
        title="Increment count"
        onPress={() => {
          setCount(count + 1);
        }}
      />

      <Button
        title="Decrement count"
        onPress={() => {
          setCount(count - 1);
        }}
      />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    flexDirection: 'row'
  }
});
