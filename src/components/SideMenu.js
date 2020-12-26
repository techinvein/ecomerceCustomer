import React from 'react';
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";

import {View, Text, Image, TouchableOpacity, ImageBackground} from "react-native";
import * as actionCreator from '../redux/actions/userAuth';
import AsyncStorage from '@react-native-community/async-storage';
import { useSelector, useDispatch } from 'react-redux';

import styles from '../styles/sidebar'
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
        props.navigation.navigate(destination)
    };

    return (
        <View style={styles.menuWrapper}>
            <ScrollView style={styles.menuScroll}>
                <View style={styles.imgTextArea}>
                    <View style={styles.profileImg}>
                        <Text style={styles.profileText}>S</Text>
                    </View>
                    <View>
                        <Text style={styles.userText}>Sudipta Mukherjee</Text>
                        <Text style={styles.mobile}>+91 9002895900</Text>
                    </View>
                </View>

                {/* <ImageBackground style={styles.imgContainer} resizeMode="contain" source={require('./../assets/images/side_bck.jpg')} style={styles.backgroundImg}> */}
                    <View>
                        <TouchableOpacity style={styles.link} onPress={() => {openPage("Home")}}>
                            <Image style={styles.menuImage} source={require('./../assets/images/home.png')} />
                            <Text style={styles.navText}>Home</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.link} onPress={() => {openPage("ProfileScreen")}}>
                            <Image style={styles.menuImage} source={require('./../assets/images/my_profile.png')} />
                            <Text style={styles.navText}>My Profile</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.link} onPress={() => {openPage("MyOrdersScreen")}}>
                            <Image style={styles.menuImage} source={require('./../assets/images/order.png')} />
                            <Text style={styles.navText}>Manage Orders</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.link} onPress={() => {openPage("ContactScreen")}}>
                            <Image style={styles.menuImage} source={require('./../assets/images/contact.png')} />
                            <Text style={styles.navText}>Need Help</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.link} onPress={() => {openPage("Home")}}>
                            <Image style={styles.menuImage} source={require('./../assets/images/accept.png')} />
                            <Text style={styles.navText}>Privacy Policy</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.link} onPress={() => {openPage("Home")}}>
                            <Image style={styles.menuImage} source={require('./../assets/images/rate.png')} />
                            <Text style={styles.navText}>Rate us</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.link} onPress={() => {openPage("AboutUs")}}>
                            <Image style={styles.menuImage} source={require('./../assets/images/people.png')} />
                            <Text style={styles.navText}>About us</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.link} onPress={() => {openPage("Home")}}>
                            <Image style={styles.menuImage} source={require('./../assets/images/share.png')} />
                            <Text style={styles.navText}>Share App</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.link} onPress={() => {logout()}}>
                            <Image style={styles.menuImage} source={require('./../assets/images/logout.png')} />
                            <Text style={styles.navText}>Logout</Text>
                        </TouchableOpacity>
                    </View>
                {/* </ImageBackground> */}
              
                <View style={styles.footer}>
                <Image  source={require('./../assets/images/side_bck.jpg')} resizeMode="contain"  style={{width:'100%',height:140,opacity:0.4}}/>
                <View style={styles.footerdes}>
                <Text style={styles.username}>Version 1.0</Text>
                    <Text style={styles.username}>Develop by Syscogen Cognitech Pvt. Ltd.</Text>
                </View>
                    
                </View>
            </ScrollView>
        </View>
    );
}

   
export default SideMenu;