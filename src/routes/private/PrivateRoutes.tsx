import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StyleSheet } from 'react-native'
import React from 'react'
import RequestMessage from '../../screen/private/RequestMessage'
import CallScreen from '../../screen/private/CallScreen'
import { Home, SearchNext } from '../../screen/private'
import VideoCall from '../../screen/private/VideoCall'
import Comments from '../../screen/private/Comments'
import Story from '../../screen/private/story/Story'
import Message from '../../screen/private/Message'
import Inbox from '../../screen/private/Inbox'
import Bottomtab from '../layout/Bottomtab'

const PrivateRoutes = () => {
  const Stack = createNativeStackNavigator()
  return (
    <Stack.Navigator
      initialRouteName='Bottomtab'
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name='RequestMessage' component={RequestMessage} />
      <Stack.Screen name='SearchNext' component={SearchNext} />
      <Stack.Screen name='CallScreen' component={CallScreen} />
      <Stack.Screen name='Bottomtab' component={Bottomtab} />
      <Stack.Screen name='VideoCall' component={VideoCall} />
      <Stack.Screen name='Comments' component={Comments} />
      <Stack.Screen name='Message' component={Message} />
      <Stack.Screen name='Inbox' component={Inbox} />
      <Stack.Screen name='Story' component={Story} />
      <Stack.Screen name='Home' component={Home} />

    </Stack.Navigator>
  )
}

export default PrivateRoutes

const styles = StyleSheet.create({})