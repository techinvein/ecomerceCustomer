import React, { Component, useState,useEffect  } from 'react'
import { KeyboardAvoidingView, ScrollView, StatusBar, StyleSheet, Text, View,FlatList,Image, ImageBackground } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements';
import Colors from '../constants/Colors';
import { Dimensions } from 'react-native';
import EditText from '../components/EditText';
import CustomButton from '../components/CustomButton';
import CustomHeader from '../components/CustomHeader';

const defaultwidth = Dimensions.get('window').width/2;

// const HomeScreen = () => {
const searchbarContainerStyle = {
    backgroundColor:Colors.baseColor,borderTopColor:Colors.baseColor,
    borderBottomColor:Colors.baseColor,paddingLeft:20,
    paddingRight:20,paddingTop:0
}

class SearchLocation extends Component {

    constructor(props){
        super(props);
        this.state={
        }
    }


render(){
    return (
        <KeyboardAvoidingView style={styles.container}>
        {/* <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#00BCD4" translucent = {true}/> */}
        <View style={styles.mainView}>
            <View>
                <CustomHeader 
                    title={'Search Location'} 
                    headerBackground={Colors.baseColor}
                    name="Sudipta Sarkar" 
                    day="1 day ago" showBack={false} showCart={true} 
                    searchbarContainerStyle={searchbarContainerStyle} 
                    showSearchBar={true}
                    showBack={true} showCart={false} 
                    navigation={this.props.navigation}
                />
            </View>
            
        </View>
    </KeyboardAvoidingView>
      )
}

}

const styles = StyleSheet.create({
    container: { flex: 1,marginTop:StatusBar.currentHeight,backgroundColor:'#E2F5FC'},
    mainView:{ flex:1,flexDirection:"column"},
    backgroundImgContainer:{
        width: "100%",
        height: 200,
        paddingVertical: 40,
        position: 'absolute',
        bottom:10,
    },
    backgroundImage:{
        resizeMode: "cover",
        alignSelf: "flex-end",
        opacity:0.4
    },
    mainContainer:{flex:1,flexDirection:'column'},
    imageContainer:{flex:1,flexDirection:'column',justifyContent:'space-evenly'},
    imageView:{flexDirection:'row',justifyContent:'center',marginTop:30},
    textOne:{flexDirection:'row',justifyContent:'center'},
    textTitle:{fontSize:25},
    textTwo:{flexDirection:'row',justifyContent:'center'},
    textTwoStyle:{fontSize:18},
    loactionMain:{flex:1,padding:20}

    

  });
  

export default SearchLocation;