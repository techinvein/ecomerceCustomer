import React, { Component } from 'react'
import { Button, Image, Text, TextInput,StatusBar, View } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import CustomHeader from '../components/CustomHeader';
import Colors from '../constants/Colors';
import { storeLoginStatus } from '../redux/actions/userAuth';
import styles from '../styles/contact'
import { Dimensions } from 'react-native';
const ContactScreen = (props) => {

    return (
        <View style={{marginTop:StatusBar.currentHeight}}>
            <CustomHeader 
                title={'Need Help'} 
                headerBackground={Colors.baseColor}
                name="Sudipta Sarkar" 
                day="1 day ago" showBack={false} showCart={true} 
                showSearchBar={false}
                // cartClick={()=>{ this.props.navigation.navigate("ProductListScreen") }}
                navigation={props.navigation}
            />
        
            <ScrollView style={{}}>
                <View style={styles.container}>
                    
                    <Image resizeMode="cover" style={styles.image} source={require('./../assets/images/Customer-care-service.jpeg')} />
                    
                    <View style={styles.whtsappCont}>
                        <View style={styles.textCont}>
                            <Text style={styles.text}>WhatsApp with us</Text>
                        </View>
                        <View style={styles.joinButton}>
                            <TouchableOpacity >
                                <Text style={styles.joinText}>Join</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.whtsappCont}>
                        <View style={styles.textCont}>
                            <Text style={styles.text}>Say hello with us</Text>
                        </View>
                        <View style={styles.joinButton}>
                            <TouchableOpacity >
                                <Text style={styles.callText}>Call</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    

                    <View style={styles.formContainer}>
                            <Text style={styles.emailText}>Email With Us</Text>
                        <View style={styles.form}>
                            <TextInput
                                style={styles.inputTxt}
                                placeholder="Your Name"
                                placeholderTextColor="#4a4a4a"
                                underlineColorAndroid={"#000"}
                            />
                            <TextInput
                                style={styles.inputTxt}
                                placeholder="Mobile Number"
                                placeholderTextColor="#4a4a4a"
                                underlineColorAndroid={"#000"}
                            />
                            <TextInput
                                style={styles.inputTxt}
                                multiline
                                numberOfLines={2}
                                placeholder="Reason"
                                placeholderTextColor="#4a4a4a"
                                underlineColorAndroid={"#000"}
                            />
                            <TextInput
                                style={styles.inputTxt}
                                multiline
                                numberOfLines={4}
                                placeholder="Your Message"
                                placeholderTextColor="#4a4a4a"
                                underlineColorAndroid={"#000"}
                            />
                            <TouchableOpacity style={styles.sendButton}>
                                <Text style={styles.sendText}>Send It</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

const mapStateToProps = ({ user }) => ({
    userDetails: user.userDetails
});
  
const mapDispatchToProps = dispatch => ({
    storeLoginStatus: (input) => dispatch(storeLoginStatus(input)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactScreen);