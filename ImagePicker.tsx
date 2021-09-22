import React, { useEffect, useState } from "react";
import { View, Button, Platform, Alert, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";

export const ImagePickerComponent = () => {
  const [result, setResult] = useState<null | string>(null)
  const onPickImage = async () => {
      let response = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true
      })

      if(!response.cancelled){
          setResult(response.uri)
      }
  };

  useEffect(() => {
    async function accessPermission() {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (status !== ImagePicker.PermissionStatus.GRANTED) {
          Alert.alert("You cannot use this feature");
        }
      }
    }

    accessPermission();
  }, []);

  return (
    <View>
      <Button title="Pick Image" onPress={onPickImage} />
      {result !== null && <Image source={{ uri: result }} style={{ width: 200, height: 200 }} />}
    </View>
  );
};
