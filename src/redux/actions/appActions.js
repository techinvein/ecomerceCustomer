const UPDATE_INTERNET_STATUS = 'UPDATE_INTERNET_STATUS';
const UPDATE_LOADER_STATUS = 'UPDATE_LOADER_STATUS';

const updateInternetStatus = (status) => {
    return {
        type: UPDATE_INTERNET_STATUS,
        payload: status
    };
};

const updateLoaderStatus = (status) => {
    return {
        type: UPDATE_LOADER_STATUS,
        payload: status
    };
};

export { 
    UPDATE_LOADER_STATUS, UPDATE_INTERNET_STATUS, updateInternetStatus, updateLoaderStatus
}