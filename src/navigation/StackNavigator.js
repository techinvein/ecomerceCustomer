import React from 'react';
import {
    Image,
    View,
    Button,
    TouchableOpacity
} from 'react-native';
  
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import { createDrawerNavigator } from "@react-navigation/drawer";

import SideMenu from '../components/SideMenu';
import HomeScreen from '../pages/HomeScreen';
import LoginScreen from '../pages/LoginScreen';

const AuthStack = createStackNavigator();
const AppStack = createDrawerNavigator();

const ProfileStack = createStackNavigator();

export const AuthStackScreen = () => (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="Login"
        component={LoginScreen}
        options={{ title: "Sign In", headerShown: false, }}
      />
    </AuthStack.Navigator>
);

export const AppStackScreen = () => (
    <AppStack.Navigator drawerContent={props => <SideMenu {...props} />}>
        <AppStack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: "Home", headerShown: false, }}
        />
    </AppStack.Navigator>
);