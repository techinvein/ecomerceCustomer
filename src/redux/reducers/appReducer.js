import { UPDATE_INTERNET_STATUS, UPDATE_LOADER_STATUS } from "../actions/appActions";

export const initialState = {
  loading: false,
  isInternetAvailable: true
};
  
const AppReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case UPDATE_INTERNET_STATUS:
            return { ...state, isInternetAvailable: payload };

        case UPDATE_LOADER_STATUS:
            return { ...state, loading: payload };

        default:
            return state;
    }
};
  
export default AppReducer;