import { NavigationContainer } from '@react-navigation/native'
import { NativeBaseProvider } from 'native-base'
import { StyleSheet } from 'react-native'
import React from 'react'
import { AppContextProvider } from './src/contexts'
import { CustomTheme } from './src/styles'
import Routes from './src/Routes'

const App = () => {
  return (
    <NavigationContainer>
      <NativeBaseProvider
        config={{
          dependencies: {
            'linear-gradient': require('react-native-linear-gradient')
              .default,
          },
        }}
        theme={CustomTheme as any}>
        <AppContextProvider>
          <Routes />
        </AppContextProvider>
      </NativeBaseProvider>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})