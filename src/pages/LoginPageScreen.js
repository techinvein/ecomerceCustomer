import React, { Component, useState,useEffect  } from 'react'
import { KeyboardAvoidingView, ScrollView, StatusBar, StyleSheet, Text, View,FlatList,Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements';
import Colors from '../constants/Colors';
import { Dimensions } from 'react-native';
import EditText from '../components/EditText';
import CustomButton from '../components/CustomButton';

const defaultwidth = Dimensions.get('window').width;

// const HomeScreen = () => {
const searchbarContainerStyle = {
    backgroundColor:Colors.baseColor,borderTopColor:Colors.baseColor,
    borderBottomColor:Colors.baseColor,paddingLeft:20,
    paddingRight:20,paddingTop:0
}

// class ProductListScreen extends React.Component {
class LoginPageScreen extends Component {

    constructor(props){
        super(props);
        this.state={
            repeateItem:[
                {title:'Biryani', id: '1', image: require('../assets/images/food1.jpg'),  count:0 },
                {title:'Chiness', id: '2', image: require('../assets/images/food2.jpg'), count:0 },
                {title:'Cakes & Deserts', id: '3', image: require('../assets/images/food3.jpg'),  count:0 },
                {title:'Burgers', id: '4', image: require('../assets/images/food4.jpg'), count:0 },
                {title:'South indian', id: '5', image: require('../assets/images/food1.jpg'),  count:0 },
                {title:'Pizza', id: '6', image: require('../assets/images/food3.jpg'), count:0 },
                {title:'North Indian', id: '7', image: require('../assets/images/food1.jpg'),  count:0 },
                {title:'Rolls & Sandwitch', id: '8', image: require('../assets/images/food2.jpg'), count:0 },
                {title:'Snacks', id: '9', image: require('../assets/images/food3.jpg'),  count:0 },
                {title:'Ice Cream', id: '10', image: require('../assets/images/food4.jpg'), count:0 }
            ],
            offersItem:[
                { id: '1', image: require('../assets/images/offer1.jpg'),  count:0 },
                { id: '2', image: require('../assets/images/offer2.jpg'), count:0 },
                { id: '3', image: require('../assets/images/offer3.jpg'),  count:0 }
            ],
            segmentItem:[
                {name:"ALL"},{name:"Blended Oil"},{name:"Edible Oil"},{name:"Groceries"}
            ],
            selected_segment_item:"ALL"

        }
    }


render(){
    return (
        <KeyboardAvoidingView style={styles.container}>
            {/* <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#00BCD4" translucent = {true}/> */}
            <View style={[styles.mainView]}>
                <View style={{flex:1,justifyContent:'center',padding:15,paddingLeft:20,paddingRight:20}}>
                    <View>
                        <Text style={{fontSize:20,fontWeight:'700',letterSpacing:0.4}}>WELCOME TO</Text>
                    </View>
                    <View >
                        <Image
                            style={{width:130,height:80}}
                            source={ require('../assets/images/Fastfooder.png')}
                            resizeMode="contain"
                        />
                    </View>
                </View>

                <View style={{flex:1,padding:15,paddingLeft:20,paddingRight:20,justifyContent:'center'}}>
                    {/* <Text>Loream ipsum is simply dummy of the industry</Text> */}
                    <View style={{paddingBottom:15}}>
                        <EditText
                            icon={
                                <Icon name='mail-outline' type="ionicon" color={Colors.border} />
                            }
                            type="email"
                            // style={styles.inputMargin}
                            // value={this.state.email}
                            // onChange={(text) => this.setState({email:text})}
                            placeholder="Enter your Email"
                         />
                    </View>
                    <View style={{paddingBottom:15}}>
                        <EditText
                            icon={
                                <Icon name='lock-open-outline' type="ionicon" color={Colors.border} />
                            }
                            type="password"
                            // style={styles.inputMargin}
                            // value={this.state.password}
                            // onChange={(text) => this.setState({password:text})}
                            placeholder="Enter your Password"
                        
                        />
                    </View>
                    <View>
                        {/* <TouchableOpacity style={{height:45,width:'100%',backgroundColor:'green',flexDirection:'column',justifyContent:'center',borderRadius:5}}>
                            <Text style={{textAlign:'center',color:'white',letterSpacing:0.5,fontSize:16,fontWeight:'600'}}>Login</Text>
                        </TouchableOpacity> */}
                        <CustomButton
                            name="Login"
                            onPress={()=>{this.props.navigation.navigate("OtpScreen")}}
                            buttonColor="green"
                         />
                    </View>
                </View>


                <View style={{flex:1,justifyContent:'space-evenly'}}>
                    <View >
                        <Text style={{textAlign:'center',letterSpacing:0.5,color:Colors.button_color_1}}>Sign in latter</Text>
                    </View>
                    <View >
                        <Text style={{textAlign:'center',letterSpacing:0.5}}>Forgot password</Text>
                    </View>
                </View>
                <View style={{flex:1,justifyContent:'space-evenly',paddingLeft:20,paddingRight:20}}>
                    <View >
                        <Text style={{textAlign:'center',letterSpacing:0.5}}>Don't have an Account?</Text>
                    </View>
                    <View>
                        {/* <TouchableOpacity style={{height:45,width:'100%',backgroundColor:Colors.text_seconday_color,flexDirection:'column',justifyContent:'center',borderRadius:5}}>
                            <Text style={{textAlign:'center',color:'white',letterSpacing:0.5,fontSize:16,fontWeight:'600'}}>Registration</Text>
                        </TouchableOpacity> */}
                        <CustomButton
                            name="Registration"
                            onPress={()=>{}}
                            buttonColor={Colors.text_seconday_color}
                         />
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

  });
  

export default LoginPageScreen;