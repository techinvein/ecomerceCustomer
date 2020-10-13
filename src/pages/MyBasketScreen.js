import React, { Component, useState, useEffect } from 'react'
import { KeyboardAvoidingView, ScrollView, StatusBar, StyleSheet, Text, View, FlatList, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements';
import Colors from '../constants/Colors';
import { Dimensions } from 'react-native';
import EditText from '../components/EditText';
import CustomButton from '../components/CustomButton';
import CustomHeader from '../components/CustomHeader';
import CustomCart_Item from '../components/CustomCart_Item';

const defaultwidth = Dimensions.get('window').width;

// const HomeScreen = () => {
const searchbarContainerStyle = {
    backgroundColor: Colors.baseColor, borderTopColor: Colors.baseColor,
    borderBottomColor: Colors.baseColor, paddingLeft: 20,
    paddingRight: 20, paddingTop: 0
}

class MyBasketScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            repeateItem: [
                { title: 'Biryani', id: '1', image: require('../assets/images/food1.jpg'), count: 0 },
                { title: 'Chiness', id: '2', image: require('../assets/images/food2.jpg'), count: 0 },
                { title: 'Cakes & Deserts', id: '3', image: require('../assets/images/food3.jpg'), count: 0 },
            ]
        }
    }

    promotioncontent = ({ item, index }) => (
        <View style={{ paddingLeft: 5, paddingRight: 5, marginBottom: 10, borderBottomWidth: 0.2 }}>
            <CustomCart_Item
                imageURL={item.image}
                imageHeight={null}
                imageWidth={null}
                itemName={"Special chicken biryani"}
                itemPrice={120}
                saveAmount={60}
                itemDiscount={50}
                enableCart={true}
                itemCount={5}
            />
        </View>

    )

    viewPromo(){
        this.props.navigation.navigate('Coupons')
    }
    render() {
        return (
            <KeyboardAvoidingView style={styles.container}>
                {/* <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#00BCD4" translucent = {true}/> */}
                <View style={[styles.mainView]}>
                    <View>
                        <CustomHeader
                            title={'My basket '}
                            headerBackground={Colors.baseColor}
                            showBack={true} showCart={true}
                            searchbarContainerStyle={searchbarContainerStyle}
                            showSearchBar={false}
                            showBack={true} showCart={false}
                            cartClick={() => { this.props.navigation.navigate("ProductDetailsScreen") }}
                            navigation={this.props.navigation}
                        />
                    </View>
                    <View style={styles.contentBody}>
                        <ScrollView>

                            <View style={styles.addressContainer}>
                                <Text style={styles.shipingAdd}>Shipping Address</Text>
                                <View style={{ paddingTop: 10 }}>
                                    <Text style={[styles.addressText, { fontSize: 15, color: Colors.dark, fontWeight: '700' }]}>ARGHYADEEP SINHA</Text>
                                    <Text style={[styles.addressText, { color: Colors.dark }]}>Boisakhi pizza, 77/12 Elgin Road</Text>
                                    <Text style={[styles.addressText, { color: Colors.dark }]}>Kolkata west bengal, 700159</Text>
                                    <Text style={[styles.addressText, { color: Colors.dark }]}>+919038457564</Text>
                                </View>
                                <View style={{ paddingTop: 20 }}>
                                    <CustomButton
                                        name="Change or Add address"
                                         onPress={()=>{this.props.navigation.navigate("SaveAddress")}}
                                        buttonColor={Colors.text_seconday_color}
                                    // buttonIcon={<Icon name='locate-outline' type="ionicon" color={'#FFF'} />}
                                    />
                                </View>
                            </View>

                            <View style={styles.itemContainer}>
                                <View style={{ paddingTop: 10 }}>
                                    <FlatList
                                        // horizontal={true}
                                        data={this.state.repeateItem}
                                        numColumns={1}
                                        renderItem={this.promotioncontent}
                                        showsHorizontalScrollIndicator={false}
                                        // extraData={this.state}
                                        keyExtractor={(item, index) => index.toString()}
                                    // contentContainerStyle={{justifyContent:"space-evenly",flexDirection:"row",width:Dimensions.get('window').width}}
                                    />
                                </View>
                            </View>
                            <View style={styles.promoContainer}>

                                <View style={styles.shipingImg}>
                                    <View style={{flex:0.8}}>
                                        <Image
                                            style={{ width: 40, height: 40 }}
                                            // source={itemImageURL}
                                            source={require('../assets/images/sale.png')}
                                            resizeMode="cover"
                                        />
                                    </View>
                                    <View style={{ flex:3 }}>
                                        <Text style={{ fontSize: 13 }}>Offer & Promo codes</Text>
                                        <Text style={{ fontSize: 12, color: Colors.baseColor }}>Apply Promo</Text>
                                    </View>
                                    <View style={{marginLeft:40,flex:0.5}}>
                                        <TouchableOpacity onPress={() => { this.viewPromo() }} style={styles.box2}>
                                            <Icon name='chevron-forward-outline' type="ionicon" />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.paymentContainer}>
                                <Text style={styles.paymentTitle}>Payment Details</Text>
                                <View style={{ paddingTop: 10 }}>

                                    <View style={styles.mrpContainer}>
                                        <Text style={[styles.addressText, { fontSize: 13 }]}>MRP Total</Text>
                                        <Text style={[styles.addressText, { fontSize: 13 }]}>525.00</Text>
                                    </View>
                                    <View style={styles.mrpContainer}>
                                        <Text style={[styles.addressText, { fontSize: 13 }]}>Shiping Charge</Text>
                                        <Text style={[styles.addressText, { fontSize: 13 }]}>25.00</Text>
                                    </View>
                                    <View style={styles.couponContainer}>
                                        <View >
                                            <Text style={[styles.addressText, { fontSize: 13 }]}>Coupon Discount</Text>
                                            <Text style={[styles.addressText, { fontSize: 11, color: Colors.baseColor, paddingTop: 4 }]}>FIRST50 applied</Text>
                                        </View>
                                        <View style={styles.discount}>
                                            <Text style={[styles.addressText, { fontSize: 13 }]}>-25.00</Text>
                                        </View>
                                    </View>

                                    <View style={styles.discountContainer}>
                                        <View >
                                            <Text style={[styles.addressText, { fontSize: 16, color: Colors.dark }]}>Total Amount</Text>
                                            <Text style={[styles.addressText, { fontSize: 11, color: Colors.button_color_1, paddingTop: 4 }]}>You save $50 in this order</Text>
                                        </View>
                                        <View style={{ flexDirection: 'column', justifyContent: 'flex-start' }}>
                                            <Text style={[styles.addressText, , { fontSize: 16, color: Colors.dark }]}>500.00</Text>
                                        </View>
                                    </View>

                                </View>

                            </View>

                            <View style={styles.paymentContainer}>
                                <Text style={styles.shipingTitle}>Offer Applied</Text>
                                <View style={styles.shipingImg}>
                                    <View style={{flex:0.8}}>
                                        <Image
                                            style={{ width: 30, height: 30 }}
                                            // source={itemImageURL}
                                            source={require('../assets/images/sale.png')}
                                            resizeMode="cover"
                                        />
                                    </View>
                                    <View style={{ paddingLeft: 15,flex:9 }}>
                                        <Text style={{ fontSize: 13 }}> 250 gm Surf excel free</Text>
                                        <Text style={{ fontSize: 12, color: Colors.baseColor }}> Rs. 25</Text>
                                    </View>
                                </View>
                            </View>

                            <View style={styles.paymentContainer}>
                                <Text style={styles.paymentMode}>Payment Mode</Text>

                                <TouchableOpacity style={styles.paymentOption1}>
                                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-start' }}>
                                        <View>
                                            <Image
                                                style={{ width: 25, height: 25 }}
                                                // source={itemImageURL}
                                                source={require('../assets/images/cashpay.png')}
                                                resizeMode="cover"
                                            />
                                        </View>
                                        <View style={{ flexDirection: 'column', justifyContent: 'center', paddingLeft: 10 }}><Text style={{ fontSize: 13 }}> Pay with cash</Text></View>
                                    </View>
                                    <View style={{ flexDirection: 'column', justifyContent: 'center' }}>
                                        <View style={{ height: 13, width: 13, borderRadius: 13, borderWidth: 0.5, backgroundColor: '#000' }}></View>
                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity style={{ paddingTop: 10, flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-start' }}>
                                        <View>
                                            <Image
                                                style={{ width: 23, height: 23 }}
                                                // source={itemImageURL}
                                                source={require('../assets/images/cardpay.png')}
                                                resizeMode="cover"
                                            />
                                        </View>
                                        <View style={{ flexDirection: 'column', justifyContent: 'center', paddingLeft: 10 }}><Text style={{ fontSize: 13 }}> Pay Online</Text></View>
                                    </View>
                                    <View style={{ flexDirection: 'column', justifyContent: 'center' }}>
                                        <View style={{ height: 13, width: 13, borderRadius: 13, borderWidth: 0.5, backgroundColor: '#fff' }}></View>
                                    </View>
                                </TouchableOpacity>

                            </View>

                            <View style={{ padding: 20, paddingTop: 0, marginTop: 20, backgroundColor: 'white', borderTopWidth: 1, borderTopColor: Colors.border }}>
                                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', paddingTop: 20 }}>
                                    <View style={{ flex: 1 }}>
                                        <View>
                                            <Text style={{ fontSize: 13, letterSpacing: 0.5 }}>Your payable bill</Text>
                                            <Text style={{ fontSize: 16, letterSpacing: 0.5, fontWeight: '700', paddingTop: 5, color: Colors.baseColor }}>Rs.500</Text>
                                        </View>
                                    </View>
                                    <View style={{ flex: 1 }}>
                                        <CustomButton
                                            name="Place Order"
                                            // onPress={()=>{this.props.navigation.navigate("MyBasketScreen")}}
                                            buttonColor={Colors.text_seconday_color}
                                        // buttonIcon={<Icon name='locate-outline' type="ionicon" color={'#FFF'} />}
                                        />
                                    </View>
                                </View>

                            </View>



                        </ScrollView>
                    </View>



                </View>
            </KeyboardAvoidingView>
        )
    }

}

const styles = StyleSheet.create({
    container: { flex: 1, marginTop: StatusBar.currentHeight, backgroundColor: '#E5E5E5' },
    mainView: { flex: 1, flexDirection: "column", },
    contentBody: { flex: 1 },

    addressContainer: { padding: 20, backgroundColor: 'white' },
    shipingAdd: { fontWeight: '700', letterSpacing: 0.5, fontSize: 18 },
    addressText: { fontWeight: '700', letterSpacing: 0.5, marginBottom: 5, color: Colors.itemBorder },

    itemContainer: { padding: 20, paddingTop: 0, marginTop: 20, backgroundColor: 'white' },
    promoContainer: { padding: 20, paddingTop: 10, marginTop: 20, backgroundColor: 'white' },
    paymentContainer: { padding: 20, paddingTop: 0, marginTop: 20, backgroundColor: 'white' },
    paymentTitle: { fontWeight: '700', letterSpacing: 0.5, fontSize: 18, paddingTop: 15 },

    mrpContainer: { flexDirection: 'row', justifyContent: 'space-between' },
    couponContainer: { flexDirection: 'row', justifyContent: 'space-between', paddingTop: 5 },
    discount: { flexDirection: 'column', justifyContent: 'center' },

    discountContainer: {
        flexDirection: 'row', paddingTop: 8, justifyContent: 'space-between',
        marginTop: 10, borderWidth: 0.4, borderBottomWidth: 0,
        borderLeftWidth: 0, borderRightWidth: 0
    },
    shipingTitle: { fontWeight: '700', letterSpacing: 0.5, fontSize: 18, paddingTop: 15 },
    shipingImg: { paddingTop: 10, flex: 1, flexDirection: 'row', justifyContent: 'center',alignItems:'center' },

    paymentMode: { fontWeight: '700', letterSpacing: 0.5, fontSize: 18, paddingTop: 15 },
    paymentOption1: {
        paddingTop: 10, flex: 1, flexDirection: 'row',
        justifyContent: 'space-between', borderBottomWidth: 0.3,
        paddingBottom: 10
    },







});


export default MyBasketScreen;