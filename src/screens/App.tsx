import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import MainNavigation from '../navigators/MainNavigation'
import { colors } from '../assets/colors/colors'
import FlashMessage from 'react-native-flash-message'

const App = () => {
  const [initialRouteName, setInitialRouteName] = useState('BottomTabNavigator')
  return (
    <View style={{ flex: 1, backgroundColor: colors.white }}>
        <StatusBar backgroundColor={colors.white} barStyle={"dark-content"} />
        {/* <Loader ref={(ref) => setLoaderRef(ref)} /> */}

        {initialRouteName !== "" ? (
          <MainNavigation initialRouteName={initialRouteName} />
        ) : null}
        <FlashMessage position={"center"} />
      </View>
  )
}

export default App

const styles = StyleSheet.create({})