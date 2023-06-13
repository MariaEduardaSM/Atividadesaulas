import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import {MainStackNavigator} from "./componentes/Menu/StackNavigator";

export default class App extends Component {
  render() {
    return(
    <NavigationContainer>
      <MainStackNavigator />
    </NavigationContainer>
    );
  }   
}
  
const estilos = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fonte: {
    fontSize: 50,
  },
});