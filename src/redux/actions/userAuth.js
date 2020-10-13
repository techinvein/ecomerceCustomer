import AsyncStorage from "@react-native-community/async-storage";

/*LOGIN ACTION */
const USER_LOGIN_PENDING = 'USER_LOGIN_PENDING';
const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
const USER_LOGIN_ERROR = 'USER_LOGIN_ERROR';

const CHECK_LOGIN_SUCCESS = 'CHECK_LOGIN_SUCCESS';

/*RESEND OTP ACTION */
const USER_RESEND_OTP_PENDING = 'USER_RESEND_OTP_PENDING';
const USER_RESEND_OTP_SUCCESS = 'USER_RESEND_OTP_SUCCESS';
const USER_RESEND_OTP_ERROR = 'USER_RESEND_OTP_ERROR';

/*VERIFICATION OTP ACTION */
const VERIFICATION_OTP_PENDING = "VERIFICATION_OTP_PENDING"; 
const VERIFICATION_OTP_SUCCESS = "VERIFICATION_OTP_SUCCESS";
const VERIFICATION_OTP_ERROR = "VERIFICATION_OTP_ERROR";

/*REGISTRATION ACTION */
const REGISTRATION_PENDING = "REGISTRATION_PENDING";
const REGISTRATION_SUCCESS = "REGISTRATION_SUCCESS";
const REGISTRATION_ERROR = "REGISTRATION_ERROR";

/* PROFILE DETAILS */
const PROFILE_DETAILS_PENDING = "PROFILE_DETAILS_PENDING";
const PROFILE_DETAILS_SUCCESS = "PROFILE_DETAILS_SUCCESS"; 
const PROFILE_DETAILS_ERROR = "PROFILE_DETAILS_ERROR";


const UPDATE_USER_DETAILS = "UPDATE_USER_DETAILS";
const UPDATE_LOGIN_STATUS = "UPDATE_LOGIN_STATUS";

const storeUserDetails = (userDetails) => {
    return {
        type: UPDATE_USER_DETAILS,
        payload: userDetails
    };
};

const storeLoginStatus = (status) => {
   
    return {
        type: UPDATE_LOGIN_STATUS,
        payload: status
    };
};

/* User login */ 
const userLogin = (email,password) => {
    return async (dispatch) => {
        return new Promise(async (resolve, reject) => {
            dispatch({ type: USER_LOGIN_PENDING});
            try {
                fetch(commonData.BASE_URL+'login', {
                    method: 'POST',
                    headers: {
                      Accept: 'application/json',
                      'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                      email: email,
                      password: password
                    })
                  })
                  .then((response) => response.json())
                  .then((responseJson) => {
                    if(responseJson.status == 200 && responseJson.data ){

                        let verifiedCheck = responseJson.data.details.is_verified
                        if(verifiedCheck == '0'){
                            let dataRes = {status:true,message:"Login Success",is_varified:false};
                            dispatch({ type: USER_LOGIN_SUCCESS, payload: responseJson.token});
                            return resolve(dataRes);
                        }else{
                            let dataRes = {status:true,message:"Login Success",is_varified:true};
                            dispatch({ type: USER_LOGIN_SUCCESS, payload: responseJson.token});
                            return resolve(dataRes);
                        }
                        
                    }else{
                        console.log("responseJsonzcjcdj : ", responseJson)
                        let dataRes={status:false,message:responseJson.message}
                        dispatch({ type: USER_LOGIN_ERROR, payload: "Something went wrong, Please try again after some time."});
                        // return reject(dataRes);
                        return resolve(dataRes);
                         
                    }
                 })
                  .catch((error)=>{
                    // console.log(error)
                    let details={status:false,message:"Someting went wrong, Please try again"}
                    dispatch({ type: USER_LOGIN_ERROR, payload: error});
                    return resolve(details);
                  })

            } catch (error) {
                console.log(error)
                let details={status:false,message:"Someting went wrong, Please try again"}
                dispatch({ type: USER_LOGIN_ERROR, payload: error});
                return resolve(details);
            }
        })
    }
}


const checkLogin = (token) =>{
    return async (dispatch) => {
        return new Promise(async (resolve, reject) => {
            dispatch({ type: CHECK_LOGIN_SUCCESS});
            try {
                let dataRes = {status:true,message:"Token store successfully"};
                dispatch({ type: USER_LOGIN_SUCCESS, payload: token});
                return resolve(dataRes);
            } catch (error) {
                let dataRes = {status:false,message:"Something went wrong"};
                return resolve(dataRes);
            }
        })
    }
}

/* Resend OTP */
const resendOtp = (authToken) => {
    return async (dispatch) => {
        return new Promise(async (resolve, reject) => {
            dispatch({ type: USER_RESEND_OTP_PENDING});
            try {

                let body = new FormData(); 
                fetch(commonData.BASE_URL+'resend_otp', {
                  method: 'POST',
                  headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${authToken}`
                  },
                  body:{}
                })
                .then((response) => response.json())
                .then((responseJson) => {
                    console.log("resend OTP success :", responseJson)
                    if(responseJson.status == 200){
                        
                        let details={status:true,message:"OTP sent yo your registered Mobile number, please verify"}
                        dispatch({ type: USER_RESEND_OTP_SUCCESS});
                        return resolve(details);

                    }else{
                      //console.log(responseJson);
                      let details={status:false,message:"Account is not Active, Please try again"}
                      dispatch({ type: USER_RESEND_OTP_ERROR, payload: error});
                      return resolve(details);

                    }
               })
                .catch((error)=>{

                    let details={status:false,message:"Someting went wrong, Please try again"}
                    dispatch({ type: USER_RESEND_OTP_ERROR, payload: error});
                    reject(details);
                    return
                })





            } catch (error) {
                let details={status:false,message:"Someting went wrong, Please try again"}
                dispatch({ type: USER_RESEND_OTP_ERROR, payload: error});
                reject(details);
                return
            }
        })
    }
}

/* Registration */
const registration = (registration_details) => {
    return async (dispatch) => {
        return new Promise(async (resolve, reject) => {
            dispatch({ type: VERIFICATION_OTP_PENDING});
            try {
                // console.log("Registration action :", registration_details)
                let body = new FormData();
                body.append('name',registration_details.name);
                body.append('email',registration_details.email);
                body.append('password',registration_details.password);
                body.append('phone',registration_details.phoneNo);
                body.append('is_verified',0);
                body.append('profile_image',registration_details.image);
                fetch(commonData.BASE_URL+'register', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'multipart/form-data'
                },
                body: body
                })
                .then((response) => response.json())
                .then((responseJson) => {
                    // console.log("registration success : ", responseJson);
                    if(responseJson.status == 200){
                        let details={status:true,message:"Registration successfull, Please verify your account"}
                        dispatch({ type: USER_LOGIN_SUCCESS, payload: responseJson.data.token});
                        dispatch({ type: REGISTRATION_SUCCESS});
                        return resolve(details);
                    }else{
                        let details={status:false,message:responseJson.message}
                        dispatch({ type: REGISTRATION_ERROR});
                        return resolve(details);
                    }
                })
                .catch((error)=>{
                    let details={status:false,message:"Someting went wrong, Please try again"}
                    dispatch({ type: REGISTRATION_ERROR, payload: error});
                    reject(details);
                    return
                })
            } catch (error) {
                let details={status:false,message:"Someting went wrong, Please try again"}
                dispatch({ type: REGISTRATION_ERROR, payload: error});
                reject(details);
                return
            }
        })
    }
}

/* Verify OTP */
const verifyOtp = (verifyData) => {
    return async (dispatch) => {
        return new Promise(async (resolve, reject) => {
            dispatch({ type: VERIFICATION_OTP_PENDING});
            try {
                let body = new FormData();
                body.append('otp',verifyData.otp);
                const header = new Headers();
                fetch(commonData.BASE_URL+'otp_verification', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${verifyData.authToken}`
                },
                body: body
                })
                .then((response) => response.json())
                .then((responseJson) => {
                    if(responseJson.status == 200){
                        let details={status:true,message:"OTP verification successfull"}
                        dispatch({ type: VERIFICATION_OTP_SUCCESS});
                        return resolve(details);
                    }else{
                        let details={status:false,message:responseJson.message}
                        dispatch({ type: VERIFICATION_OTP_ERROR});
                        return resolve(details);
                    }
                })
                .catch((error)=>{
                    let details={status:false,message:"Someting went wrong, Please try again"}
                    dispatch({ type: VERIFICATION_OTP_ERROR, payload: error});
                    reject(details);
                    return
                })
            } catch (error) {
                let details={status:false,message:"Someting went wrong, Please try again"}
                dispatch({ type: VERIFICATION_OTP_ERROR, payload: error});
                reject(details);
                return
            }
        })
    }
}

/* Profile Details*/
const fetchProfiledetails = (authToken) => {
    return async (dispatch) => {
        return new Promise(async (resolve, reject) => {
            dispatch({ type: PROFILE_DETAILS_PENDING});
            try {
                
                const header = new Headers();
                fetch(commonData.BASE_URL+'user_profile', {
                  method: 'GET',
                  headers: {
                    Accept: 'application/json',
                    // 'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${authToken}`
                  },
                  // body: {}
                })
                .then((response) => response.json())
                .then((responseJson) => {
                    
                    if(responseJson){
                        console.log("fetch proile action: ", responseJson)
                        dispatch({ type: PROFILE_DETAILS_SUCCESS,payload:responseJson});
                        return resolve({status:true,message:"profile details fetch successfully"});
                    }else{
                        dispatch({ type: PROFILE_DETAILS_ERROR,payload:responseJson.message});
                        return resolve({status:false,message:responseJson.message});
                    }
               })
                .catch((error)=>{
                    dispatch({ type: PROFILE_DETAILS_ERROR,payload:error});
                    return resolve({status:false,message:"Something wend wrong; please try again"});
                })
            } catch (error) {
                let details={status:false,message:"Someting went wrong, Please try again"}
                dispatch({ type: PROFILE_DETAILS_ERROR, payload: error});
                reject(details);
                return
            }
        })
    }
}

export { 
    storeUserDetails, storeLoginStatus, UPDATE_LOGIN_STATUS, UPDATE_USER_DETAILS,
    USER_LOGIN_PENDING, USER_LOGIN_SUCCESS, USER_LOGIN_ERROR, userLogin ,
    CHECK_LOGIN_SUCCESS, checkLogin,
    USER_RESEND_OTP_PENDING, USER_RESEND_OTP_SUCCESS, USER_RESEND_OTP_ERROR, resendOtp,
    VERIFICATION_OTP_PENDING, VERIFICATION_OTP_SUCCESS, VERIFICATION_OTP_ERROR, verifyOtp,
    REGISTRATION_PENDING, REGISTRATION_SUCCESS, REGISTRATION_ERROR, registration,
    PROFILE_DETAILS_PENDING, PROFILE_DETAILS_SUCCESS, PROFILE_DETAILS_ERROR, fetchProfiledetails,
    // ADDITIONAL_PENDING,ADDITIONAL_SUCCESS,ADDITIONAL_ERROR, addAdditionaldetails 

}
