//import a libraries for making a component
import React from 'react';
import {
    View,
    TouchableOpacity,
    StyleSheet,
    Text,
    Dimensions,Image
} from 'react-native';
import { Icon } from 'react-native-elements';
import Colors from '../constants/Colors';

const CustomButton = ({name,onPress,buttonColor,buttonIcon,textColor})=> {
    return (
        <TouchableOpacity onPress={onPress} style={{height:45,width:'100%',backgroundColor:buttonColor ? buttonColor :'green',flexDirection:'column',justifyContent:'center',borderRadius:5,borderWidth:textColor ? 0.5 :0,borderColor:textColor ? textColor :'white'}}>
            <View style={{flexDirection:'row',justifyContent:'center'}}>
                {/* {buttonIcon?
                    <View style={{flex:0.3,flexDirection:"row",justifyContent:'center'}}>
                        {buttonIcon ? buttonIcon :null}
                    </View>:null    
                }
                <View style={{flex:1,flexDirection:"row",justifyContent:buttonIcon?'flex-start':'center'}}>
                    <Text style={{textAlign:'center',color:'white',letterSpacing:0.5,fontSize:16,fontWeight:'600'}}>{name}</Text>
                </View> */}


                {buttonIcon?
                <View style={{paddingRight:15}}>
                    {buttonIcon ? buttonIcon :null}
                </View>  
                :null}

                <View >
                    <Text style={{textAlign:'center',color:textColor ? textColor :'white',letterSpacing:0.5,fontSize:16,fontWeight:'600'}}>{name}</Text>
                </View>

                

            </View>
        </TouchableOpacity>
    )
}
const styles=StyleSheet.create({    
})
//make the component available to other parts of the app
export default CustomButton;
