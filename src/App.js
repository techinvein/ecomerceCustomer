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
import { useSelector, useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import NetInfo from '@react-native-community/netinfo';
import Spinner from 'react-native-loading-spinner-overlay';

import { NavigationContainer } from '@react-navigation/native';
import { RootStackScreen } from './navigation/MainNavigator';
import AppStatusBar from './components/StatusBar';

import * as actionCreator from './redux/actions/appActions';
import * as userActionCreator from './redux/actions/userAuth';
import {check, checkMultiple, PERMISSIONS, RESULTS, request, openSettings} from 'react-native-permissions';

const App = () => {

    const dispatch = useDispatch();
    const [loginStatus, setLoginStatus] = React.useState(false);
    const [userDetails, setUserDetails] = React.useState(null);

    const isUserLoggedIn = useSelector(state => {
        console.log(state,"kkkkkkk")
        return state.user.isUserLoggedIn
    });

    // const isUserLoggedIn = false

    const isInternetAvailable = useSelector(
        state => state.app.isInternetAvailable,
    );

    const loader = useSelector(state => {
        // console.log("Loader", state)
        return state.app.loading
    });

    checkGPSPermission = async () => {
        return new Promise((resolve, reject) => {
            if(Platform.OS === 'android'){
                check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION)
                .then((result) => {

                })
                .catch((error) => {

                });
            }
            else if(Platform.OS === 'ios'){

            }
        })
    }

    NetInfo.addEventListener(async (state) => {
        dispatch(actionCreator.updateInternetStatus(state.isInternetReachable));
    });

    checkLoginStatus = async () => {
      let userDetailsTemp = await AsyncStorage.getItem('userDetails');
      let userDetails = JSON.parse(userDetailsTemp);
      console.log(userDetails, await AsyncStorage.getItem('isUserLoggedIn'))
      if(userDetails) {
          await setUserDetails(userDetails);
          dispatch(userActionCreator.storeUserDetails(userDetails));
      }
      if(await AsyncStorage.getItem('isUserLoggedIn') === 'true'){
          await setLoginStatus(true);
          dispatch(userActionCreator.storeLoginStatus(true));
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

    const offlineModal = useMemo(() => {
        return (
            <Modal
                animationType="slide"
                transparent={true}
                visible={!isInternetAvailable}>
                <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#000',
                    padding: 20,
                    opacity: 0.8,
                }}>
                <View style={{
                    flexDirection: 'column',
                    alignItems: 'center',
                }}>
                <Image
                  resizeMode="contain"
                  source={require('./assets/images/offline.png')}
                  style={{
                    width: 90,
                    height: 90,
                  }}
                />
                <Text style={{color: '#fff', fontSize: 16}}> You are offline </Text>
              </View>
            </View>
          </Modal>
        );
    }, [isInternetAvailable]);

    return (
        <>
        {spinner}
        {offlineModal}
        {statusBar}
        {MainNavigationContainer}
        </>
    );
};

export default App;
