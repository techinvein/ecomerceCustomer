//import a libraries for making a component
import React from 'react';
import {
    View,
    TouchableOpacity,
    StyleSheet,
    Text,
    Dimensions,Image
} from 'react-native';
const defaultwidth = Dimensions.get('window').width/2.1;
const defaultHeight = Dimensions.get('window').width/3;

const CustomImage = ({imageHeight,imageWidth,imageURL,imageText,onPress})=> {
    console.log(imageHeight,imageWidth)
    return (
        <TouchableOpacity 
            style={[styles.mainContainer,{height:imageHeight ? imageHeight : defaultHeight,width:imageWidth ? imageWidth : defaultwidth}]}
            onPress={onPress}
        >
            <View>
                <Image
                    style={{width:imageWidth?imageWidth :'100%',height:imageHeight?imageHeight :'100%'}}
                    // source={{
                    //     uri: imageURL,
                    // }}
                    source={imageURL}
                    resizeMode="cover"
                />
                {imageText ?
                    <View style={[styles.opacityView,{width:imageWidth?imageWidth :'100%',height:imageHeight?imageHeight :'100%'}]}>
                    </View> 
                :null
                }

                {imageText ?
                    <View style={[styles.opacityTextView,{width:imageWidth?imageWidth :'100%',height:imageHeight?imageHeight :'100%',}]}>
                        <Text style={styles.opacityText}>{imageText}</Text>
                    </View> 
                :null
                }

            </View>

        </TouchableOpacity>
    )
}
const styles=StyleSheet.create({
    mainContainer:{},
    opacityView:{
        position:'absolute',
        backgroundColor:'#000',
        opacity:0.5,
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
        fontWeight:'bold',
        fontSize:16
    }
    
})
//make the component available to other parts of the app
export default CustomImage;
