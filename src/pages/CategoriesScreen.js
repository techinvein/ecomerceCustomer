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
import CustomSegment from '../components/CustomSegment';
import CategoryImage from '../components/CategoryImage';

const defaultwidth = Dimensions.get('window').width;

// const HomeScreen = () => {
const searchbarContainerStyle = {
    backgroundColor:Colors.baseColor,borderTopColor:Colors.baseColor,
    borderBottomColor:Colors.baseColor,paddingLeft:20,
    paddingRight:20,paddingTop:0
}

// class ProductListScreen extends React.Component {
class CategoriesScreen extends Component {

    constructor(props){
        super(props);
        this.state={
            repeateItem:[
                {title:'Biryani', id: '1', image: require('../assets/images/food1.jpg'),  count:0 },
                {title:'Chiness', id: '2', image: require('../assets/images/food2.jpg'), count:0 },
                {title:'Cakes & Deserts', id: '3', image: require('../assets/images/food3.jpg'),  count:0 },
                {title:'Burgers', id: '4', image: require('../assets/images/food4.jpg'), count:0 },
                {title:'South indian', id: '5', image: require('../assets/images/food1.jpg'),  count:0 },
                {title:'Pizza', id: '6', image: require('../assets/images/food3.jpg'), count:0 },
                {title:'North Indian', id: '7', image: require('../assets/images/food1.jpg'),  count:0 },
                {title:'Rolls & Sandwitch', id: '8', image: require('../assets/images/food2.jpg'), count:0 },
                {title:'Snacks', id: '9', image: require('../assets/images/food3.jpg'),  count:0 },
                {title:'Ice Cream', id: '10', image: require('../assets/images/food4.jpg'), count:0 }
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
        <View style={styles.segmentContainer}>
            {/* // <CustomScrollSegment
            // title={"sdcbsdbcds"}
            // activeItem={"sdcbsdbcds"}
            //     /> */}

            <CategoryImage 
                // imageURL="https://homepages.cae.wisc.edu/~ece533/images/airplane.png"
                // imageHeight={40}
                // imageWidth={100}
                imageText={item?.title}
                imageURL = {item?.image} 
            />
          </View>
    )


render(){
    return (
        <KeyboardAvoidingView style={styles.container}>
            {/* <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#00BCD4" translucent = {true}/> */}
            <View style={[styles.mainView]}>
                <View style={{marginBottom:45}}>
                    <CustomHeader 
                        title={'Product list'} 
                        headerBackground={Colors.baseColor}
                        name="Sudipta Sarkar" 
                        day="1 day ago" showBack={true} showCart={true} 
                        searchbarContainerStyle={searchbarContainerStyle} 
                        showSearchBar={false}
                        backClick={()=>{}}
                        menuClick={()=>{}}
                        cartClick={()=>{this.props.navigation.navigate("MyOrdersScreen")}}
                    />
                    <View style={{flexDirection:'row',flex:1,width:'100%'}}>
                        <View style={{flex:1}}>
                            <CustomSegment
                                title={"Grocery Product"}
                                activeItem={this.state.selected_segment_item}
                                itemClick={()=>{this.setState({selected_segment_item:"Grocery Product"})}}
                            />
                        </View>

                        <View  style={{flex:1}}>
                            <CustomSegment
                                title={"Restaurant Foods"}
                                activeItem={this.state.selected_segment_item}
                                itemClick={()=>{this.setState({selected_segment_item:"Restaurant Foods"})}}
                            />
                        </View>
                    </View>
                </View>


                <View style={{flex:1,marginBottom:5}}>
                        <FlatList
                            // horizontal={true}
                            data={this.state.repeateItem}
                            numColumns={2}
                            renderItem={this.promotioncontent}
                            showsHorizontalScrollIndicator={false}
                            // extraData={this.state}
                            keyExtractor={(item, index) => index.toString()}
                            // contentContainerStyle={{justifyContent:"space-evenly",flexDirection:"row",width:Dimensions.get('window').width}}
                        />
                    </View>

            </View>
        </KeyboardAvoidingView>
      )
}

}

const styles = StyleSheet.create({
    container: { flex: 1,marginTop:StatusBar.currentHeight},
    mainView:{ flex:1,flexDirection:"column"},

    segmentContainer:{
        paddingLeft:4,
        paddingRight:2,
        paddingBottom:5
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
  

export default CategoriesScreen;