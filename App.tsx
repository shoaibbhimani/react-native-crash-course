import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Button, FlatList } from "react-native";


export default function App() {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch("https://my-json-server.typicode.com/typicode/demo/posts")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setList(data);
      });
  }, []);

  return (
    <View style={styles.container}>
     
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
    flexDirection: "row",
  },
});
