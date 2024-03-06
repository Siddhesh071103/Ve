import { Settings, StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import React, { useState, useEffect } from "react";
import login from './app/login';
import register from './app/register';
import screen from './app/screen'
import profile from './(tabs)/profile';
import settings from './(tabs)/settings';
import additional from './(tabs)/additional';
import home from './app/home';
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'

const Stack = createStackNavigator();

function App() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }
  useEffect(() => {
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  if (initializing) return null;

  if (!user) {
    return (
      <NavigationContainer independent={true}>
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
          <Stack.Screen name='Home' component={home} />
          <Stack.Screen name='Login' component={login} />
          <Stack.Screen name='Register' component={register} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='Screen' component={screen} />
        <Stack.Screen name='Profile' component={profile} />
        <Stack.Screen name='Settings' component={settings} />
        <Stack.Screen name='Additional' component={additional} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default () => {
  return (
    <NavigationContainer>
      <App />
    </NavigationContainer>
  )
}




