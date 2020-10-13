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
const defaultwidth = Dimensions.get('window').width/2.1;
const defaultHeight = Dimensions.get('window').width/3;

const CategoryImage = ({imageHeight,imageWidth,imageURL,imageText,onPress})=> {
    console.log(imageHeight,imageWidth)
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={{height:imageHeight ? imageHeight : defaultHeight,width:imageWidth ? imageWidth : defaultwidth}}>
                <Image
                    style={[styles.imageMain,{width:imageWidth?imageWidth :'100%',height:imageHeight?imageHeight :'100%'}]}
                    // source={{
                    //     uri: imageURL,
                    // }}
                    source={imageURL}
                    resizeMode="cover"
                />
            </View>
            <View style={styles.textMain} >
                <Text style={styles.itemTitle}>{imageText}</Text>
            </View>
        </TouchableOpacity>
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
export default CategoryImage;
