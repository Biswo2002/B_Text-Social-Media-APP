import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StyleSheet } from 'react-native'
import React from 'react'
import ForgotPasswordVerification from '../../screen/Auth/ForgotPasswordVerification';
import ForgotPassword from '../../screen/Auth/ForgotPassword';
import LoginAccount from '../../screen/Auth/LoginAccount';
import OnBoarding from '../../screen/public/onBoarding';
import Welcome from '../../screen/public/Welcome';
import Register from '../../screen/Auth/Register';
import Login from '../../screen/Auth/Login';

// import { Login } from 's';

const PublicRoutes = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName={'OnBoarding'}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name='ForgotPasswordVerification' component={ForgotPasswordVerification} />
      <Stack.Screen name='ForgotPassword' component={ForgotPassword} />
      <Stack.Screen name='LoginAccount' component={LoginAccount} />
      <Stack.Screen name='OnBoarding' component={OnBoarding} />
      <Stack.Screen name='Register' component={Register} />
      <Stack.Screen name='Welcome' component={Welcome} />
      <Stack.Screen name='Login' component={Login} />
      {/* // <Stack.Screen name='Verification' component={Verification} /> */}
    </Stack.Navigator>
  )
}
export default PublicRoutes

const styles = StyleSheet.create({})