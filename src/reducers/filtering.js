const filtering = (state = {}, action)=> {
    switch (action.type) {
        case "FILTER_WAGONS":
            return {value: action.value, parameter: action.parameter};

        case "DELETE_FILTER":
            return {};
        default:
            return state;
    }
};

export default filtering;