import React from 'react';
import { TouchableOpacity, Modal, Image, View, FlatList, Text, Dimensions } from 'react-native';
import { Icon } from 'react-native-elements';
import  Colors  from '../constants/Colors';
import { CheckBox } from 'react-native-elements'
//make a compontent
const SaveAddressListComponent = ({type, CheckBoxBoolean, FirstRowText,SecondRowText,ThirdRowText,FourthRowText,CheckBoxIconClick,MoreIconClick,tag,TagText,tagWidth }) => {
    return (
        <View style={styles.mainContainerList}>
            <View style={styles.segment1}>
                <CheckBox
                    checked={CheckBoxBoolean}
                    uncheckedIcon='circle-o'
                    checkedIcon='dot-circle-o'
                    checkedColor={'#000'}
                    onPress={CheckBoxIconClick}
                />
            </View>
            <View style={styles.segment2}>
                <Text style={styles.name}>{FirstRowText}</Text>
                <Text style={styles.Othertext}>{SecondRowText}</Text>
                <Text style={styles.Othertext}>{ThirdRowText}</Text>
                <Text style={styles.Othertext}>{FourthRowText}</Text>
               <View style={{width:tagWidth,marginTop:8}}><View style={{padding:6,paddingHorizontal:10,backgroundColor:tag>2?Colors.button_background_1:Colors.button_color_1,borderRadius:16}}><Text style={{color:Colors.light}}>{TagText}</Text></View></View>
            </View>
            
            <TouchableOpacity style={styles.segment3} onPress={MoreIconClick}>
            {type?<Icon name='ellipsis-vertical-outline' type="ionicon"  color ={Colors.text_deault_color}/>:null}
            </TouchableOpacity>
        </View>
    );

};

const styles = {
    mainContainerList: {
        marginTop: 20,
        flexDirection: 'row' 
      },
      segment1: {
        flex: 1,
        alignItems: 'center',
        borderBottomColor: Colors.border,
        borderBottomWidth: 1
      },
      segment2: {
        flex: 6,
        paddingVertical: 10,
        borderBottomColor: Colors.border,
        borderBottomWidth: 1
      },
      segment3: {
        flex: 1,
        alignItems: 'center',
        borderBottomColor: Colors.border,
        borderBottomWidth: 1
      },
      name: {
        fontSize: 16,
        fontWeight: '400'
      },
      Othertext: {
        fontSize: 14,
        color: Colors.text_deault_color,
        marginTop:2
      },
    

}

export default SaveAddressListComponent;
