//import a libraries for making a component
import React from 'react';
import {
    View,
    TouchableOpacity,
    StyleSheet,
    Text, Image
} from 'react-native';
import Colors from'../constants/Colors';
const CustomProductTwo = ({
    title,activeItem,itemClick,
    imageWidth,imageHeight,itemCount,
    clickAddtoCart,removeProduct,addProduct,
    itemImageURL,
    imageClick
})=> {
    return (
        <View style={styles.headercontainer}>
            <TouchableOpacity  onPress={ imageClick } style={styles.imageContainer}>
                <Image
                    style={{width:imageWidth?imageWidth :'100%',height:imageHeight?imageHeight :'100%'}}
                    source={itemImageURL}
                    // source={require('../assets/images/food1.jpg')}
                    resizeMode="cover"
                />
            </TouchableOpacity>
            <View style={styles.descContainer}>
                <View style={styles.descMain}>
                    <Text style={styles.descTitle}>Fortune Refined Soyabean Oil 1 litter (Pouch)</Text>
                    <View style={styles.discountMain}>
                        <Text style={styles.mainPrice}>Rs. 40</Text>
                        <View style={styles.discountDiv}>
                            <Text style={styles.discountPrice}>Rs. 150</Text>
                            {/* <Text style={styles.discountDot}>--------</Text> */}
                        </View>
                    </View>
                    <Text style={styles.discountAmount}>You save $20.00</Text>
                    
                    <Image
                    style={{width:40,height:15}}
                    // source={imageURL}
                    source={require('../assets/images/demo_logo.png')}
                    resizeMode="contain"
                />
              
                                     
                    <View style={styles.productCount}>
                        {!itemCount || itemCount  < 1 ?
                            <TouchableOpacity 
                                onPress={clickAddtoCart}
                                style={styles.addToCartMain}
                            >
                                <View style={styles.addToCartTitleDiv}>
                                    <Text style={styles.addToCartTitle}>Add to Cart </Text>
                                </View>
                            </TouchableOpacity>
                        :
                            <View style={styles.countDiv}>
                                <TouchableOpacity 
                                    onPress={removeProduct}
                                    style={styles.minusDiv}
                                >
                                    <Text style={styles.minusTitle}>-</Text>
                                </TouchableOpacity>
                                <View style={styles.totalCount}>
                                    <Text style={{textAlign:'center'}}>{itemCount}</Text>
                                </View>
                                <TouchableOpacity 
                                    onPress={addProduct}
                                    style={styles.plusDiv}
                                >
                                    <Text style={styles.plusTitle}>+</Text>
                                </TouchableOpacity>

                            </View>

                        }
                    </View>
                </View>
            </View>
        </View>
    )
}
const styles=StyleSheet.create({
    headercontainer:{flexDirection:'row',justifyContent:'space-between',marginLeft:5,marginRight:5},
    imageContainer:{flex:1,minHeight:100,maxHeight:140},

    descContainer:{
        flex:1.5,
        //backgroundColor:Colors.background_1,
        flexDirection:"row",
        justifyContent:'flex-start',
        maxHeight:125
    },
    descMain:{
        flexDirection:"column",
        justifyContent:'flex-start',
        paddingLeft:20
    },
    descTitle:{
        fontWeight:'700',
        letterSpacing:0.3,
        paddingTop:2,
        paddingBottom:2,
        paddingRight:2
    },
    discountMain:{flexDirection:'row',paddingBottom:2},
    mainPrice:{fontSize:15,fontWeight:'bold'},
    discountDiv:{flexDirection:'column',justifyContent:'center'},
    discountPrice:{opacity:0.4,fontSize:11,paddingRight:7,paddingLeft:20,textDecorationLine: 'line-through'},
    discountDot:{position:'absolute',textAlign:"center",width:'90%',paddingLeft:20},
    discountAmount:{fontSize:10,color:Colors.baseColor,paddingBottom:5},

    productCount:{padding:3,flexDirection:'row',justifyContent:'center',paddingLeft:30},
    addToCartMain:{width:'100%',paddingTop:5,paddingLeft:10,paddingRight:10,marginBottom:5},
    addToCartTitleDiv:{
        backgroundColor:Colors.baseColor,
        borderRadius:5
    },
    addToCartTitle:{fontSize:11,padding:7,color:'white',textAlign:'center'},

    countDiv:{width:'100%',paddingTop:5,paddingLeft:10,paddingRight:10,marginBottom:5,flexDirection:'row',justifyContent:"space-between"},
    minusDiv:{
        flex:1,
        backgroundColor:Colors.baseColor,
        flexDirection:'column',
        justifyContent:'center',
        borderTopLeftRadius:5,
        borderBottomLeftRadius:5
    },
    minusTitle:{
        textAlign:'center',
        paddingTop:4,
        paddingBottom:3,
        fontSize:15,
        fontSize:16,
        color:'#FFF',
        fontWeight:'bold'
    },

    totalCount:{flex:1,backgroundColor:'white',flexDirection:'column',justifyContent:'center'},

    plusDiv:{
        flex:1,
        backgroundColor:Colors.baseColor,
        flexDirection:'column',
        justifyContent:'center',
        borderTopRightRadius:5,
        borderBottomRightRadius:5
    },
    plusTitle:{textAlign:'center',paddingTop:4,paddingBottom:3,fontSize:15,fontSize:16,color:'#FFF',fontWeight:'bold'}

})
export default CustomProductTwo;