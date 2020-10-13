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

const CustomProduct = ({imageHeight,imageWidth,imageURL,clickAddtoCart,removeProduct,addProduct,itemCount,imageClick})=> {
    console.log("itemCount :", itemCount)
    return (
        <View 
            style={[styles.mainContainer,{width:imageWidth ? imageWidth : defaultwidth}]}
        >
        <TouchableOpacity  onPress={ imageClick }>
            <Image
                style={{borderTopLeftRadius:6,borderTopRightRadius:6,width:imageWidth?imageWidth :defaultwidth,height:imageHeight?imageHeight :defaultHeight,}}
                // source={{
                //     uri: imageURL,
                // }}
                source={imageURL}
                resizeMode="cover"
            />
            </TouchableOpacity>
            <View style={{padding:3,paddingHorizontal:6}}>
                <Text style={{fontSize:13,}}>Veg Chowmin</Text>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <Text style={{fontSize:13,}}>Rs. 40</Text>
                    <View style={{flexDirection:'column',justifyContent:'center'}}>
                        <Text style={{opacity:0.4,fontSize:12,paddingRight:15,textDecorationLine: 'line-through'}}>Rs. 150</Text>
                    </View>
                    
                </View>
                <Text style={{fontSize:13,color:Colors.button_color_1,paddingTop:5}}>You save ₹30</Text>
            </View>
            
            <View style={{padding:3,flexDirection:'row',justifyContent:'center'}}>
                {!itemCount || itemCount  < 1 ?
                    <TouchableOpacity 
                    onPress={clickAddtoCart}
                    style={{width:'100%',paddingTop:5,paddingLeft:10,paddingRight:10,marginBottom:5}}
                    >
                        <View style={{backgroundColor:'green',borderRadius:5}}>
                            <Text style={{fontSize:11,padding:7,color:'white',textAlign:'center'}}>Add to Cart </Text>
                        </View>
                    </TouchableOpacity>
                :
                
                    <View style={{width:'100%',paddingTop:5,paddingLeft:10,paddingRight:10,marginBottom:5,flexDirection:'row',justifyContent:"space-between"}}>
                        <TouchableOpacity 
                        onPress={removeProduct}
                        style={{flex:1,backgroundColor:'green',flexDirection:'column',justifyContent:'center',borderTopLeftRadius:5,borderBottomLeftRadius:5}}>
                            <Text style={{textAlign:'center',paddingTop:4,paddingBottom:3,fontSize:15,fontSize:16,color:'#FFF',fontWeight:'bold'}}>-</Text>
                        </TouchableOpacity>
                        <View style={{flex:1,backgroundColor:'white',flexDirection:'column',justifyContent:'center'}}>
                            <Text style={{textAlign:'center'}}>{itemCount}</Text>
                        </View>
                        <TouchableOpacity 
                        onPress={addProduct}
                        style={{flex:1,backgroundColor:'green',flexDirection:'column',justifyContent:'center',borderTopRightRadius:5,borderBottomRightRadius:5}}>
                            <Text style={{textAlign:'center',paddingTop:4,paddingBottom:3,fontSize:15,fontSize:16,color:'#FFF',fontWeight:'bold'}}>+</Text>
                        </TouchableOpacity>

                    </View>

                }




            </View>

        </View>


        // </TouchableOpacity>
    )
}
const styles=StyleSheet.create({
    mainContainer:{
        flexDirection:'column',
        //borderWidth:1,
        paddingTop:0,
        backgroundColor:'#DEE1E6',
        borderRadius:6
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
export default CustomProduct;
