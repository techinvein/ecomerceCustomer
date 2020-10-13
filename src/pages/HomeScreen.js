import React, { Component, useState,useEffect  } from 'react'
import { KeyboardAvoidingView, ScrollView, StatusBar, StyleSheet, Text, View,FlatList,Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements';
import CustomHeader from '../components/CustomHeader';
// import styles from '../styles/home'
import Colors from '../constants/Colors';
import CustomImage from '../components/CustomImage';
import { Dimensions } from 'react-native';
import CustomProduct from '../components/CustomProduct';

const defaultwidth = Dimensions.get('window').width;

// const HomeScreen = () => {
const searchbarContainerStyle = {
    backgroundColor:Colors.primary,
    borderTopColor:Colors.primary,
    borderBottomColor:Colors.primary,
    paddingLeft:20,
    paddingRight:20,
    paddingTop:0
}

// class HomeScreen extends React.Component {
class HomeScreen extends Component {

    constructor(props){
        super(props);
        this.state={
            repeateItem:[
                { id: '1', image: require('../assets/images/food1.jpg'),  count:0 },
                { id: '2', image: require('../assets/images/food2.jpg'), count:0 },
                { id: '3', image: require('../assets/images/food3.jpg'),  count:0 },
                { id: '4', image: require('../assets/images/food4.jpg'), count:0 },
                { id: '5', image: require('../assets/images/food1.jpg'),  count:0 },
                { id: '6', image: require('../assets/images/food3.jpg'), count:0 },
            ],
            offersItem:[
                { id: '1', image: require('../assets/images/slider1.jpg'),  count:0 },
                { id: '2', image: require('../assets/images/slider1.jpg'), count:0 },
                { id: '3', image: require('../assets/images/slider1.jpg'),  count:0 }
            ],
            promotionItem:[
                { id: '1', image: require('../assets/images/promotion1.png'),  count:0 },
                { id: '2', image: require('../assets/images/promotion2.png'), count:0 }
            ]
        }
    }

    bannerSlider=({item,index}) => (
        <View style={styles.bannerStyle}>
            <CustomImage 
                // imageURL="https://homepages.cae.wisc.edu/~ece533/images/airplane.png"
                 imageHeight={130}
                 imageWidth={220}
                // imageText={"Demo test Demo test Demo test"}
                imageURL = {item.image} 
            />
        </View>
    )

    promotioncontent=({item,index}) => (
        <View style={styles.bannerStyle}>
            <CustomImage 
                // imageURL="https://homepages.cae.wisc.edu/~ece533/images/airplane.png"
                imageHeight={defaultwidth/1.5}
                imageWidth={defaultwidth}
                // imageText={"Demo test Demo test Demo test"}
                imageURL = {item.image}
            />
        </View>
    )


    foodItemSlider=({item,index}) => (
        <View style={styles.fooditemStyle}>
            <CustomProduct
                // imageURL="https://homepages.cae.wisc.edu/~ece533/images/airplane.png"
                imageURL = {item.image} 
                clickAddtoCart={()=>{this.clickme(item,index)}}
                removeProduct ={()=>{this.removeProduct(item,index)}}
                addProduct={()=>{this.clickme(item,index)}}
                itemCount={item.count}
                imageClick ={()=>{this.viewDetails()}}
            />
        </View>
    )

    viewDetails(){
        
         this.props.navigation.navigate('ProductDetailsScreen')
     }
    clickme(item,index){
        console.log("item",item)
        this.state.repeateItem[index].count = this.state.repeateItem[index].count + 1

        this.setState({repeateItem:this.state.repeateItem},()=>{
            console.log(this.state.repeateItem)
        })
    }

    removeProduct(item,index){
        console.log("item",item)
        if(this.state.repeateItem[index].count > 0){
            this.state.repeateItem[index].count = this.state.repeateItem[index].count - 1

            this.setState({repeateItem:this.state.repeateItem},()=>{
                console.log(this.state.repeateItem)
            })
        }

    }


render(){
    return (
        <KeyboardAvoidingView style={styles.container}>
            {/* <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#00BCD4" translucent = {true}/> */}
            <View style={styles.mainView}>
                <View>
                    <CustomHeader 
                        title={'Kestopur najrul park, kolkata '} 
                        headerBackground={Colors.primary}
                        name="Sudipta Sarkar" 
                        day="1 day ago" showBack={false} showCart={true} 
                        searchbarContainerStyle={searchbarContainerStyle} 
                        showSearchBar={true}
                        cartClick={()=>{ this.props.navigation.navigate("LoginPageScreen") }}
                        navigation={this.props.navigation}
                    />
                </View>
                
                <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:5,marginLeft:10,marginRight:10}}>
                    <View style={{width:'70%'}}>
                        <View ><Text style={{paddingBottom:3,fontSize:14, fontFamily: "Poppins-Regular",color:Colors.text_deault_color}}>Nearest Branch</Text></View>
                        <View style={{flexDirection:"row"}}>
                            <View style={{flexDirection:'column',justifyContent:'center'}}>
                                <Icon name='location-outline'  type="ionicon" color={Colors.baseColor} size={17}/>
                            </View>
                            <View><Text style={{color:Colors.text_seconday_color,paddingLeft:5}}>Kolkata Big Bagan Branch</Text></View>
                        </View>
                    </View>
                    <View style={{justifyContent:'center'}}>
                        <TouchableOpacity style={{backgroundColor:Colors.button_color_1,borderRadius:5}} onPress={() => {this.props.navigation.navigate('NearestBranchList') }}>
                                <Text style={{color:'#FFF',padding:7,paddingLeft:12,paddingRight:12}}>Change</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{flex:1,marginTop:5,}}>
                    <ScrollView>
                        <View>
                            <FlatList
                                horizontal={true}
                                data={this.state.offersItem}
                                renderItem={this.bannerSlider}
                                showsHorizontalScrollIndicator={false}
                                // extraData={this.state}
                                keyExtractor={(item, index) => index.toString()}
                                // contentContainerStyle={{justifyContent:"space-evenly",flexDirection:"row",width:Dimensions.get('window').width}}
                            />
                        </View>

                        <View>
                            <View style={{flexDirection:"row",flex:1,justifyContent:"space-between",padding:10,paddingTop:20}}>
                                <Text style={{color:'#FD3A00',letterSpacing:1,fontWeight:'600', fontFamily: "Poppins-Regular",fontSize:16}}>Top selling foods</Text>
                                <Text style={{color:'#1477B0',letterSpacing:1,fontWeight:'600'}}>View all</Text>
                            </View>
                            <View>
                                <FlatList
                                    horizontal={true}
                                    data={this.state.repeateItem}
                                    renderItem={this.foodItemSlider}
                                    showsHorizontalScrollIndicator={false}
                                    // extraData={this.state}
                                    keyExtractor={(item, index) => index.toString()}
                                    // contentContainerStyle={{justifyContent:"space-evenly",flexDirection:"row",width:Dimensions.get('window').width}}
                                />
                            </View>
                        </View>

                        <View style={{flexDirection:'row', justifyContent:'space-evenly',flex:1,height:200,padding:10,backgroundColor:'#DEE1E6',marginTop:10}}>
                            <View style={{flexDirection:'column', justifyContent:'center',flex:1,borderRightWidth:0.5,borderRightColor:'#3C3C3C'}}>
                                <TouchableOpacity style={{flexDirection:"row",justifyContent:'center'}}  onPress={() => {this.props.navigation.navigate('CategoriesScreen') }}>
                                    <Image
                                        style={{width:'100%',height:70,}}
                                        // source={{
                                        //     uri: "https://homepages.cae.wisc.edu/~ece533/images/airplane.png",
                                        // }}
                                        source={require('../assets/images/grocey_cat.png')}
                                        resizeMode="cover"
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity style={{flexDirection:"row",justifyContent:'center',paddingTop:12}}  onPress={() => {this.props.navigation.navigate('CategoriesScreen') }}>
                                    <Text style={{textAlign:'center',fontSize:13, fontFamily: "Poppins-Regular",fontWeight:'700',letterSpacing:1}}>GROCERY ITEMS </Text>
                                </TouchableOpacity>
                            </View>

                            <View style={{flexDirection:'column', justifyContent:'center',flex:1,borderLeftWidth:0.5,borderLeftColor:'#dbdbdb'}}>
                                <TouchableOpacity style={{flexDirection:"row",justifyContent:'center'}} onPress={() => {this.props.navigation.navigate('CategoriesScreen') }}>
                                    <Image
                                        style={{width:'80%',height:70,}}
                                        // source={{
                                        //     uri: "https://homepages.cae.wisc.edu/~ece533/images/airplane.png",
                                        // }}
                                        source={require('../assets/images/restaurant_cat.png')}
                                        resizeMode="cover"
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity style={{flexDirection:"row",justifyContent:'center',paddingTop:12}} onPress={() => {this.props.navigation.navigate('CategoriesScreen') }}>
                                    <Text style={{textAlign:'center',fontSize:13,fontWeight:'700',letterSpacing:1}}>RESTURANT FOODS </Text>
                                </TouchableOpacity>
                            </View>

                        </View>

                        
                        <View>
                            <View style={{flexDirection:"row",flex:1,justifyContent:"space-between",padding:10,paddingTop:20}}>
                                <Text style={{color:'#FD3A00',letterSpacing:1,fontWeight:'600',fontSize:16, fontFamily: "Poppins-Regular",}}>Top selling Grocery items</Text>
                                <Text style={{color:'#1477B0',letterSpacing:1,fontWeight:'600', fontFamily: "Poppins-Regular"}}>View all</Text>
                            </View>
                            <View>
                                <FlatList
                                    horizontal={true}
                                    data={this.state.repeateItem}
                                    renderItem={this.foodItemSlider}
                                    showsHorizontalScrollIndicator={false}
                                    // extraData={this.state}
                                    keyExtractor={(item, index) => index.toString()}
                                    // contentContainerStyle={{justifyContent:"space-evenly",flexDirection:"row",width:Dimensions.get('window').width}}
                                />
                            </View>
                        </View>


                        <View style={{paddingTop:20,paddingBottom:10}}>
                            <FlatList
                                horizontal={true}
                                data={this.state.promotionItem}
                                renderItem={this.promotioncontent}
                                showsHorizontalScrollIndicator={false}
                                // extraData={this.state}
                                keyExtractor={(item, index) => index.toString()}
                                // contentContainerStyle={{justifyContent:"space-evenly",flexDirection:"row",width:Dimensions.get('window').width}}
                            />
                        </View>
                        



                    </ScrollView>
                </View>
                
            </View>
        </KeyboardAvoidingView>
      )
}

}

const styles = StyleSheet.create({
    container: { flex: 1,marginTop:StatusBar.currentHeight},
    mainView:{ 
        flex:1,flexDirection:"column"
    },
  
    bannerStyle:{
        paddingLeft:5,
        paddingRight:5,
        backgroundColor:'#DEE1E6',
        paddingTop:5,paddingBottom:5
    },
    fooditemStyle:{
        paddingLeft:5,
        paddingRight:5,
        paddingTop:5,
        paddingBottom:5
    }

    // mainView_sub:{padding:8,flexDirection:"column",backgroundColor:'#000'},
    
    // sub_one:{flexDirection:'row',marginLeft:10,marginRight:10,paddingTop:5},
    // sub_one_icon:{justifyContent:"flex-start"},
    // sub_one_textView:{paddingRight:10},
    // sub_one_text:{color:"#FFF",paddingLeft:10},
  
    // sub_two:{flexDirection:'column',justifyContent:"center",backgroundColor:'#FFF', margin:10,padding: 10,paddingBottom:5, borderWidth:1,borderColor:'#FFF',borderRadius:5},
    // sub_two_view:{flexDirection:'row'},
    // sub_two_icon:{justifyContent:"flex-start"},
    // sub_two_input_view:{paddingLeft:10,paddingRight:10},
  
    // slider_main_view:{height: ((Dimensions.get('window').width/2.8) + 20)},
    // slider_flatlist:{height: ((Dimensions.get('window').width/2.8) + 20),backgroundColor:'#F2F2F2'},
  
  });
  

export default HomeScreen;