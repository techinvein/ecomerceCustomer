//import a libraries for making a component
import React from 'react';
import {
    View,
    TouchableOpacity,
    StyleSheet,
    Text
} from 'react-native';
import Colors from'../constants/Colors';
const CustomScrollSegment = ({title,activeItem,itemClick})=> {
    return (
        <View style={styles.headercontainer}>
            <TouchableOpacity style={{margin:5,marginLeft:2,marginRight:2}} onPress={itemClick}>
                <Text style={[styles.itemColor,
                    {backgroundColor:title == activeItem ?Colors.baseColor :Colors.background_1,
                        color:title == activeItem ?'#FFF' :'#000'
                    }]}>
                    {title}
                </Text>
            </TouchableOpacity>
        </View>
    )
}
const styles=StyleSheet.create({
    headercontainer:{flexDirection:'row'},
    itemColor:{
        // backgroundColor:Colors.background_1,
        padding:10,
        paddingTop:7,
        paddingBottom:7,
        borderRadius:5,
        letterSpacing:0.5
    }
})
export default CustomScrollSegment;