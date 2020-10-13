import React, { Component, useState,useEffect  } from 'react'
import { KeyboardAvoidingView, ScrollView, StatusBar, StyleSheet, Text, View,FlatList,Image } from 'react-native'
import { Icon } from 'react-native-elements';
import CustomHeader from '../components/CustomHeader';
// import styles from '../styles/home'
import Colors from '../constants/Colors';
import CustomImage from '../components/CustomImage';
import { Dimensions } from 'react-native';
import CustomProduct from '../components/CustomProduct';
import CustomScrollSegment from '../components/CustomScrollSegment';
import CustomProductTwo from '../components/CustomProductTwo';
import CategoryImage from '../components/CategoryImage';
import CustomCart_Item from '../components/CustomCart_Item';
import { TouchableOpacity } from 'react-native-gesture-handler';
import CustomOrderStatus from '../components/CustomOrderStatus';
const defaultwidth = Dimensions.get('window').width;

const searchbarContainerStyle = {
    backgroundColor:Colors.baseColor,borderTopColor:Colors.baseColor,
    borderBottomColor:Colors.baseColor,paddingLeft:20,
    paddingRight:20,paddingTop:0
}

class OrderDetailsScreen extends Component {

    constructor(props){
        super(props);
        this.state={
            repeateItem:[
                { id: '1', image: require('../assets/images/food1.jpg'),  count:0 },
                { id: '2', image: require('../assets/images/food2.jpg'), count:0 },
                { id: '3', image: require('../assets/images/food3.jpg'),  count:0 },
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


    promotioncontent=({item,index}) => (
        <View style={{marginBottom:15}}>
            {/* <View style={{flex:1,marginBottom:10}}> */}
                <CustomCart_Item
                    imageURL={item.image} imageHeight={null}
                    imageWidth={null}
                    itemName={"Special chicken biryani"}
                    itemPrice={120}
                    saveAmount={60}
                    itemDiscount={50}
                    enableCart={false}
                    itemCount={5}
                    navigation={this.props.navigation}
                />
                {/* <Text style={{textAlign:'right',paddingRight:20,color:Colors.button_color_1,fontSize:13,fontWeight:'700',letterSpacing:0.5}}>+1 item more</Text>
            </View> */}
        </View>

    )


    render(){
        return (
            <KeyboardAvoidingView style={styles.container}>
                {/* <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#00BCD4" translucent = {true}/> */}
                <View style={[styles.mainView]}>
                    <View>
                        <CustomHeader 
                            title={'Order Details'} 
                            headerBackground={Colors.baseColor}
                            day="1 day ago" showBack={true} showCart={true} 
                            searchbarContainerStyle={searchbarContainerStyle} 
                            showSearchBar={false}
                            backClick={()=>{}}
                            menuClick={()=>{}}
                            cartClick={()=>{}}
                            navigation={this.props.navigation}
                        />
                    </View>
                    <View>
                        <View style={styles.orderDetailsContainer}>
                            <View style={styles.orderDetailsSegment}>
                                <Text style={styles.orderDetails}>Order Details</Text>
                                <Text style={styles.orderStatus}>Accepted</Text>
                            </View>
                            <View style={styles.orderDetailsSegment}>
                                <Text style={styles.trackButton}>Track now</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{flex:1}}>
                        <ScrollView>
                            <View>
                                <View style={styles.orderDetailsContainer}>
                                    <View style={{flexDirection:'row'}}>
                                        <View style={{paddingRight:10}}>
                                            <Image
                                                style={{width:45,height:45,borderRadius:45}}
                                                // source={itemImageURL}
                                                source={require('../assets/images/product_details.jpg')}
                                                resizeMode="cover"
                                            />
                                        </View>
                                        <View style={styles.orderDetailsSegment}>
                                            <Text style={[styles.orderDetails],{color:'#000',fontWeight:'700'}}>Akash Singha</Text>
                                            <Text style={[styles.orderStatus],{fontSize:10,paddingTop:1}}>5 * overall rating</Text>
                                        </View>
                                    </View>
                                    <View style={styles.orderDetailsSegment}>
                                        <Text style={[styles.callNow]}>Call now</Text>
                                    </View>
                                </View>
                            </View>

                            <View style={{padding:15,backgroundColor:'white',marginBottom:10}}>
                                <Text style={{fontWeight:'700',letterSpacing:0.5}}>Order Details</Text>
                                <View style={styles.orderIdContainer}>
                                    <Text style={{fontSize:12,letterSpacing:0.5}}>Order Id</Text>
                                    <Text style={{fontSize:12,letterSpacing:0.5}}>#csdnj2</Text>
                                </View>
                                <View style={styles.orderIdContainer}>
                                    <Text style={{fontSize:12,letterSpacing:0.5}}>Payment Mode</Text>
                                    <Text style={{fontSize:12,letterSpacing:0.5}}>COD</Text>
                                </View>
                                <View style={styles.orderIdContainer}>
                                    <Text style={{fontSize:12,letterSpacing:0.5}}>Payment Status</Text>
                                    <Text style={{fontSize:12,letterSpacing:0.5}}>Pending</Text>
                                </View>
                                <View style={styles.orderIdContainer}>
                                    <Text style={{fontSize:13,letterSpacing:0.5}}>Expected Delivery</Text>
                                    <Text style={{fontSize:13,letterSpacing:0.5}}>30/08/2020</Text>
                                </View>
                            </View>
                        
                            <View style={{padding:15,backgroundColor:'white',marginBottom:10}}>
                                <Text style={{fontWeight:'700',letterSpacing:0.5}}>Billing Details</Text>
                                <View style={[styles.orderIdContainer,{borderBottomWidth:0}]}>
                                    <Text style={{fontSize:13,letterSpacing:0.5}}>MRP Total</Text>
                                    <Text style={{fontSize:13,letterSpacing:0.5}}>525.00</Text>
                                </View>
                                <View style={[styles.orderIdContainer,{borderBottomWidth:0}]}>
                                    <Text style={{fontSize:13,letterSpacing:0.5}}>Delivery fee</Text>
                                    <Text style={{fontSize:13,letterSpacing:0.5}}>20</Text>
                                </View>
                                <View style={styles.orderIdContainer}>
                                    <View>
                                        <Text style={{fontSize:12,letterSpacing:0.5}}>Coupon Discount</Text>
                                        <Text style={{fontSize:10,paddingTop:3,color:Colors.baseColor}}>FIRST50 applied</Text>
                                    </View>
                                    <View style={{flexDirection:'column',justifyContent:'center'}}>
                                        <Text style={{fontSize:12,letterSpacing:0.5}}>-25.00</Text>
                                    </View>
                                </View>
                                <View style={styles.orderIdContainer}>
                                    <View>
                                        <Text style={{fontSize:13,letterSpacing:0.5,fontWeight:'700'}}>Total Amount</Text>
                                        <Text style={{fontSize:11,paddingTop:5,color:Colors.button_color_1}}>You save $50 in this order</Text>
                                    </View>
                                    <View style={{flexDirection:'column',justifyContent:'center'}}>
                                        <Text style={{fontSize:13,letterSpacing:0.5,fontWeight:'700'}}>525.00</Text>
                                    </View>
                                </View>
                            </View>
                        
                            <View style={{padding:15,backgroundColor:'white',marginBottom:10}}>
                                <FlatList
                                // horizontal={true}
                                    data={this.state.repeateItem}
                                    numColumns={1}
                                    renderItem={this.promotioncontent}
                                    showsHorizontalScrollIndicator={false}
                                    // extraData={this.state}
                                    keyExtractor={(item, index) => index.toString()}
                                    // contentContainerStyle={{justifyContent:"space-evenly",flexDirection:"row",width:Dimensions.get('window').width}}
                                />                            
                            </View>
                            <View style={{backgroundColor:'white',marginBottom:10}}>
                                <View style={styles.addressContainer}>
                                    <Text style={styles.shipingAdd}>Shipping Address</Text>
                                    <View style={{paddingTop:10}}>
                                        <Text style={[styles.addressText],{fontSize:16}}>ARGHYADEEP SINHA</Text>
                                        <Text style={[styles.addressText],{}}>Boisakhi pizza, 77/12 Elgin Road</Text>
                                        <Text style={[styles.addressText],{}}>Kolkata west bengal, 700159</Text>
                                        <Text style={[styles.addressText],{}}>+91123456789</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={{backgroundColor:'white',marginBottom:10}}>
                                <View style={{flexDirection:'row',justifyContent:'center',paddingTop:15,paddingBottom:15}}>
                                    <Text style={{fontSize:12,fontWeight:'600',letterSpacing:0.5}}>Need payment receipt? </Text>
                                    <Text style={{fontSize:12,fontWeight:'600',letterSpacing:0.5,textDecorationLine: 'underline',color:Colors.danger}}>Download Now</Text>
                                </View>
                            </View>
                            <View style={{backgroundColor:'#FFF'}}>
                                <View style={{flex:1,flexDirection:'row',justifyContent:'space-evenly'}}>
                                    <View onPress={()=>{alert("csdcbds")}}  style={{flex:1,backgroundColor:'black',height:40,margin:10,justifyContent:'center',borderRadius:10}}>
                                        <TouchableOpacity onPress={()=>{alert("Contact us clicked")}}
                                        style={{height:40,flexDirection:'column',width:'100%',justifyContent:'center'}}>
                                            <Text style={{color:'white',textAlign:'center'}}>Cancel Order</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{flex:1,backgroundColor:'green',height:40,margin:10,justifyContent:'center',borderRadius:10}}>
                                        <TouchableOpacity onPress={()=>{this.props.navigation.navigate("ProfileScreen")}}
                                        style={{height:40,flexDirection:'column',width:'100%',justifyContent:'center'}}>
                                            <Text style={{color:'white',textAlign:'center'}}>Rating us</Text>
                                        </TouchableOpacity>
                                        
                                    </View>
                                </View>
                            </View>

                        </ScrollView>
                    </View>


                </View>
            </KeyboardAvoidingView>
        )
    }

}

const styles = StyleSheet.create({
    container: { 
        flex: 1,
        marginTop:StatusBar.currentHeight,
        backgroundColor:Colors.background_1
    },
    mainView:{ flex:1,flexDirection:"column"},
    orderDetailsContainer:{
        backgroundColor:'#FFF',
        marginBottom:10,
        flexDirection:'row',
        justifyContent:'space-between',
        paddingLeft:15,
        paddingRight:15,
        padding:10
    },
    orderDetailsSegment:{flexDirection:'column',justifyContent:'center'},
    orderDetails:{fontWeight:'700',letterSpacing:0.5,color:Colors.border},
    orderStatus:{fontWeight:'600',letterSpacing:0.5,fontSize:12,paddingTop:3},
    trackButton:{
        backgroundColor:Colors.button_color_1,
        paddingLeft:10,
        paddingRight:10,
        padding:5,
        color:'#fff',
        borderRadius:5,
        fontSize:12,
        letterSpacing:0.5
    },
    callNow:{
        backgroundColor:Colors.text_seconday_color,
        paddingLeft:10,
        paddingRight:10,
        padding:5,
        color:'#fff',
        borderRadius:5,
        fontSize:12,
        letterSpacing:0.5
    },
    orderIdContainer:{
        flexDirection:'row',justifyContent:'space-between',
        paddingTop:10,paddingBottom:10,borderBottomWidth:0.4,borderBottomColor:Colors.border
    },
    addressContainer:{padding:20,backgroundColor:'white'},
    shipingAdd:{fontWeight:'700',letterSpacing:0.5,fontSize:18},
    addressText:{fontWeight:'700',letterSpacing:0.5,marginBottom:5}



  });
  

export default OrderDetailsScreen;