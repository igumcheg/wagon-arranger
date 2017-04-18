const sorting = (state = {parameter: 'number'}, action)=> {
    switch (action.type) {
        case "SORT_COLUMNS":
            return {parameter:action.parameter};
        default:
            return state;
    }
};

export default sorting;
