import React from 'react';
import {
    TouchableOpacity,
    View,
    TextInput,
    Dimensions,
    Text
  } from 'react-native';

//make a compontent
const CouponTextBox = ({placeholderText,value, onChangeText,editable,placeholderTextColor,autoCapitalize,applyBtnText,applycoupon}) =>{
   return (
    <View style={styles.mainContainer}>
        <TextInput 
            style={styles.textInput}
            underlineColorAndroid = "transparent"
            placeholder = {placeholderText}
            placeholderTextColor = {placeholderTextColor}
            autoCapitalize = {autoCapitalize}
            value={value}
            editable={editable}
            onChangeText={onChangeText}
        />

        <TouchableOpacity onPress={applycoupon}>
            <Text style={[styles.appyBtnText,{color:value ==''?'grey':'blue'}]}>{applyBtnText}</Text>
        </TouchableOpacity>
</View>
   );

};

const styles = {
    appyBtnText:{
        fontSize:16,
    },
    mainContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        borderRadius:6,
        alignItems:'center',
        borderColor: 'gray',
        borderWidth: 1,
        paddingHorizontal:8
    },
    textInput:{
        height: 50,
        width:'80%',
        fontSize:16,
        fontWeight:'300'
    }
    
}

export default CouponTextBox;
