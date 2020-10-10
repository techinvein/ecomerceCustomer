//import a libraries for making a component
import React from 'react';
import {
    View,
    TouchableOpacity,
    StyleSheet,
    Text,
    Dimensions,Image
} from 'react-native';
import Colors from '../constants/Colors';
const defaultwidth = Dimensions.get('window').width/2.7;
const defaultHeight = Dimensions.get('window').width/3.4;

const CustomOrderStatus = ({orderStatus,orderId,deliveryDate,orderTotal})=> {
    return (
        <View>
        <View style={{backgroundColor:'#FFF',marginBottom:10,borderBottomWidth:0.2}}>
                {/* Order Id details */}
                <View style={{padding:15,paddingTop:14,paddingBottom:14}}>
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                        <Text style={{fontSize:14,letterSpacing:0.5,fontWeight:'600',}}>
                            Order Status
                        </Text>
                        <Text style={{fontSize:14,letterSpacing:0.5,fontWeight:'600',}}>
                            Order ID
                        </Text>
                    </View>

                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                        <View style={{flexDirection:'column',justifyContent:'center',paddingTop:5}}>
                            <Text style={{padding:5,paddingLeft:12,paddingRight:12,borderRadius:10, backgroundColor:Colors.button_background_1,color:Colors.whiteColor,fontSize:11,letterSpacing:0.5,fontWeight:'600'}}>

                                {orderStatus ?orderStatus :''}

                            </Text>
                        </View>
                        <View style={{flexDirection:'column',justifyContent:'center'}}>
                            <Text style={{fontSize:11,letterSpacing:0.5,fontWeight:'700'}}>
                                {orderId ?orderId :''}
                            </Text>
                        </View>
                    </View>
                </View>

                {/*Delivery details */}
                <View style={{padding:15,paddingTop:0,paddingBottom:14}}>
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                        <Text style={{fontSize:14,letterSpacing:0.5,fontWeight:'600',}}>
                            Expected delivery
                        </Text>
                        <Text style={{fontSize:14,letterSpacing:0.5,fontWeight:'600',}}>
                            Order Total
                        </Text>
                    </View>

                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                        <View style={{flexDirection:'column',justifyContent:'center'}}>
                            <Text style={{fontSize:11,letterSpacing:0.5,fontWeight:'700'}}>
                                {deliveryDate ?deliveryDate :''}
                            </Text>
                        </View>
                        <View style={{flexDirection:'column',justifyContent:'center'}}>
                            <Text style={{fontSize:11,letterSpacing:0.5,fontWeight:'700'}}>
                                {orderTotal ?orderTotal :''}
                            </Text>
                        </View>
                    </View>
                </View>


            </View>

        </View>
    )
}
const styles=StyleSheet.create({
    mainContainer:{
        flexDirection:'column',
        //borderWidth:1,
        paddingTop:0,
        backgroundColor:'#DEE1E6'
    },
    opacityView:{
        position:'absolute',
        backgroundColor:'#000',
        opacity:0.3,
        flexDirection:'column',
        justifyContent:'center'
    },
    opacityTextView:{
        position:'absolute',
        flexDirection:'column',
        justifyContent:'center'
    },
    opacityText:{
        textAlign:'center',
        padding:15,
        color:'#FFF',
        fontWeight:'bold'
    }
    
})
//make the component available to other parts of the app
export default CustomOrderStatus;
