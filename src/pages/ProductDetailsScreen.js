import React, { Component, useState,useEffect  } from 'react'
import { KeyboardAvoidingView, ScrollView, StatusBar, StyleSheet, Text, View,FlatList,Image } from 'react-native'
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

class ProductDetailsScreen extends Component {

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


    foodItemSlider=({item,index}) => (
        <View style={styles.fooditemStyle}>
            <CustomProduct
                // imageURL="https://homepages.cae.wisc.edu/~ece533/images/airplane.png"
                imageURL = {item.image} 
                //clickAddtoCart={()=>{this.clickme(item,index)}}
                removeProduct ={()=>{this.removeProduct(item,index)}}
                addProduct={()=>{this.clickme(item,index)}}
                itemCount={item.count}
            />
        </View>
    )


render(){
    return (
        <KeyboardAvoidingView style={styles.container}>
            {/* <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#00BCD4" translucent = {true}/> */}
            <View style={[styles.mainView]}>
                <View>
                    <CustomHeader 
                        title={'Product Details'} 
                        headerBackground={Colors.baseColor}
                        showBack={true} showCart={true} 
                        searchbarContainerStyle={searchbarContainerStyle} 
                        showSearchBar={false}
                        cartClick={()=>{ this.props.navigation.navigate("MyOrdersScreen") }}
                        navigation={this.props.navigation}
                    />
                </View>

            <View style={{flex:1}}>
                <ScrollView>

                    <View style={{backgroundColor:'#FFF'}}>
                        <View style={styles.itemContainer}>
                            <Text style={styles.title}>Special Double chicken Biryani with egg</Text>
                            <Text style={styles.companyName}>Fast Fooder Brand</Text>
                        </View>
                        <View style={{paddingBottom:20}}>
                            <Image
                                style={{width:'100%',height:imageDefaultHeight}}
                                // source={itemImageURL}
                                source={require('../assets/images/product_details.jpg')}
                                resizeMode="cover"
                            />
                            <View style={{paddingLeft:15,paddingRight:15,paddingTop:10}}>
                                <Text style={{color:Colors.button_color_1,fontWeight:'600',letterSpacing:0.5,fontSize:12}}>You save $10 in this order</Text>
                            </View>
                            <View style={{flexDirection:'row',justifyContent:'space-between',paddingLeft:15,paddingRight:15,}}>
                                <View style={{flexDirection:'column',justifyContent:'center'}}>
                                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                                        <Text style={{fontSize:13,fontWeight:'bold',paddingRight:5}}>Rs. 40</Text>
                                        <View style={{flexDirection:'column',justifyContent:'center'}}>
                                            <Text style={{opacity:0.4,fontSize:12,paddingRight:7,textDecorationLine: 'line-through'}}>Rs. 150</Text>
                                          
                                        </View>
                                        
                                    </View>
                                </View>
                                <View style={{flexDirection:'column',justifyContent:'center'}}>
                                    <TouchableOpacity><Text style={{backgroundColor:Colors.button_background_1,paddingLeft:10,paddingRight:10,paddingTop:6,paddingBottom:6,fontSize:13,borderRadius:5,color:'#FFF'}}>Add to cart</Text></TouchableOpacity>
                                </View>
                            </View>
                        
                            <View style={{paddingLeft:15,paddingRight:15,paddingTop:10}}>
                                <View>
                                    <Text style={{fontWeight:'700',letterSpacing:0.5,paddingBottom:7}}>
                                        Product Descriptions
                                    </Text>
                                    <Text style={{fontWeight:'500',letterSpacing:0.5,fontSize:12,lineHeight:18}}>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    
                    <View style={{backgroundColor:'#FFF',marginTop:15,marginBottom:15}}>
                        <View style={{padding:10}}>
                            <Text style={{fontSize:15,letterSpacing:0.5,fontWeight:'700',color:Colors.text_seconday_color,paddingLeft:10}}>You may also Like</Text>
                            <View style={{paddingTop:5}}>
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
                    </View>

                </ScrollView>
            </View>
            <View style={{height:60,backgroundColor:'#FFF',flexDirection:'column',justifyContent:'center',paddingLeft:10,paddingRight:10}}>
                <View style={{flexDirection:'row',justifyContent:'space-between',backgroundColor:Colors.text_seconday_color,padding:10,borderRadius:5}}>
                        <View style={{flexDirection:'row',justifyContent:'flex-end'}}>
                            <View style={{flexDirection:'column',justifyContent:'center',paddingRight:8,paddingLeft:5}}>
                                <View style={{borderWidth:1,borderColor:'#fff',height:25,width:25,flexDirection:'column',justifyContent:'center'}}>
                                    <Text style={{textAlign:'center',color:'#fff',fontSize:10}}>4</Text>
                                </View>
                            </View>
                            <View style={{flexDirection:'column',justifyContent:'center'}}>
                                <Text style={{color:'#fff',letterSpacing:0.5,fontWeight:'600'}}>$169</Text>
                            </View>
                        </View>
                        <View style={{flexDirection:'column',justifyContent:'center'}}>
                            <TouchableOpacity onPress={() => {this.props.navigation.navigate('MyBasketScreen') }}>
                                <Text style={{color:'#fff',letterSpacing:0.5,fontWeight:'700'}}>View Details</Text>
                            </TouchableOpacity>
                        </View>
                </View>
            </View>

            </View>
        </KeyboardAvoidingView>
      )
}

}

const styles = StyleSheet.create({
    container: { flex: 1,marginTop:StatusBar.currentHeight,backgroundColor:'#E5E5E5'},
    mainView:{ flex:1,flexDirection:"column",},

    itemContainer:{padding:15},
    title:{fontWeight:'700',letterSpacing:0.5, fontSize:18,paddingBottom:8},
    companyName:{fontWeight:'700',letterSpacing:0.5, fontSize:14,color:Colors.text_seconday_color},


    fooditemStyle:{
        paddingLeft:5,
        paddingRight:5,
        paddingTop:5,
        paddingBottom:5
    }



  });
  

export default ProductDetailsScreen;