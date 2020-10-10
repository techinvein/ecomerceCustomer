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

class LocationScreen extends Component {

    constructor(props){
        super(props);
        this.state={
        }
    }


render(){
    return (
        <KeyboardAvoidingView style={styles.container}>
            {/* <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#00BCD4" translucent = {true}/> */}

            <ImageBackground source={require('../assets/images/location_background.jpg') } 
                style={styles.backgroundImgContainer}
                imageStyle={styles.backgroundImage}
            >
            </ImageBackground>
            <View style={styles.mainContainer}>
                <View style={styles.imageContainer}>
                    <View style={styles.imageView}>
                        <Image
                            style={{height:defaultwidth}}
                            source={ require('../assets/images/location_title.png')}
                            resizeMode="contain"
                        />
                    </View>
                    <View style={styles.textOne}>
                        <Text style={styles.textTitle}>We are ready to serve</Text>
                    </View>
                    <View style={styles.textTwo}>
                        <Text style={styles.textTwoStyle}>Find your Nearest Branch</Text>
                    </View>

                </View>
                <View style={styles.loactionMain}>
                    <View >
                        <CustomButton
                            name="Use your current location"
                            onPress={()=>{this.props.navigation.navigate("MyBasketScreen")}}
                            buttonColor="green"
                            buttonIcon={<Icon name='locate-outline' type="ionicon" color={'#FFF'} />}
                         />
                    </View>
                    <View style={{paddingTop:20}}>
                        <CustomButton
                            textColor={Colors.text_seconday_color}
                            name="Another location"
                            // onPress={()=>{this.props.navigation.navigate("LocationScreen")}}
                            buttonColor="white"
                         />
                    </View>

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
  

export default LocationScreen;