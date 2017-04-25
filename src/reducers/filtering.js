const filtering = (state = {}, action)=> {
    switch (action.type) {
        case "FILTER_WAGONS":
            return {value: action.value, parameter: action.parameter};
        default:
            return state;
    }
};

export default filtering;
