let id = 0;
const wagons = (state = {}, action)=> {
    switch (action.type) {
        case "RECEIVE_WAGONS":
            let newState = {};
            action.wagons.forEach((wagonItem)=> {
                newState[wagonItem.wagon] = {
                    old: wagonItem
                }
            });
        return newState;
        case "ADD_NEW_WAGONS":
            newState = {};
            action.wagons.forEach((wagonItem)=> {
                let stateWagonEntry = state[wagonItem.wagon];
                let newWagonEntry = {
                    ...stateWagonEntry,
                    updated: wagonItem
                };
                newState[wagonItem.wagon] = newWagonEntry;
            });
            return newState;
        default:
            return state;
    }
};

export default wagons;