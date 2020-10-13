import React, { Component } from 'react'
import { StyleSheet, Modal, Image, ScrollView, StatusBar,FlatList, TouchableOpacity, Platform, KeyboardAvoidingView, TextInput, Text, View, Dimensions } from 'react-native';
import { Input } from 'react-native-elements';
import Colors from '../constants/Colors';
import CustomHeader from '../components/CustomHeader';
import CustomButton from '../components/CustomButton';
//import CustomFullButton from '../components/customFullButton';
const searchbarContainerStyle = {
    backgroundColor:Colors.primary,
    borderTopColor:Colors.primary,
    borderBottomColor:Colors.primary,
    paddingLeft:20,
    paddingRight:20,
    paddingTop:0
}
export default class EditAccount extends Component {
   
    constructor(props) {
        super(props);
        this.state = {
            fullName: 'Akash Ray',
            email: 'akashray@email.com',
            phonenumber: '+91123456789'
        }
    }
    
    updateProfile(){
        if(this.state.fullName == '' || this.state.fullName == undefined || this.state.fullName == null){
            alert('Enter Full Name'); 
        }else if(this.state.email == '' || this.state.email == undefined || this.state.email == null){
            alert('Enter Email Address');
        }else{
            //Logic Write Here
            this.props.navigation.pop()
        }
        
    }
    render() {
        return (
            <View style={styles.maincontainer}>
            <View>
            <CustomHeader 
                title={'Edit account '} 
                headerBackground={Colors.baseColor}
                showBack={true} showCart={false} 
                searchbarContainerStyle={searchbarContainerStyle} 
                showSearchBar={false}
                cartClick={()=>{ this.props.navigation.navigate("LoginPageScreen") }}
                navigation={this.props.navigation}
            />
        </View>
                
                <View style={styles.inpBox}>
                    <ScrollView>
                        <View style={[styles.inputItem,{marginTop:12}]}>
                            <Text style={styles.inputLebel}>Full Name</Text>
                            <Input
                                onSubmitEditing={() => { this.email.focus() }}
                                placeholder='JOHN DOE'
                                inputStyle={styles.inputTextStyle}
                                inputContainerStyle={styles.inputContainerStyle}
                                containerStyle={styles.textInputStyle}
                                onChangeText={(text) => { this.setState({ fullName: text }) }}
                                value={this.state.fullName}
                                blurOnSubmit={true}
                            />
                        </View>
                        <View style={styles.inputItem}>
                            <Text style={styles.inputLebel}>Email Address</Text>
                            <Input
                                 ref={input => (this.email = input)}
                                onSubmitEditing={() => { this.mobile.focus() }}
                                placeholder='Eg: john@email.com'
                                inputStyle={styles.inputTextStyle}
                                inputContainerStyle={styles.inputContainerStyle}
                                containerStyle={styles.textInputStyle}
                                onChangeText={(text) => { this.setState({ email: text }) }}
                                value={this.state.email}
                                blurOnSubmit={true}
                            />
                        </View>
                        <View style={styles.inputItem}>
                            <Text style={styles.inputLebel}>Mobile Number</Text>
                            <Input
                                disabled
                                ref={input => (this.mobile = input)}
                                placeholder='Enter 10 Digit Mobile Number'
                                inputStyle={styles.inputTextStyle}
                                inputContainerStyle={styles.inputContainerStyle}
                                containerStyle={styles.textInputStyle}
                                onChangeText={(text) => { this.setState({ phonenumber: text }) }}
                                value={this.state.phonenumber}
                                blurOnSubmit={true}
                            />
                        </View>
                        <View style={{ paddingHorizontal: 20, flexDirection:'column', marginTop:60 }}>
                <CustomButton
                   name="Update Now"
                   onPress={()=>{this.props.navigation.navigate('ProfileScreen')}}
                   buttonColor={Colors.button_background_1}
                   textColor ={Colors.white}
                   // buttonIcon={<Icon name='rowing' color={'#FFF'} />}
                />
            
                </View>
                    </ScrollView>
                    
                </View>
                
                
            </View>
        )
    }
}
const styles = StyleSheet.create({
    maincontainer: {
        flex: 1,
        marginTop:StatusBar.currentHeight
    },
    inputItem: { marginTop:2 },
    inpBox: { flex: 10 },
    inputLebel: { paddingLeft: 12, color: Colors.DARK2, fontSize: 15 },
    btnContainer: {
        flex: 1.6,
        //borderTopColor: Colors.DARK2,
        //borderWidth: 1, 
        paddingBottom: 10,
        width: Dimensions.get('window').width,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputTextStyle: {
        fontSize: 16,
        marginLeft: 0,
        height: 32,
    },
    inputContainerStyle: {
        borderBottomWidth: 1,
        borderBottomColor: Colors.DARK2
    },
    inputContainerStyle: {
        borderBottomWidth: 1,
        borderBottomColor: Colors.DARK2
    },
})