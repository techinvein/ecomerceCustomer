import {
    StyleSheet
} from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ddd"
    },
    image: {
        width:"100%",
        height: 330,
        marginTop: 5
    },
    whtsappCont: {
        flex: 1, 
        flexDirection: "row", 
        alignItems: "center", 
        height: 60, 
        marginTop: 20, 
        backgroundColor: "#fff"
    },
    textCont: {
        flex: 6, 
        alignItems: "flex-start", 
        justifyContent: "center",
        marginLeft: 15
    },
    joinButton: {
        flex: 4, 
        alignItems: "center", 
        justifyContent: "center",
    },
    text: {
        fontFamily: "Poppins-Regular",
        fontSize: 15
    },
    joinText: {
        fontFamily: "Poppins-Regular",
        fontSize: 15,
        paddingHorizontal: 30,
        paddingVertical: 5,
        backgroundColor: "#30cb3f",
        color: "#fff",
        borderRadius: 10
    },
    callText: {
        fontFamily: "Poppins-Regular",
        fontSize: 15,
        paddingHorizontal: 30,
        paddingVertical: 5,
        backgroundColor: "#de771b",
        color: "#fff",
        borderRadius: 10
    },
    formContainer: {
        // flex: 1,
        // alignItems: "flex-start", 
        // justifyContent: "center",
        // height: 60, 
        marginTop: 20, 
        backgroundColor: "#fff",
        height: 500
    },
    emailText: {
        fontFamily: "Poppins-Regular",
        fontSize: 15,
        marginLeft: 15,
        marginTop: 30
    },
    form: {
        // flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },

    inputTxt: {
        width: "95%",
        height: 45,
        marginTop: 20,
        // lineHeight: 40,
        textAlign: "left",
        // paddingRight: 15,
        // paddingLeft: 15,
        paddingTop: 10,
        paddingBottom: 7,
        fontFamily: "Poppins-Regular",
        color: "#666666", 
        // borderBottomColor: "#aaa",
        // borderBottomWidth: 1
    },
    sendButton: {
        marginTop: 30,
    },
    sendText: {
        fontFamily: "Poppins-Regular",
        fontSize: 15,
        paddingHorizontal: "30%",
        paddingVertical: 8,
        backgroundColor: "#de771b",
        color: "#fff",
        borderRadius: 10
    },
})