import { StatusBar, StyleSheet } from "react-native";

export default StyleSheet.create({
    menuWrapper:{
        flex: 1,
        marginTop:14
        // top:StatusBar.currentHeight
    },
    menuScroll:{
        flex: 1,
    },
    imgTextArea:{
        justifyContent:"center",
        alignItems:"center",
        height:180,
        backgroundColor: "#30cb3f"
    },
    backgroundImg: {
        width: "100%",
        height: 500
    },
    userImage:{
        width:80,
        height:80,
        borderColor:"#ffc06b",
        borderWidth:5,
        borderRadius:50,
    },
    userText:{
        marginTop: 10,
        fontFamily: "Poppins-Regular",
        color:"#fff",
        fontSize:14,
    },
    mobile: {
        fontFamily: "Poppins-Regular",
        color:"#fff",
        fontSize:14,
        textAlign: "left"
    },
    username:{
        fontFamily: "Poppins-Regular",
        color:"#fff",
        fontSize:12,
    },

    link:{
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        paddingLeft:10,
        paddingRight:10,
        paddingTop:10,
        paddingBottom:10,
    },
    menuImage:{
        width:25,
        height:26,
    },
  
    shareImage: {
        width:40,
        height:40,
    },
    navText:{
        color:"#484949",
        fontFamily: "Poppins-SemiBold",
        fontSize:13,
        paddingLeft:15,
        width:"75%",
    },
    footer:{
       // justifyContent:"center",
       // alignItems:"center",
       // height:100,
        //backgroundColor: "#30cb3f",
        // alignSelf: "flex-end"
    },
    footerdes:{
        justifyContent:"center",
        alignItems:"center",
       height:100,
        backgroundColor: "#30cb3f",
    },
    profileImg: {
        width: 80,
        height: 80,
        borderRadius: 100,
        borderWidth: 5,
        borderColor: "#fff",
        backgroundColor: "#de771b",
        justifyContent: "center",
        alignItems: "center",
    },
    profileText: {
        fontFamily: "Poppins-Regular",
        fontSize:50,
        color: "#fff",
        textAlign: "center",
        marginTop:15
    },
    imgContainer:{
        opacity:0.5
    },

})