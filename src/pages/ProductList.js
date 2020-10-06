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
import CustomScrollSegment from '../components/CustomScrollSegment';
import CustomProductTwo from '../components/CustomProductTwo';

const defaultwidth = Dimensions.get('window').width;

// const HomeScreen = () => {
const searchbarContainerStyle = {
    backgroundColor:Colors.baseColor,borderTopColor:Colors.baseColor,
    borderBottomColor:Colors.baseColor,paddingLeft:20,
    paddingRight:20,paddingTop:0
}

// class ProductListScreen extends React.Component {
class ProductListScreen extends Component {

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
                { id: '1', image: require('../assets/images/offer1.jpg'),  count:0 },
                { id: '2', image: require('../assets/images/offer2.jpg'), count:0 },
                { id: '3', image: require('../assets/images/offer3.jpg'),  count:0 }
            ],
            segmentItem:[
                {name:"ALL"},{name:"Blended Oil"},{name:"Edible Oil"},{name:"Groceries"}
            ],
            selected_segment_item:"ALL"

        }
    }


    promotioncontent=({item,index}) => (
        // <View style={styles.segmentContainer}>
            <CustomScrollSegment
            title={item.name}
            activeItem={this.state.selected_segment_item}
            itemClick={()=>{this.setState({selected_segment_item:item.name})}}
                />
        //  </View>
    )
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

    foodItemSlider=({item,index}) => (
        <View style={styles.fooditemStyle}>
            <CustomProductTwo
                clickAddtoCart={()=>{this.clickme(item,index)}}
                removeProduct ={()=>{this.removeProduct(item,index)}}
                addProduct={()=>{this.clickme(item,index)}}
                itemCount={item.count}
                itemImageURL={item.image}
            />
            <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10,marginBottom:5}}>
                <View style={{flex:1}}></View>
                <View style={{flex:3,borderBottomWidth:2,borderBottomColor:Colors.background_1}}></View>
                <View style={{flex:0.2}}></View>
            </View>
        </View>
    )



render(){
    return (
        <KeyboardAvoidingView style={styles.container}>
            <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#00BCD4" translucent = {true}/>
            <View style={[styles.mainView,{paddingTop:StatusBar.currentHeight}]}>
                <View>
                    <CustomHeader 
                        title={'Product list'} 
                        headerBackground={Colors.baseColor}
                        name="Sudipta Sarkar" 
                        day="1 day ago" showBack={true} showCart={true} 
                        searchbarContainerStyle={searchbarContainerStyle} 
                        showSearchBar={false}
                        backClick={()=>{}}
                        menuClick={()=>{}}
                        cartClick={()=>{this.props.navigation.navigate("CategoriesScreen")}}
                    />
                    <View>
                        <FlatList
                            horizontal={true}
                            data={this.state.segmentItem}
                            renderItem={this.promotioncontent}
                            showsHorizontalScrollIndicator={false}
                            // extraData={this.state}
                            keyExtractor={(item, index) => index.toString()}
                            // contentContainerStyle={{justifyContent:"space-evenly",flexDirection:"row",width:Dimensions.get('window').width}}
                        />
                    </View>
                </View>
                

                <View style={{flex:1,marginTop:5,}}>
                    {/* <ScrollView> */}
                                <FlatList
                                    // horizontal={false}
                                    data={this.state.repeateItem}
                                    renderItem={this.foodItemSlider}
                                    showsHorizontalScrollIndicator={false}
                                    // extraData={this.state}
                                    keyExtractor={(item, index) => index.toString()}
                                    // contentContainerStyle={{justifyContent:"space-evenly",flexDirection:"row",width:Dimensions.get('window').width}}
                                />
                    {/* </ScrollView> */}
                </View>
                
            </View>
        </KeyboardAvoidingView>
      )
}

}

const styles = StyleSheet.create({
    container: { flex: 1},
    mainView:{ flex:1,flexDirection:"column"},

    segmentContainer:{
        paddingLeft:5,
        paddingRight:5,
    },
    fooditemStyle:{
        paddingLeft:5,
        paddingRight:5,
        paddingTop:5,
        // marginBottom:20,
        // borderBottomColor:Colors.button_color_1,
        // borderBottomWidth:1
    }
  });
  

export default ProductListScreen;