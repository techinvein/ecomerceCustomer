import React, { useEffect, useState, useMemo } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Alert,
  Modal,
  Image,
  I18nManager,
  Platform
} from 'react-native';
import { Dimensions } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Spinner from 'react-native-loading-spinner-overlay';

import { NavigationContainer } from '@react-navigation/native';
import { RootStackScreen } from './navigation/MainNavigator';
import AppStatusBar from './components/StatusBar';

const defaultwidth = Dimensions.get('window').width;
const imageDefaultHeight = Dimensions.get('window').width / 1.8;

const App = () => {

    const [loginStatus, setLoginStatus] = React.useState(false);
    const [userDetails, setUserDetails] = React.useState(null);

    const isUserLoggedIn = false

    const isInternetAvailable = true

    const loader = false;

    checkLoginStatus = async () => {
      let userDetailsTemp = await AsyncStorage.getItem('userDetails');
      let userDetails = JSON.parse(userDetailsTemp);
      console.log(userDetails, await AsyncStorage.getItem('isUserLoggedIn'))
      if(userDetails) {
          await setUserDetails(userDetails);
      }
      if(await AsyncStorage.getItem('isUserLoggedIn') === 'true'){
          await setLoginStatus(true);
      }
    }

    useEffect(() => {
        // Fetch the token from storage then navigate to our appropriate place
        const initialTask = async () => {
            checkLoginStatus();
        };

        initialTask();

    }, []);

    const statusBar = useMemo(
        () => (
          <AppStatusBar />
        ),
        [],
    );

    const MainNavigationContainer = useMemo(
        ()=>(
            <NavigationContainer>
                <RootStackScreen isUserLoggedIn={isUserLoggedIn} />
            </NavigationContainer>
        ),
        [isUserLoggedIn]
    );

    const spinner = useMemo(
        () => (
          <Spinner
            visible={loader}
            textContent={'Please wait...'}
            textStyle={{color: '#FFF'}}
          />
        ),
        [loader],
    );

    return (
        <>
        {spinner}
        {statusBar}
        {MainNavigationContainer}
        </>
    );
};

export default App;
