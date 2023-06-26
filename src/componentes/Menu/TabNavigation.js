import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { MainStackNavigator, TabStackNavigator } from "./StackNavigator";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name = "Home" component={MainStackNavigator} />
            <Tab.Screen name="About" component={TabStackNavigator} />
        </Tab.Navigator>
    );
};
 export default BottomTabNavigator;