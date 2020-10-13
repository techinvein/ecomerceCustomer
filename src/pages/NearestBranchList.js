import React, { Component } from 'react'
import { Text, View, StyleSheet, Dimensions, FlatList, StatusBar,TouchableOpacity } from 'react-native'
import  Colors  from '../constants/Colors';
import { Icon } from 'react-native-elements';
import { CheckBox } from 'react-native-elements'
import SaveAddressListComponent from '../components/saveaAddressLIstComponent';
import CustomHeader from '../components/CustomHeader';
//import ActionSheet from 'react-native-actionsheet'
const searchbarContainerStyle = {
    backgroundColor:Colors.primary,
    borderTopColor:Colors.primary,
    borderBottomColor:Colors.primary,
    paddingLeft:20,
    paddingRight:20,
    paddingTop:0
}

export default class NearestBranchList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      saveAddressList: [{
        saveAs: '2 km from you',
        name: 'KESTOPUR BRANCH',
        mobileno: '+91 123456789',
        street_or_building_or_flat: 'Boishakhi Plaza, 77/2 Elgin Road',
        fullAddress: 'Ragarhat, Pin- 700058, Kolkata, WestBengal,India',
        seleted:false,
        nearest:'2'
      },
      {
        saveAs: '5 km from you',
        name: 'GARIYA BRANCH',
        mobileno: '+91 123456789',
        street_or_building_or_flat: 'TR Limited, 77/2 Saltlake Road',
        fullAddress: 'Ragarhat, Pin- 700058, Kolkata, WestBengal,India',
        seleted:false,
        nearest:'5'
      },
      ]
    }
  }
  addNewAdd() {
    this.props.navigation.navigate('AddDeliveryAddress');
  }
 
  SelectAddress(index){
    let arr = this.state.saveAddressList;
    if (arr) {
        for (let i = 0; i <arr.length; i++) {
            if (i == index) {
                arr[i].seleted = true;
            } else {
                arr[i].seleted = false;
            }
        }
        this.setState({ addressTypes: arr}, () => {
          this.props.navigation.navigate('Home');
        })
    }
  }
  fetchAddressListItem = ({ item, index }) => {
    return (
        
      <SaveAddressListComponent
        type ={'branch'}
        CheckBoxBoolean = {item.seleted}
        FirstRowText = {item.name}
        SecondRowText = {item.street_or_building_or_flat}
        ThirdRowText = {item.fullAddress}
        FourthRowText = {item.mobileno}
        MoreIconClick={() => this.morebtnAction()}
        CheckBoxIconClick={() => this.SelectAddress(index)}
        tag ={item.nearest}
        TagText ={item.saveAs}
        tagWidth = '45%'
      />
     
    )
  }
  morebtnAction = () => {
    //this.ActionSheet.show()
  }
//   loadingActionSheet(){
//     return(
//       <View>
//         <ActionSheet
//           ref={o => this.ActionSheet = o}
//           title={'Choose one do you like ?'}
//           options={['Edit Address', 'Delete Address', 'Cancel']}
//           cancelButtonIndex={2}
//           destructiveButtonIndex={1}
//           onPress={(index) => {  }}
//         />
//       </View>
//     )
// } 
  render() {
    return (
      <View style={styles.mainContainer}>
    
        <View>
        <CustomHeader 
            title={'Available Branches'} 
            headerBackground={Colors.primary}
            name="Sudipta Sarkar" 
            day="1 day ago" showBack={false} showCart={true} 
            searchbarContainerStyle={searchbarContainerStyle} 
            showSearchBar={false}
            showBack={true} showCart={false} 
            cartClick={()=>{  }}
            navigation={this.props.navigation}
        />
    </View>
        <View style={styles.heading}>
          <Text style={styles.box1Text}>Choose your nearest branch </Text>
        </View>
        {/* <TouchableOpacity onPress={() => { this.addNewAdd() }} style={styles.box2}>
         <Icon name='ios-add-circle' type="ionicon"  />
          
          <Text style={styles.addAddressText}>Add New Address</Text>
        </TouchableOpacity> */}
          <FlatList
            //horizontal={true}
            data={this.state.saveAddressList}
            renderItem={this.fetchAddressListItem}
            showsHorizontalScrollIndicator={false}
            extraData={this.state}
            keyExtractor={(item, index) => index.toString()}
            blurOnSubmit={true}
          />
         
     
      </View>
    )
  }
}
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    //backgroundColor:'#fff',
    marginTop:StatusBar.currentHeight
  },
  mainView:{ 
    flex:1,flexDirection:"column"
},

  heading: { alignItems: 'center', borderBottomWidth:1.5,borderBottomColor:Colors.border ,paddingVertical:20},
  box1Text: { fontSize: 24, fontWeight: '500' },
  box2: {
    marginTop: 40,
    justifyContent: 'center',
    paddingVertical: 2,
    width: Dimensions.get('window').width,
    flexDirection: 'row', alignItems: 'center',
    paddingTop: 2,
    //borderColor: colorPlates.GREY_SHADES.MIDIUM,
    borderWidth: 1
  },
  sub_one_icon: {
    paddingLeft: 8,
  },
  addAddressText: {
    fontSize: 18,
    marginLeft: 12,
    //color: colorPlates.GREEN_SHADES.PRIMARY
  },
  

})
