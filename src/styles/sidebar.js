import { StyleSheet } from "react-native";

export default StyleSheet.create({
    menuWrapper:{
        flex: 1,
    },
    menuScroll:{
        flex: 1,
    },
    imgTextArea:{
        justifyContent:"center",
        alignItems:"center",
        height:210,
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
        fontSize:18,
    },
    mobile: {
        fontFamily: "Poppins-Regular",
        color:"#fff",
        fontSize:15,
        textAlign: "left"
    },
    username:{
        fontFamily: "Poppins-Regular",
        color:"#fff",
        fontSize:16,
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
        width:30,
        height:31,
    },
    shareImage: {
        width:40,
        height:40,
    },
    navText:{
        color:"#484949",
        fontFamily: "Poppins-SemiBold",
        fontSize:14,
        paddingLeft:15,
        width:"75%",
    },
    footer:{
        justifyContent:"center",
        alignItems:"center",
        height:100,
        backgroundColor: "#30cb3f",
        // alignSelf: "flex-end"
    },
    profileImg: {
        width: 100,
        height: 100,
        borderRadius: 100,
        borderWidth: 5,
        borderColor: "#fff",
        backgroundColor: "#de771b",
        justifyContent: "center",
        alignItems: "center",
    },
    profileText: {
        fontFamily: "Poppins-Regular",
        fontSize:80,
        color: "#fff",
        textAlign: "center",
        marginTop:15
    }
})