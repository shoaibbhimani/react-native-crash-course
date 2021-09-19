import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Button, FlatList } from "react-native";


type listItemType = {
  id: number;
  title: string
}




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
      <FlatList
        data={list}
        keyExtractor={(listItem: listItemType) => {
          return listItem.id.toString();
        }}
        renderItem={({ item }) => {
          return <Text>{item.title}</Text>
        }}
      />
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
