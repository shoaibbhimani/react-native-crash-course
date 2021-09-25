import {
  createDrawerNavigator,
  DrawerNavigationProp,
  DrawerScreenProps,
} from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { View, Text, Button } from "react-native";
import React from "react";

type DrawerStack = {
  home: undefined;
  notification: { userId: string, age: number };
};

const DrawerStack = createDrawerNavigator<DrawerStack>();

type NavigationHomeProps = DrawerScreenProps<DrawerStack, "home">;

type HomeScreenProps = {
  navigation: NavigationHomeProps["navigation"];
};

const HomeScreen = ({ navigation }: HomeScreenProps) => (
  <View>
    <Button
      title="go to notification"
      onPress={() => {
        navigation.navigate("notification", {
          userId: "234567654567",
          age: 23
        });
      }}
    />
  </View>
);

type NavigationNotificationProps = DrawerScreenProps<
  DrawerStack,
  "notification"
>;

type NotificationScreenProps = {
  navigation: NavigationNotificationProps["navigation"];
  route: NavigationNotificationProps["route"];
};

const NotificationScreen = ({ navigation, route }: NotificationScreenProps) => {
  const { params } = route;
  const { userId, age } = params;

  return (
    <View>
      <Text>Notification Screen: {userId} </Text>
    </View>
  );
};

export const NavigationProvider = () => {
  return (
    <NavigationContainer>
      <DrawerStack.Navigator initialRouteName="home">
        <DrawerStack.Screen name="home" component={HomeScreen} />
        <DrawerStack.Screen
          name="notification"
          component={NotificationScreen}
        />
      </DrawerStack.Navigator>
    </NavigationContainer>
  );
};
