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
const defaultwidth = Dimensions.get('window').width/4.3;
const defaultHeight = Dimensions.get('window').width/3;

const CustomCart_Item = ({
    imageURL,imageHeight,imageWidth,
    itemName,itemPrice,saveAmount,itemDiscount,
    enableCart,itemCount

})=> {
    return (
        <View style={{flexDirection:'row',justifyContent:'space-between',minHeight:90}}>
            <View style={{flex:1,height:'100%'}}>
                <Image
                    style={{width:imageWidth?imageWidth :'100%',height:imageHeight?imageHeight :defaultwidth}}
                    // source={{
                    //     uri: imageURL,
                    // }}
                    source={imageURL}
                    resizeMode="cover"
                />
            </View>
            <View style={{flex:2,height:'100%'}}>
                <View style={{padding:7,paddingTop:0}}>

                    <Text style={{paddingBottom:5,fontSize:14,fontWeight:'700',letterSpacing:0.5}}>{itemName ? itemName :''}</Text>
                    
                    {enableCart ?
                        <View>
                            <View style={{flexDirection:'row',paddingBottom:5}}>
                                <Text style={{fontSize:13,fontWeight:'bold',paddingRight:20,color:Colors.button_background_1}}>
                                    {itemPrice ? 'RS. '+ itemPrice : ""}
                                </Text>
                                {saveAmount ?
                                    <View style={{flexDirection:'column',justifyContent:'center'}}>
                                        <Text style={{opacity:0.4,fontSize:12,paddingRight:7}}>{saveAmount ? 'RS. '+ saveAmount : ""}</Text>
                                        <Text style={{position:'absolute',textAlign:"center",width:'90%'}}>--------</Text>
                                    </View>  
                                :null}
                            </View>
                            <Text style={{fontSize:12,fontWeight:'bold',letterSpacing:0.5,color:Colors.baseColor}}>{itemDiscount ? 'You save '+ itemDiscount : ""}</Text>
                        </View>
                    :
                        <Text style={{fontSize:12,fontWeight:'600',letterSpacing:0.5,color:Colors.blackColor}}>Quantity - {itemCount?itemCount : 0}</Text>
                    }
                    

                    
                </View>

            </View>
            <View style={{flex:1.3,height:'100%',}}>
                {enableCart ==true ?
                    <View style={{width:'100%',paddingTop:5,paddingLeft:10,paddingRight:10,marginBottom:5,flexDirection:'row',justifyContent:"space-between"}}>
                        <TouchableOpacity 
                        // onPress={removeProduct}
                        style={{flex:1,backgroundColor:'green',flexDirection:'column',justifyContent:'center',borderTopLeftRadius:5,borderBottomLeftRadius:5}}>
                            <Text style={{textAlign:'center',paddingTop:4,paddingBottom:3,fontSize:15,fontSize:16,color:'#FFF',fontWeight:'bold'}}>-</Text>
                        </TouchableOpacity>
                        <View style={{flex:1,backgroundColor:'white',flexDirection:'column',justifyContent:'center'}}>
                            <Text style={{textAlign:'center'}}>{itemCount?itemCount : 0}</Text>
                        </View>
                        <TouchableOpacity 
                        // onPress={addProduct}
                        style={{flex:1,backgroundColor:'green',flexDirection:'column',justifyContent:'center',borderTopRightRadius:5,borderBottomRightRadius:5}}>
                            <Text style={{textAlign:'center',paddingTop:4,paddingBottom:3,fontSize:15,fontSize:16,color:'#FFF',fontWeight:'bold'}}>+</Text>
                        </TouchableOpacity>
                    </View>      
                :null}
            </View>
        </View>
    )
}
const styles=StyleSheet.create({
    imageMain:{borderTopLeftRadius:10,borderTopRightRadius:10},
    textMain:{
        backgroundColor:Colors.button_background_1,
        padding:7,
        paddingBottom:10,
        flexDirection:'row',
        justifyContent:'center',
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10
    },
    itemTitle:{
        color:Colors.whiteColor,
        fontWeight:'600',
        letterSpacing:0.5
    }
    
})
//make the component available to other parts of the app
export default CustomCart_Item;
