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
import CustomButton from '../components/CustomButton';
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
class OrderSuccess extends Component {

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
               
                    <View style={{ marginTop: 30 }}>
                        <View style={{ justifyContent: 'center', alignSelf: 'center' ,marginBottom:15}}>
                            <Image
                                style={{ width: 170, height: 170 }}
                                source={require('../assets/images/order_success.png')}
                                resizeMode="contain"
                            />
                        </View>
                        <View style={{ paddingHorizontal: 40 }}>
                            <Text style={{ textAlign: 'center', marginTop: 8, color: Colors.white, fontSize: 16, fontFamily: "Poppins-Regular", }}>Your Order has been successfully submitted. wait for approved</Text>
                            <Text style={{ textAlign: 'center', marginTop: 12, color: Colors.white, fontSize: 14, fontFamily: "Poppins-Regular", }}>Your Order Id</Text>
                            <Text style={{ textAlign: 'center', marginTop: 4, color: Colors.white, fontSize: 25, fontFamily: "Poppins-Regular", }}>#FF002256586666</Text>
                            <Text style={{ textAlign: 'center', marginTop: 12, color: Colors.white, fontSize: 14, fontFamily: "Poppins-Regular", }}>Thank you for shopping with us</Text>
                        </View>
                         <View style={{ paddingHorizontal: 20, flexDirection:'column', marginTop:60 }}>
                         <CustomButton
                            name="Continue Shopping"
                            onPress={()=>{this.props.navigation.navigate('Home')}}
                            buttonColor="#fff"
                            textColor ={Colors.primary}
                            // buttonIcon={<Icon name='rowing' color={'#FFF'} />}
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
        flex: 1, flexDirection: "column",backgroundColor:Colors.primary
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


export default OrderSuccess;