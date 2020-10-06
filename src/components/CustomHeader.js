//import a libraries for making a component
import React from 'react';
import {
    View,
    TouchableOpacity,
    StyleSheet,
    Text,
    Dimensions
} from 'react-native';
import { Icon, SearchBar } from 'react-native-elements';
// import { Avatar } from 'react-native-elements';

const devicewidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;
const iconHeight = deviceHeight/13;
// const iconWidth = devicewidth/6;
const iconWidth = deviceHeight/13;
// const iconRadius = (iconHeight+iconWidth)/2;
const iconRadius = iconWidth/2;

const CustomHeader = ({
    title,showBack, 
    showCart,searchbarContainerStyle,
    headerBackground,showSearchBar,
    backClick,menuClick,cartClick
})=> {
    return (
        <View style={[styles.headercontainer,{backgroundColor:headerBackground ? headerBackground : '#FFF'}]}>
            <View style={{flexDirection:'row',justifyContent:'space-between',padding: 10}}>
                <View style={{flexDirection:'row',width:'80%'}}>
                    {showBack ?
                        <Icon name='chevron-back-outline' type="ionicon" color={headerBackground ? '#FFF' : '#000'} onPress={backClick} />
                        :
                        <Icon name='menu-outline'  type="ionicon" color={headerBackground ? '#FFF' : '#000'} onPress={menuClick} />
                    }
                    <View style={{paddingTop:3,paddingLeft:10}}>
                        <Text style={{color:headerBackground ? '#FFF' : '#000',fontSize:15}}>{title}</Text>
                        </View>
                </View>
                <View style={{flexDirection:'row'}}>
                    {showCart?
                        <Icon name='cart-outline' type="ionicon" color={headerBackground ? '#FFF' : '#000'} onPress={cartClick} />
                    :null}
                </View>
            </View>
            <View>
                {showSearchBar ?
                    <SearchBar
                        placeholder="Type Here..."
                        // onChangeText={this.updateSearch}
                        // value={search}
                        containerStyle={searchbarContainerStyle}
                        inputContainerStyle={{backgroundColor:'#FFF',borderRadius:6}}
                    />
                 :null
                }

            </View>
      </View>
    )
}
const styles=StyleSheet.create({
    headercontainer:{flexDirection:'column',},
})
export default CustomHeader;
