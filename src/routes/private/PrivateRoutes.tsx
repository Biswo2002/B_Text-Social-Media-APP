import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StyleSheet } from 'react-native'
import React from 'react'
import Story from '../../screen/private/story/Story'
import Comments from '../../screen/private/Comments'
import { Home } from '../../screen/private'
import Bottomtab from '../layout/Bottomtab'

const PrivateRoutes = () => {
  const Stack = createNativeStackNavigator()
  return (
    <Stack.Navigator
      initialRouteName='Bottomtab'
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name='Bottomtab' component={Bottomtab} />
      <Stack.Screen name='Comments' component={Comments} />
      <Stack.Screen name='Story' component={Story} />
      <Stack.Screen name='Home' component={Home} />

    </Stack.Navigator>
  )
}

export default PrivateRoutes

const styles = StyleSheet.create({})