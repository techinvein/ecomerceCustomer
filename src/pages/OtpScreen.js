import React, { Component, useState,useEffect  } from 'react'
import { KeyboardAvoidingView, ScrollView, StatusBar, StyleSheet, Text, View,FlatList,Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements';
import Colors from '../constants/Colors';
import { Dimensions } from 'react-native';
import EditText from '../components/EditText';
import CustomButton from '../components/CustomButton';
import CustomHeader from '../components/CustomHeader';
import { connect } from 'react-redux';
import { storeLoginStatus } from '../redux/actions/userAuth';
const defaultwidth = Dimensions.get('window').width;

// const HomeScreen = () => {
const searchbarContainerStyle = {
    backgroundColor:Colors.baseColor,borderTopColor:Colors.baseColor,
    borderBottomColor:Colors.baseColor,paddingLeft:20,
    paddingRight:20,paddingTop:0
}

// class ProductListScreen extends React.Component {
class OtpScreen extends React.Component {

    constructor(props){
        super(props);
        this.state={
        }
    }

    veryfy = async () => {
        this.props.storeLoginStatus(true);
    }
render(){
    return (
        <KeyboardAvoidingView style={styles.container}>
            {/* <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#00BCD4" translucent = {true}/> */}
            <View style={[styles.mainView]}>
                <View>
                    <CustomHeader 
                        title={'OTP Screen '} 
                        headerBackground={Colors.baseColor}
                        showBack={true} showCart={false} 
                        searchbarContainerStyle={searchbarContainerStyle} 
                        showSearchBar={false}
                        cartClick={()=>{ this.props.navigation.navigate("LoginPageScreen") }}
                        navigation={this.props.navigation}
                    />
                </View>
                <View style={styles.contentBody}>
                    <View style={styles.titleView}>
                        <View><Text style={styles.titleHeading}>OTP</Text></View>
                        <View style={{paddingTop:15}}><Text style={{fontSize:15,letterSpacing:0.5,fontWeight:'500'}}>Enter 6 digit OTP sent to your mobile number</Text></View>
                    </View>
                    <View style={styles.titleView}>
                        <EditText
                            type="Text"
                            // style={styles.inputMargin}
                            // value={this.state.email}
                            // onChange={(text) => this.setState({email:text})}
                            placeholder="Enter your 6 digit OTP"
                         />
                    </View>
                    <View style={styles.titleView}>
                        <CustomButton
                            name="Verify"
                            onPress={()=>{this.veryfy()}}
                            buttonColor="green"
                            // buttonIcon={<Icon name='rowing' color={'#FFF'} />}
                         />
                    </View>

                    <View style={styles.otpOne}>
                        <Text>You have not received any OTP yet?</Text>
                    </View>
                    <View style={styles.otpSecond}>
                        <Text style={styles.resendOtp}>Resend OTP</Text>
                    </View>
                </View>



            </View>
        </KeyboardAvoidingView>
      )
}

}

const styles = StyleSheet.create({
    container: { flex: 1,marginTop:StatusBar.currentHeight},
    mainView:{ flex:1,flexDirection:"column"},
    contentBody:{},
    titleView:{padding:15},
    titleHeading:{fontSize:20,letterSpacing:0.5,fontWeight:'700'},
    otpOne:{padding:15,flexDirection:"row",justifyContent:'center'},
    otpSecond:{padding:15,flexDirection:"row",justifyContent:'center',letterSpacing:0.5},
    resendOtp:{color:Colors.button_color_1,letterSpacing:0.5}

  });
  

//export default OtpScreen;
const mapStateToProps = ({ user }) => ({
    userDetails: user.userDetails
});
  
const mapDispatchToProps = dispatch => ({
    // userLogin: (client, inputs) => dispatch(userLogin(client, inputs)),
    // userRegister: (client, inputs) => dispatch(userRegister(client, inputs)),
    // sendForgotPasswordMail: (client, inputs) => dispatch(sendForgotPasswordMail(client, inputs)),
    // skipUserLogin: () => dispatch(skipUserLogin()),
    storeLoginStatus: (input) => dispatch(storeLoginStatus(input)),
});

export default connect(mapStateToProps, mapDispatchToProps)(OtpScreen);