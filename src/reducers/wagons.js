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
            newState = {...state};
            action.wagons.forEach((wagonItem)=> {
                let stateWagonEntry = state[wagonItem.wagon];
                let newWagonEntry = {
                    ...stateWagonEntry,
                    updated: wagonItem
                };
                newState[wagonItem.wagon] = newWagonEntry;
            });
            return newState;
        case "CHANGE_WAGON_FIELD":
            newState = {...state};
            newState[action.wagonNumber][action.isOld ? 'old' : 'new'][action.fieldName] = action.newValue;
            return newState;
        case "MERGE_WAGONS":
            newState = {};
            for (let wagonNumber in state) {
                let oldWagon = state[wagonNumber].old;
                let newWagon = state[wagonNumber].updated;


                newState[wagonNumber] = {};
                newState[wagonNumber].old = {...oldWagon, ...newWagon};
                console.log(JSON.stringify(newState));
                console.log("---------");
            }
            return newState;
        default:
            return state;

    }
};

export default wagons;