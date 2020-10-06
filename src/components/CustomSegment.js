//import a libraries for making a component
import React from 'react';
import {
    View,
    TouchableOpacity,
    StyleSheet,
    Text
} from 'react-native';
import Colors from'../constants/Colors';
const CustomSegment = ({title,activeItem,itemClick})=> {
    return (
        <View style={styles.mainContainer}>
            <TouchableOpacity style={styles.touchableContainer} onPress={itemClick}>
                <View style={styles.textMain}>
                    <Text style={[styles.input_text,{fontWeight:activeItem == title ? '700' : '500'}]}>{title}</Text>
                </View>
                <View style={{backgroundColor:activeItem == title ? 'white' : Colors.baseColor,height:3}}></View>
                <View style={styles.lastView}></View>
            </TouchableOpacity>
            
        </View>

    )
}
const styles=StyleSheet.create({
    mainContainer:{flexDirection:'column',flex:1},
    touchableContainer:{flex:1,minHeight:40},
    textMain:{backgroundColor:Colors.baseColor},
    input_text:{
        padding:10,textAlign:'center',
        fontSize:12,letterSpacing:0.5,
        color:'white'
    },
    lastView:{backgroundColor:Colors.baseColor,height:1}

})
export default CustomSegment;