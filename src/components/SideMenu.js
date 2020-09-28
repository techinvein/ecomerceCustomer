import React from 'react';
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";

import {View, Text, Image, TouchableOpacity, ImageBackground} from "react-native";
import * as actionCreator from '../redux/actions/userAuth';
import AsyncStorage from '@react-native-community/async-storage';
import { useSelector, useDispatch } from 'react-redux';

import styles from '../styles/login'
import { ScrollView } from 'react-native-gesture-handler';


const SideMenu = (props) => {

    const dispatch = useDispatch();
    const logout = async () => {
        console.log("@@@@@@@@@@ Called @@@@@@@@@")
            
        dispatch(actionCreator.storeLoginStatus(false));
        dispatch(actionCreator.storeUserDetails(null)); 
        // await AsyncStorage.removeItem('userDetails')
        // await AsyncStorage.removeItem('isUserLoggedIn');
        console.log("@@@@@@@@@@ Logout @@@@@@@@@")
    };

    const openPage = async (destination) => {
        // dispatch(actionCreator.updateNavigateFrom('menu'));
        console.log("@@@@@@@@@@ Called @@@@@@@@@")
        console.log(destination)
        props.navigation.toggleDrawer();
        // props.navigation.navigate(destination)
    };

    return (
        <View style={styles.menuWrapper}>
            <View style={styles.userImageArea}>
                    <View style={styles.imgTextArea}>
                        <Text style={styles.username}>Jhone Doe</Text>
                    </View>
            </View>

            <ScrollView style={styles.menuScroll}>
                <TouchableOpacity style={styles.link} onPress={() => {openPage("Home")}}>
                    {/* <Image style={styles.menuImage} source={require('./../assets/images/categories_icon.png')} /> */}
                    <Text style={styles.navText}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.link} onPress={() => {logout()}}>
                    <Text style={styles.navText}>Logout</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
}

export default SideMenu;