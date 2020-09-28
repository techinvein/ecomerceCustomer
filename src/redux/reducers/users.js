import { UPDATE_LOGIN_STATUS, UPDATE_USER_DETAILS } from "../actions/userAuth";

export const initialState = {
  userDetails: null,
  isUserLoggedIn: false
};
  
const UserReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case UPDATE_USER_DETAILS:
          return { ...state, userDetails: payload };

        case UPDATE_LOGIN_STATUS:
          return { ...state, isUserLoggedIn: payload };

        default:
          return state;
    }
};
  
export default UserReducer;