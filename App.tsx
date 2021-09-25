import React from "react";
import { StyleSheet, View } from "react-native";

import { ImagePickerComponent } from "./ImagePicker";

export default function App() {
  return (
    <View style={styles.container}>
      <ImagePickerComponent />
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
