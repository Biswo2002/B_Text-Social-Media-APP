import { StyleSheet } from 'react-native'
import React from 'react'
import { Home } from '../../screen/private'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const PrivateRoutes = () => {
  const Stack = createNativeStackNavigator()
  return (
    <Stack.Navigator
      initialRouteName='Home'
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name='Home' component={Home} />

    </Stack.Navigator>
  )
}

export default PrivateRoutes

const styles = StyleSheet.create({})