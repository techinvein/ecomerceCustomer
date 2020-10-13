//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,TouchableOpacity,Image,StatusBar,ScrollView, TextInput } from 'react-native';
import CouponTextBox from '../components/CouponTextBox';
import { Icon } from 'react-native-elements';
import CustomHeader from '../components/CustomHeader';
import { Dimensions } from 'react-native';
import Colors from '../constants/Colors';
//import { Ionicons } from '@expo/vector-icons';
//import { NavigationActions } from 'react-navigation';
// create a component
const searchbarContainerStyle = {
    backgroundColor: Colors.baseColor, borderTopColor: Colors.baseColor,
    borderBottomColor: Colors.baseColor, paddingLeft: 20,
    paddingRight: 20, paddingTop: 0
}

export default class  Coupons extends Component {

    constructor(props){
        super(props);
        this.state={
            couponCode:"",
            viewDetails:false
        }; 
    }
    applyCoupon(){
        this.props.navigation.replace('checkout',{ couponData: 'Lucy' });
    }
    viewDetails(){
      if(this.state.viewDetails == false){
          this.setState({viewDetails:true})
      }else{
        this.setState({viewDetails:false}) 
      }
    }
    render() {
        return (
            <View style={styles.container}>
             <View>
                        <CustomHeader
                            title={'Promos and Offers '}
                            headerBackground={Colors.baseColor}
                            showBack={true} showCart={true}
                            searchbarContainerStyle={searchbarContainerStyle}
                            showSearchBar={false}
                            showBack={true} showCart={false}
                            cartClick={() => { this.props.navigation.navigate("ProductDetailsScreen") }}
                            navigation={this.props.navigation}
                        />
                    </View>
               {/* <View style={styles.sectionone}>
                        <CouponTextBox 
                            placeholderText = "Enter Coupon Code"
                            placeholderTextColor = "grey"
                            autoCapitalize = "characters"
                            onChangeText={(text) => {this.setState({couponCode:text})}}
                            value={this.state.couponCode}
                            editable={true}
                            applycoupon={()=>{this.applyCoupon()}}
                            applyBtnText="APPLY"
                        /> 
               </View> */}
               <View style={styles.sectiontwo}>
                 <View style={{flexDirection:'column',justifyContent:'flex-start',paddingTop:15,paddingHorizontal:12}}>
                     <Text style={{fontSize:18,fontWeight:'bold'}}>Payment Offers</Text>
                     <ScrollView showsVerticalScrollIndicator={false}>

                        
                        <TouchableOpacity onPress={() => {this.props.navigation.goBack()}} style={{borderBottomWidth:1,borderBottomColor:'#cccc',flexDirection:'row',paddingBottom:15,marginTop:15}}>
                            <View style={{flex:.8,backgroundColor:'#fff',justifyContent:'flex-start'}}>
                                <Image
                                style={{height:50,width:50,}}
                                source={require('../assets/images/amazone.png')}
                                />
                            </View>
                            <View style={{flex:4,flexDirection:'column',justifyContent:'flex-start',paddingHorizontal:8}}>
                                <Text style={{fontSize:15}}>Win Rs.10 to Rs.250 | Use code 'NETAJI'</Text>
                                <Text style={{color:'grey',fontSize:14,marginTop:4}}>Win ₹10 to ₹250 on Amazone pay</Text>
                                <View style={{marginTop:4,flexDirection:'column'}}>
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{color:'blue',fontSize:14}}>View T&C</Text>
                                        <TouchableOpacity onPress={()=>{this.viewDetails()}}>
                                        <Icon name={this.state.viewDetails?'chevron-up-circle-outline':'chevron-down-circle-outline'} type="ionicon"  color ={Colors.text_deault_color} size={20} style={{marginLeft:5,marginTop:0,}}/>
                                        </TouchableOpacity>
                                    </View>
                                    {this.state.viewDetails?
                                    <View style={{flexDirection:'column',paddingTop:3}}>
                                        <Text style={{color:'grey',fontSize:12,paddingBottom:3}}>• Valid for all User</Text>
                                        <Text style={{color:'grey',fontSize:12,paddingBottom:3}}>• Valid One per User</Text>
                                        <Text style={{color:'grey',fontSize:12,paddingBottom:3}}>• Offer valid on minimum transaction of Rs.100</Text>
                                        <Text style={{color:'grey',fontSize:12,paddingBottom:3}}>• Valid for all User</Text>
                                        <Text style={{color:'grey',fontSize:12,paddingBottom:3}}>• Valid One per User</Text>
                                        <Text style={{color:'grey',fontSize:12,paddingBottom:3}}>• Offer valid on minimum transaction of Rs.100</Text>
                                    </View>:null}
                                </View>
                            </View>
                        </TouchableOpacity>
                     </ScrollView>
                 </View>

               </View>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ccc',
        marginTop: StatusBar.currentHeight,
    },
    sectionone:{
        flex:1,
        backgroundColor:'#fff',
        paddingHorizontal:12,
        paddingTop:12
    },
    sectiontwo:{
        flex:8,
        backgroundColor:'#fff',
        //marginTop:8
    },
   
});

//make this component available to the app
//export default CouponScreenPage;
