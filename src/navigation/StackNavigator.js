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
import ProductListScreen from '../pages/ProductList';
import CategoriesScreen from '../pages/CategoriesScreen';
import MyOrdersScreen from '../pages/MyOrdersScreen';
import LoginPageScreen from '../pages/LoginPageScreen';
import OtpScreen from '../pages/OtpScreen';
import LocationScreen from '../pages/LocationScreen';
import MyBasketScreen from '../pages/MyBasketScreen';
import ProductDetailsScreen from '../pages/ProductDetailsScreen';
import OrderDetailsScreen from '../pages/OrderDetailsScreen';
import ProfileScreen from '../pages/ProfileScreen';
import SearchLocation from '../pages/SearchLocation';
import NearestBranchList from '../pages/NearestBranchList'
import SaveAddress from '../pages/SaveAddress';
import Coupons from '../pages/Coupons';
import DeliveryAddressPage from '../pages/AddLocation';
import ContactScreen from '../pages/ContactScreen';
import AboutUs from '../pages/AboutUs';
import OrderSuccess from '../pages/OrderSuccess';
import UserRating from '../pages/UserRating'
import EditAccount from '../pages/EditAccount'

const AuthStack = createStackNavigator();
const AppStack = createDrawerNavigator();

const ProfileStack = createStackNavigator();

// export const AuthStackScreen = () => (
//     <AuthStack.Navigator>
//         <AuthStack.Screen
//             name="Login"
//             component={LoginScreen}
//             options={{ title: "Sign In", headerShown: false, }}
//         />

//         <AppStack.Screen
//             name="Register"
//             component={LoginPageScreen}
//             options={{ title: "Sign In", headerShown: false, }}
//         />

//         {/* OTP screen */}
//         <AppStack.Screen
//             name="OtpScreen"
//             component={OtpScreen}
//             options={{ title: "Otp ", headerShown: false, }}
//         />
//     </AuthStack.Navigator>
// );

export const AppStackScreen = () => (
    <AppStack.Navigator drawerContent={props => <SideMenu {...props} />}>
        <AppStack.Screen
            name="Login"
            component={LoginScreen}
            options={{ title: "Sign In", headerShown: false, }}
        />

        {/* <AppStack.Screen
            name="Register"
            component={LoginPageScreen}
            options={{ title: "Sign In", headerShown: false, }}
        /> */}

        {/* OTP screen */}
        <AppStack.Screen
            name="OtpScreen"
            component={OtpScreen}
            options={{ title: "Otp ", headerShown: false, }}
        />


        {/* Location screen */}
        <AppStack.Screen
            name="LocationScreen"
            component={LocationScreen}
            options={{ title: "Select location ", headerShown: false, }}
        />

        <AppStack.Screen
            name="SearchLocation"
            component={SearchLocation}
            options={{ title: "Select location ", headerShown: false, }}
        />

        {/* HomeScreen */}
        <AppStack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: "Home", headerShown: false, }}
        />
   <AppStack.Screen
            name="ContactScreen"
            component={ContactScreen}
            options={{ title: "Need Help", headerShown: false, }}
        />
         <AppStack.Screen
            name="EditAccount"
            component={EditAccount}
            options={{ title: "Need Help", headerShown: false, }}
        />
        
           <AppStack.Screen
            name="UserRating"
            component={UserRating}
            options={{ title: "Need Help", headerShown: false, }}
        />
        
        <AppStack.Screen
            name="NearestBranchList"
            component={NearestBranchList}
            options={{ title: "Home", headerShown: false, }}
        />
        {/* ProductListScreen */}
        <AppStack.Screen
            name="ProductListScreen"
            component={ProductListScreen}
            options={{ title: "Product list", headerShown: false, }}
        />
        {/* CategoriesScreen */}
        <AppStack.Screen
            name="CategoriesScreen"
            component={CategoriesScreen}
            options={{ title: "Categories", headerShown: false, }}
        />

<AppStack.Screen
            name="Coupons"
            component={Coupons}
            options={{ title: "Coupons", headerShown: false, }}
        />

        {/* MyOrdersScreen */}
        <AppStack.Screen
            name="MyOrdersScreen"
            component={MyOrdersScreen}
            options={{ title: "My Orders", headerShown: false, }}
        />

<AppStack.Screen
            name="OrderSuccess"
            component={OrderSuccess}
            options={{ title: "My Orders", headerShown: false, }}
        />


<AppStack.Screen
            name="SaveAddress"
            component={SaveAddress}
            options={{ title: "My Orders", headerShown: false, }}
        />
        <AppStack.Screen
            name="AboutUs"
            component={AboutUs}
            options={{ title: "My Orders", headerShown: false, }}
        />


        {/* Login second page */}

        <AppStack.Screen
            name="LoginPageScreen"
            component={LoginPageScreen}
            options={{ title: "Login", headerShown: false, }}
        />




        {/* My basket screen */}
        <AppStack.Screen
            name="MyBasketScreen"
            component={MyBasketScreen}
            options={{ title: "My basket ", headerShown: false, }}
        />

        {/* Product Details screen */}
        <AppStack.Screen
            name="ProductDetailsScreen"
            component={ProductDetailsScreen}
            options={{ title: "Product Details", headerShown: false, }}
        />

        {/* Order Details screen */}
        <AppStack.Screen
            name="OrderDetailsScreen"
            component={OrderDetailsScreen}
            options={{ title: "Order Details", headerShown: false, }}
        />

        {/* Profile screen */}
        <AppStack.Screen
            name="ProfileScreen"
            component={ProfileScreen}
            options={{ title: "My Account", headerShown: false, }}
        />

















    </AppStack.Navigator>
);

