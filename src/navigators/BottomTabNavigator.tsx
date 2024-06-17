import React, { useEffect, useState } from "react";
import {
  Alert,
  Image,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  Text,
  View,
} from "react-native";
import { colors } from "../assets/colors/colors";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { style } from "./BottomTabStyle";
import { getHeight } from "../global/GConstant";
import { images } from "../assets/Images";
import { screens } from "../screens/index";

const BottomTabNavigator = (props: any) => {
  const Tab = createBottomTabNavigator();

  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: "transparent" }}>
        <Tab.Navigator
          initialRouteName={'AccountScreen'}
          screenOptions={{
            tabBarStyle: {
              height: getHeight(84),
              justifyContent: "center",
              borderTopWidth: 1,
              paddingTop: Platform.OS == "ios" ? null : getHeight(10),
              // paddingBottom:Platform.OS == 'ios' ? getHeight(10):getHeight(10),
              //
            },
            headerTitleAlign: "center",
            tabBarIconStyle: {},
            tabBarLabelPosition: "below-icon",
            // headerShown:false
          }}
        >
          <Tab.Screen
            name="HomeScreen"
            component={screens.HomeScreen}
            options={{
              tabBarLabel: ({ focused }: any) => (
                <Text
                  style={[
                    style.lblTitle,
                    { color: focused ? colors.globalColor : "gray" },
                  ]}
                >
                  {"Home"}
                </Text>
              ),
              tabBarIcon: ({ color, size, focused }: any) => (
                <Image
                  style={style.imageStyle}
                  source={focused ? images.Home : images.HomeUnFocus}
                />
              ),
              headerShown: false,
              title:'jkhjkhkj'
            }}
          />
          <Tab.Screen
            name="AccountScreen"
            component={screens.AccountScreen}
            options={{
              tabBarLabel: ({ focused }: any) => (
                <Text
                  style={[
                    style.lblTitle,
                    { color: focused ? colors.globalColor : "gray" },
                  ]}
                >
                  {"Account"}
                </Text>
              ),
              tabBarIcon: ({ color, size, focused }: any) => (
                <Image
                  tintColor={focused && colors.globalColor}
                  style={style.imageStyle}
                  source={images.Person}
                />
              ),
              headerShown: false,
            }}
          />
          <Tab.Screen
            name="DeviceDetailsScreen"
            component={screens.DeviceDetailsScreen}
            options={{
              tabBarLabel: ({ focused }: any) => (
                <Text
                  style={[
                    style.lblTitle,
                    { color: focused ? colors.globalColor : "gray" },
                  ]}
                >
                  {"Device Details"}
                </Text>
              ),
              tabBarIcon: ({ color, size, focused }: any) => (
                <Image
                  tintColor={focused && colors.globalColor}
                  style={style.imageStyle}
                  source={images.ListDetailView}
                />
              ),
              headerShown: false,
            }}
          />
        </Tab.Navigator>
      </View>
    </KeyboardAvoidingView>
  );
};

export default BottomTabNavigator;
