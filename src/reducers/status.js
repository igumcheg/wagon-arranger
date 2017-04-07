const status = (state = {
    loaded: false,
    mainFilename: '',
    addFilename:'',
    showFileNameInput: false,
    filename:''
}, action)=> {
    switch (action.type) {
        case "ADD_NEW_WAGONS":
            return{...state,loaded: true, addFilename: action.filename};
        case "OPEN_FILENAME_INPUT":
            return {...state,showFileNameInput: true};
        case "CLOSE_FILENAME_INPUT":
            return {...state,showFileNameInput: false};
        case "CHANGE_FILENAME":
            return {...state, filename: action.filename};
        case "SENT_SELECTED_WAGONS":
            return {...state, showFileNameInput: false};
        default:
            return state;
    }
};
export default status;
