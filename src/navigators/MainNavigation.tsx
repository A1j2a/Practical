import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { View } from "react-native";
import { colors } from "../assets/colors/colors";
import { fontFamily, fontSize } from "../global/GConstant";
import { screens } from "../screens";
const Stack = createNativeStackNavigator();
const ModalStack = createNativeStackNavigator();

const MainNavigation = (props: any) => {
  const addScreens = (name: string, component: any, option: any) => {
    return <Stack.Screen name={name} component={component} options={option} />;
  };

  const addModalScreen = (name: string, component: any) => {
    return <ModalStack.Screen name={name} component={component} />;
  };

  const MainStackScreen = () => {
    return (
      <Stack.Navigator
        screenOptions={{
          headerTitleAlign: "center",
          headerShown:false,
          headerBackVisible: false,
          headerShadowVisible: false,
          headerTitleStyle: {
            color: colors.black,
            fontFamily: fontFamily.Medium,
            fontSize: fontSize.size16,
          },
        }}
        initialRouteName={props.initialRouteName}
      >
        {addScreens("BottomTabNavigator", screens.BottomTabNavigator, {
          title: "",
          
        })}
      </Stack.Navigator>
    );
  };

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <NavigationContainer>
        <ModalStack.Navigator
          initialRouteName="MainStackScreen"
          screenOptions={{
            headerShown: false,
            presentation: "transparentModal",
            animation: "slide_from_bottom",
            headerBackVisible: false,
            headerTitleAlign: "center",
          }}
        >
          {addModalScreen("MainStackScreen", MainStackScreen)}
        </ModalStack.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default MainNavigation;
