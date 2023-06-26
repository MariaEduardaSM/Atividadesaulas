import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import About from './About';
import Home from './Home';
import Simples from '../Simples';
import Frag from '../Frag';
import ParImpar from '../ParImpar';

const Stack = createNativeStackNavigator();

const MainStackNavigator = () => {
  return (    
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="Simples" component={Simples} />
        <Stack.Screen name="Frag" component={Frag} />
        <Stack.Screen name="ParImpar" component={ParImpar} />
    



      </Stack.Navigator>
  );
}
const TabStackNavigator = ()  =>{
  return (
    <Stack.Navigator>
      <Stack.Screen name="About"component={About}/>
    </Stack.Navigator>
  );
}
export { MainStackNavigator, TabStackNavigator };