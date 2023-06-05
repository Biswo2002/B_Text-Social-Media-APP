import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StyleSheet } from 'react-native'
import React from 'react'
import OTPVerification from '../../screen/Auth/OTPVerification';
import ForgotPassword from '../../screen/Auth/ForgotPassword';
import FollowScreen from '../../screen/public/FollowScreen';
import LoginAccount from '../../screen/Auth/LoginAccount';
import OnBoarding from '../../screen/public/onBoarding';
import SetProfile from '../../screen/public/SetProfile';
import NewPassword from '../../screen/Auth/NewPassword';
import Welcome from '../../screen/public/Welcome';
import Register from '../../screen/Auth/Register';
import Login from '../../screen/Auth/Login';


const PublicRoutes = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName={'OnBoarding'}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name='OTPVerification' component={OTPVerification} />
      <Stack.Screen name='ForgotPassword' component={ForgotPassword} />
      <Stack.Screen name='FollowScreen' component={FollowScreen} />
      <Stack.Screen name='LoginAccount' component={LoginAccount} />
      <Stack.Screen name='NewPassword' component={NewPassword} />
      <Stack.Screen name='OnBoarding' component={OnBoarding} />
      <Stack.Screen name='SetProfile' component={SetProfile} />
      <Stack.Screen name='Register' component={Register} />
      <Stack.Screen name='Welcome' component={Welcome} />
      <Stack.Screen name='Login' component={Login} />
    </Stack.Navigator>
  )
}
export default PublicRoutes

const styles = StyleSheet.create({})