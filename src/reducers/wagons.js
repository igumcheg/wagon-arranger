const wagons = (state = [], action)=> {
    console.log(action.type);
    switch (action.type) {
        case "ADD_NEW_WAGONS":
            return action.wagons;
        case "CHANGE_WAGON_FIELD":
            let newState = state.slice();
            newState.forEach((wagon, index)=> {
                if (wagon.wagon == action.wagonNumber) {
                    newState[index][action.fieldName] = action.newValue;
                }
            });
            return newState;
        case "SELECT_WAGONS":
            return state.map((wagon) => (
            {
                ...wagon,
                selected: action.wagonNumbers.indexOf(wagon.wagon) != -1
            }
            ));
        case "SENT_SELECTED_WAGONS":
        case "DESELECT_ALL":
            return state.map((wagon) => (
            {
                ...wagon,
                selected: false
            }
            ));
        case "SELECT_ALL":
            return state.map((wagon) => (
            {
                ...wagon,
                selected: true
            }
            ));
        default:
            return state;

    }
};

export default wagons;