const status = (state = {
    mainLoaded: false,
    addLoaded: false,
    mainFilename: '',
    addFilename:''
}, action)=> {
    switch (action.type) {
        case "RECEIVE_WAGONS":
            return {...state, mainLoaded: true, mainFilename: action.filename};
        case "ADD_NEW_WAGONS":
            return{...state,addLoaded: true, addFilename: action.filename};
        default:
            return state;
    }
};
export default status;
