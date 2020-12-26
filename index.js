/**
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';
import { AppRegistry } from 'react-native';
import App from './src/App';
import { name as appName } from './app.json';

const RootComponent = () => (
    <App />
);

AppRegistry.registerComponent(appName, () => RootComponent);
