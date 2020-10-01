import React, { Component } from 'react'
import { Button, Text, View } from 'react-native'
import { connect } from 'react-redux';
import { storeLoginStatus } from '../redux/actions/userAuth';
import styles from '../styles/login'

const LoginScreen = (props) => {

    const loginPress = async () => {
        console.log("pressed");
        props.storeLoginStatus(true);
    }

    const skipPress = async () => {
        console.log("pressed");
        props.storeLoginStatus({skip: true});
    }

    return (
        <View style={styles.container}>
            <Button onPress={loginPress} title="Login"/>
            <Button onPress={skipPress} title="Skip"/>
        </View>
    )
}

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

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);