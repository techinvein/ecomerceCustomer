import React, { useMemo } from 'react';

import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import { AuthStackScreen, AppStackScreen } from './StackNavigator';

const RootStack = createStackNavigator();
export const RootStackScreen = ({ isUserLoggedIn }) => (
    <RootStack.Navigator headerMode="none">
        {isUserLoggedIn ? (
        <RootStack.Screen
            name="App"
            component={AppStackScreen}
            options={{
            animationEnabled: false
            }}
        />
        ) : 
        isUserLoggedIn.skip ? (
        <RootStack.Screen
            name="App"
            component={AppStackScreen}
            options={{
            animationEnabled: false
            }}
        />
        ) :
        (
        <RootStack.Screen
            name="Auth"
            component={AuthStackScreen}
            options={{
            animationEnabled: false
            }}
        />
        )}
    </RootStack.Navigator>
);