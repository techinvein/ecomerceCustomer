import React, { Component, useState, useEffect } from 'react'
import { KeyboardAvoidingView, ScrollView, StatusBar, StyleSheet, Text, View, FlatList, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements';
import CustomHeader from '../components/CustomHeader';
// import styles from '../styles/home'
import Colors from '../constants/Colors';
import CustomImage from '../components/CustomImage';
import { Dimensions } from 'react-native';
import CustomProduct from '../components/CustomProduct';
import EditText from '../components/EditText';
import CustomButton from '../components/CustomButton';
const defaultwidth = Dimensions.get('window').width;

// const HomeScreen = () => {
const searchbarContainerStyle = {
    backgroundColor: Colors.primary,
    borderTopColor: Colors.primary,
    borderBottomColor: Colors.primary,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 0
}

// class HomeScreen extends React.Component {
class UserRating extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Feedback:'',
            repeateItem: [{ key: '1', active: false }, { key: '2', active: false }, { key: '3', active: false }, { key: '4', active: false }, { key: '5', active: true }]
        }
    }
    rateUs(index){
        let arr = this.state.repeateItem;
        for(let i = 0; i<arr.length; i++){
            if(index == i){
                arr[i].active = true;
            }else{
                arr[i].active = false;
            }
        }
        this.setState({renderItem:arr})
    }
    ratingSlider = ({ item, index }) => (
        <TouchableOpacity  onPress={() => {this.rateUs(index) }} style={{ marginLeft: 12.5, justifyContent: 'center', alignItems: 'center', height: 50, width: defaultwidth / 7.4, borderWidth: 0.5, borderColor: Colors.background, backgroundColor: item.active?Colors.text_seconday_color:'#fff' }}>
            <Text style={{ fontSize: 22, color: item.active?Colors.white:Colors.dark }}>{item.key}</Text>
        </TouchableOpacity>
    )
    render() {
        return (
            <ScrollView style={styles.container}>
                {/* <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#00BCD4" translucent = {true}/> */}
                <View style={styles.mainView}>
                    <View>
                        <CustomHeader
                            title={'Rate Us '}
                            headerBackground={Colors.baseColor}
                            showBack={true} showCart={false}
                            searchbarContainerStyle={searchbarContainerStyle}
                            showSearchBar={false}
                            cartClick={() => { this.props.navigation.navigate("LoginPageScreen") }}
                            navigation={this.props.navigation}
                        />
                    </View>
                    <View style={{ marginTop: 12 }}>
                        <Text style={{ marginLeft: 12, color: Colors.button_background_1, fontSize: 18, fontWeight: '700', fontFamily: "Poppins-Regular", textAlign: 'left' }}>We value your feedback</Text>
                        <View style={{ justifyContent: 'center', alignSelf: 'center' }}>

                            <Image
                                style={{ width: 250, height: 150 }}
                                source={require('../assets/images/rateus.png')}
                                resizeMode="contain"
                            />
                        </View>
                        <View style={{ paddingHorizontal: 20 }}>
                            <Text style={{ textAlign: 'center', fontSize: 18, fontWeight: '600', fontFamily: "Poppins-Regular", color: Colors.primary }}>Rate Your Exprience</Text>
                            <Text style={{ textAlign: 'center', color: Colors.text_deault_color, fontSize: 14, fontFamily: "Poppins-Regular", }}>It will help us to improve our service</Text>
                            <Text style={{ textAlign: 'left', fontWeight: '600', marginTop: 25, color: Colors.text_deault_color, fontSize: 14, fontFamily: "Poppins-Regular", }}>Rate our delivery Service</Text>
                        </View>
                        <View style={{ paddingHorizontal: 20, flexDirection: 'row', marginTop: 16 }}>
                            <Image
                                style={{ width: 45, height: 45 }}
                                source={require('../assets/images/driver.png')}
                                resizeMode="contain"
                            />
                            <View style={{ marginLeft: 12, justifyContent: 'center' }}>
                                <Text style={{ fontSize: 14, color: Colors.itemBackground, fontFamily: "Poppins-Regular", }}>Rajesh Sign</Text>
                                <Text style={{ lineHeight: 15, fontSize: 13, color: Colors.itemBorder, fontFamily: "Poppins-Regular", }}>5<Image
                                    style={{ width: 14, height: 14 }}
                                    source={require('../assets/images/rating.png')}
                                    resizeMode="contain"
                                />overal rating</Text>
                            </View>
                        </View>


                        <View style={{ marginHorizontal: 20, marginTop: 16, backgroundColor: Colors.background }}>
                            <FlatList
                                horizontal={true}
                                data={this.state.repeateItem}
                                renderItem={this.ratingSlider}
                                showsHorizontalScrollIndicator={false}
                                // extraData={this.state}
                                keyExtractor={(item, index) => index.toString()}
                            // contentContainerStyle={{justifyContent:"space-evenly",flexDirection:"row",width:Dimensions.get('window').width}}
                            />
                            
                        </View>
                        <Text style={{ marginLeft:20,textAlign: 'left', fontWeight: '600', marginTop: 25, color: Colors.text_deault_color, fontSize: 14, fontFamily: "Poppins-Regular", }}>Your feedback about everything</Text>
                    </View>
                    <View style={{paddingBottom:15,paddingHorizontal:20,marginTop:12}}>
                        <EditText
                            type="text"
                            multiline ={true}
                            style={styles.inputMargin}
                            value={this.state.Feedback}
                            onChange={(text) => this.setState({Feedback:text})}
                            placeholder="Write Somethings ..."
                         />
                          <CustomButton
                            name="Submit"
                            onPress={()=>{this.props.navigation.navigate('Home')}}
                            buttonColor={Colors.text_seconday_color}
                            textColor ={Colors.white}
                            // buttonIcon={<Icon name='rowing' color={'#FFF'} />}
                         />
                    </View>
                   
                </View>
            </ScrollView>
        )
    }

}

const styles = StyleSheet.create({
    container: { flex: 1, marginTop: StatusBar.currentHeight, backgroundColor: '#f7f7f7' },
    mainView: {
        flex: 1, flexDirection: "column"
    },
    inputMargin:{
        height:90,
        backgroundColor:Colors.light,
        marginBottom:16
    },
    bannerStyle: {
        paddingLeft: 5,
        paddingRight: 5,

        paddingTop: 5, paddingBottom: 5
    },
    fooditemStyle: {
        paddingLeft: 5,
        paddingRight: 5,
        paddingTop: 5,
        paddingBottom: 5
    }



});


export default UserRating;