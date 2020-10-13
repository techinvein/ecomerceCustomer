import React, { Component, useState, useEffect } from 'react'
import { KeyboardAvoidingView, ScrollView, StatusBar, StyleSheet, Text, View, FlatList, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements';
import CustomHeader from '../components/CustomHeader';
// import styles from '../styles/home'
import Colors from '../constants/Colors';
import CustomImage from '../components/CustomImage';
import { Dimensions } from 'react-native';
import CustomProduct from '../components/CustomProduct';

const defaultwidth = Dimensions.get('window').width;

// const HomeScreen = () => {
const searchbarContainerStyle = {
    backgroundColor: Colors.primary,
    borderTopColor: Colors.primary,
    borderBottomColor: Colors.primary,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 0
}

// class HomeScreen extends React.Component {
class AboutUs extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }




    render() {
        return (
            <KeyboardAvoidingView style={styles.container}>
                {/* <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#00BCD4" translucent = {true}/> */}
                <View style={styles.mainView}>
                    <View>
                        <CustomHeader
                            title={'About Us '}
                            headerBackground={Colors.baseColor}
                            showBack={false} showCart={false}
                            searchbarContainerStyle={searchbarContainerStyle}
                            showSearchBar={false}
                            cartClick={() => { this.props.navigation.navigate("LoginPageScreen") }}
                            navigation={this.props.navigation}
                        />
                    </View>
                    <View style={{ marginTop: 12 }}>
                        <View style={{ justifyContent: 'center', alignSelf: 'center' }}>
                            <Image
                                style={{ width: 200, height: 120 }}
                                source={require('../assets/images/Fastfooder.png')}
                                resizeMode="contain"
                            />
                        </View>
                        <View style={{ paddingHorizontal: 20 }}>
                            <Text style={{ fontSize: 18, fontWeight: '700', fontFamily: "Poppins-Regular", }}>WHO WE ARE</Text>
                            <Text style={{ textAlign: 'justify', marginTop: 8, color: Colors.border, fontSize: 13, fontFamily: "Poppins-Regular", }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
                            <Text style={{ marginTop: 12, color: Colors.primary, fontSize: 14, fontFamily: "Poppins-Regular", }}>www.fastfooder.com</Text>
                        </View>
                        <View style={{ paddingHorizontal: 20,flexDirection:'row',marginTop:10 }}>
                            <Image
                                style={{ width: 30, height: 30 }}
                                source={require('../assets/images/facebook.png')}
                                resizeMode="contain"
                            />
                             <Image
                                style={{ width: 30, height: 30,marginHorizontal:8 }}
                                source={require('../assets/images/twitter.png')}
                                resizeMode="contain"
                            />
                            <Image
                                style={{ width: 30, height: 30 }}
                                source={require('../assets/images/whatsapp.png')}
                                resizeMode="contain"
                            />
                        </View>
                    </View>

                </View>
            </KeyboardAvoidingView>
        )
    }

}

const styles = StyleSheet.create({
    container: { flex: 1, marginTop: StatusBar.currentHeight },
    mainView: {
        flex: 1, flexDirection: "column"
    },

    bannerStyle: {
        paddingLeft: 5,
        paddingRight: 5,
        backgroundColor: '#DEE1E6',
        paddingTop: 5, paddingBottom: 5
    },
    fooditemStyle: {
        paddingLeft: 5,
        paddingRight: 5,
        paddingTop: 5,
        paddingBottom: 5
    }

    // mainView_sub:{padding:8,flexDirection:"column",backgroundColor:'#000'},

    // sub_one:{flexDirection:'row',marginLeft:10,marginRight:10,paddingTop:5},
    // sub_one_icon:{justifyContent:"flex-start"},
    // sub_one_textView:{paddingRight:10},
    // sub_one_text:{color:"#FFF",paddingLeft:10},

    // sub_two:{flexDirection:'column',justifyContent:"center",backgroundColor:'#FFF', margin:10,padding: 10,paddingBottom:5, borderWidth:1,borderColor:'#FFF',borderRadius:5},
    // sub_two_view:{flexDirection:'row'},
    // sub_two_icon:{justifyContent:"flex-start"},
    // sub_two_input_view:{paddingLeft:10,paddingRight:10},

    // slider_main_view:{height: ((Dimensions.get('window').width/2.8) + 20)},
    // slider_flatlist:{height: ((Dimensions.get('window').width/2.8) + 20),backgroundColor:'#F2F2F2'},

});


export default AboutUs;