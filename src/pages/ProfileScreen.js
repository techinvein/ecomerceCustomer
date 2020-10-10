import React, { Component, useState,useEffect  } from 'react'
import { KeyboardAvoidingView, ScrollView, StatusBar, StyleSheet, Text, View,FlatList,Image, Button } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements';
import Colors from '../constants/Colors';
import { Dimensions } from 'react-native';
import EditText from '../components/EditText';
import CustomButton from '../components/CustomButton';
import CustomHeader from '../components/CustomHeader';
import CustomCart_Item from '../components/CustomCart_Item';
import CustomSegment from '../components/CustomSegment';
import CustomScrollSegment from '../components/CustomScrollSegment';
import CustomProduct from '../components/CustomProduct';

const defaultwidth = Dimensions.get('window').width;
const imageDefaultHeight = Dimensions.get('window').width/1.8;

// const HomeScreen = () => {
const searchbarContainerStyle = {
    backgroundColor:Colors.baseColor,borderTopColor:Colors.baseColor,
    borderBottomColor:Colors.baseColor,paddingLeft:20,
    paddingRight:20,paddingTop:0
}

class ProfileScreen extends Component {

    constructor(props){
        super(props);
        this.state={
            repeateItem:[
                {title:'Biryani', id: '1', image: require('../assets/images/food1.jpg'),  count:0 },
                {title:'Chiness', id: '2', image: require('../assets/images/food2.jpg'), count:0 },
                {title:'Cakes & Deserts', id: '3', image: require('../assets/images/food3.jpg'),  count:0 },
            ]
        }
    }




render(){
    return (
        <KeyboardAvoidingView style={styles.container}>
            {/* <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#00BCD4" translucent = {true}/> */}
            <View style={[styles.mainView]}>
                <View>
                    <CustomHeader 
                        title={'My Account'} 
                        headerBackground={Colors.baseColor}
                        showBack={true} showCart={true} 
                        searchbarContainerStyle={searchbarContainerStyle} 
                        showSearchBar={false}
                        cartClick={()=>{ this.props.navigation.navigate("MyOrdersScreen") }}
                        navigation={this.props.navigation}
                    />
                </View>

                <View>
                    <TouchableOpacity style={styles.imageContainer} onPress= {() => { }} >
                        <Image
                            // source={this.state.profileImg ? { uri: this.state.profileImg } : placeholder}
                            style={styles.image}
                            source={require('../assets/images/product_details.jpg')}
                        />
                    </TouchableOpacity>
                    <Text style={[styles.details, { fontSize: 16,fontWeight:'700',letterSpacing:0.5 }]}>PRADIP MONDAL</Text>
                    <Text style={styles.details}>pradip@yopmail.com</Text>
                    <Text style={styles.details}>9038505480</Text>
                </View>

                <ScrollView contentContainerStyle={styles.bottomContainer}>
                    <TouchableOpacity
                        style={styles.option}
                        onPress= {() => { }}
                    >
                        <Icon name="person-outline" type="ionicon" size={20} color={Colors.baseColor} />
                        <View style={{ marginLeft: 16 }}>
                            <Text style={styles.optionText}>Account Details</Text>
                        </View>
                        <View style={{flexDirection:'row',justifyContent:'flex-end',flex:1}}>
                            <Icon name="chevron-forward-outline" type="ionicon" size={20} color={Colors.baseColor} />
                        </View>

                    </TouchableOpacity>


                    <TouchableOpacity
                        style={styles.option}
                        onPress= {() => { }}
                    >
                        <Icon name="location-outline" type="ionicon" size={20} color={Colors.baseColor} />
                        <View style={{ marginLeft: 16 }}>
                            <Text style={styles.optionText}>My Address</Text>
                        </View>
                        <View style={{flexDirection:'row',justifyContent:'flex-end',flex:1}}>
                            <Icon name="chevron-forward-outline" type="ionicon" size={20} color={Colors.baseColor} />
                        </View>

                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.option}
                        onPress= {() => { }}
                    >
                        <Icon name="trash-outline" type="ionicon" size={20} color={Colors.baseColor} />
                        <View style={{ marginLeft: 16 }}>
                            <Text style={styles.optionText}>Delete Account</Text>
                        </View>
                        <View style={{flexDirection:'row',justifyContent:'flex-end',flex:1}}>
                            <Icon name="chevron-forward-outline" type="ionicon" size={20} color={Colors.baseColor} />
                        </View>

                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.option}
                        onPress= {() => { }}
                    >
                        <Icon name="thumbs-up-outline" type="ionicon" size={20} color={Colors.baseColor} />
                        <View style={{ marginLeft: 16 }}>
                            <Text style={styles.optionText}>Rate App</Text>
                        </View>
                        <View style={{flexDirection:'row',justifyContent:'flex-end',flex:1}}>
                            <Icon name="chevron-forward-outline" type="ionicon" size={20} color={Colors.baseColor} />
                        </View>

                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.option}
                        onPress= {() => { }}
                    >
                        <Icon name="share-social-outline" type="ionicon" size={20} color={Colors.baseColor} />
                        <View style={{ marginLeft: 16 }}>
                            <Text style={styles.optionText}>Share App</Text>
                        </View>
                        <View style={{flexDirection:'row',justifyContent:'flex-end',flex:1}}>
                            <Icon name="chevron-forward-outline" type="ionicon" size={20} color={Colors.baseColor} />
                        </View>

                    </TouchableOpacity>

                    <View  style={{flexDirection:'row',justifyContent:'center'}}>
                        <CustomScrollSegment title="Logout" activeItem="Logout" itemClick={()=>{}} />
                    </View>


                </ScrollView>
    
            </View>
        </KeyboardAvoidingView>
      )
}

}

const styles = StyleSheet.create({
    container: { flex: 1,marginTop:StatusBar.currentHeight,backgroundColor:'#E5E5E5'},
    mainView:{ flex:1,flexDirection:"column",},


    imageContainer: {
        position: 'relative',
        // borderWidth: StyleSheet.hairlineWidth,
        borderColor: Colors.border,
        alignSelf: 'center',
        marginVertical: 16,
        borderRadius: 80,
        borderWidth:3
      },
      image: {
        width: 80,
        height: 80,
        borderRadius: 80,
        margin: 8,
        alignSelf: 'center',
        // resizeMode: 'contain',
        resizeMode: 'cover',
      },
      details: {
        // fontFamily: Fonts.fontFamily.helvetica.normal,
        // fontSize: Fonts.sizes.md,
        // color: Colors.dark,
        alignSelf: 'center',
        marginVertical: 4,
      },



      bottomContainer: {
        flexGrow: 1,
        borderTopLeftRadius: 32,
        borderTopRightRadius: 32,
        paddingHorizontal: 24,
        paddingVertical: 20,
        backgroundColor: Colors.white,
        marginTop: 24,
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 24,
      },
      option: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
      },
      optionText: {
        // fontFamily: Fonts.fontFamily.helvetica.normal,
        // fontSize: Fonts.sizes.md,
        color: Colors.dark,
      },
      optionSubText: {
        // fontFamily: Fonts.fontFamily.helvetica.normal,
        // fontSize: Fonts.sizes.sm,
        color: Colors.dark,
      },
      logoutButton: {
        alignSelf: 'center',
        marginBottom: 16,
        // borderWidth: StyleSheet.hairlineWidth,
        borderColor: Colors.border,
      },

  });
  

export default ProfileScreen;