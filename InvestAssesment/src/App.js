/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
 import 'react-native-gesture-handler';
import React from 'react';
import type {Node} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Provider} from 'react-redux';
import {Store} from '../src/redux/UserDetails/store';
import welcomeScreen from './screens/welcomScreen';
import buttonsScreen from './screens/buttonScreen';
import nativeModuleScreen from './screens/nativeModuleScreen';
import CustomHeader from './utilities/Customheader';
const Stack = createStackNavigator();
function App(){
  return(
    <Provider store={Store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="WelcomeScreen"
          screenOptions={{
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#0080ff'
            },
            headerTintColor: '#ffffff',
            headerTitleStyle: {
              fontSize: 25,
              fontWeight: 'bold'
            }
          }}
        >
          <Stack.Screen
            name="Welcome"
            component={welcomeScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Buttons"
            component={buttonsScreen}
            options={{ headerTitle: (props) => <CustomHeader {...props} /> }}
          />
          <Stack.Screen
            name="Native"
            component={nativeModuleScreen}
            options={{ headerTitle: (props) => <CustomHeader {...props} /> }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

export default App;
