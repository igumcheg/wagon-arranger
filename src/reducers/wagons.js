const wagons = (state = [], action)=> {
  switch (action.type) {
    case "RECEIVE_WAGONS":
      let newState = [];
      action.wagons.forEach((wagonItem)=> {
        newState.push({
          old: wagonItem
        })
      });
      return newState;
    case "ADD_NEW_WAGONS":
      newState = state.slice();
      action.wagons.forEach((wagonItem)=> {
        state.forEach((oldWagonItem, index)=> {
          if (oldWagonItem.old.wagon == wagonItem.wagon) {
            let newWagonEntry = {
              ...oldWagonItem,
              updated: wagonItem
            };
            newState[index] = newWagonEntry;
          }
        })
      });
      return newState;
    case "CHANGE_WAGON_FIELD":
      newState = state.slice();
      newState.forEach((wagon, index)=> {
        if (wagon.wagon == action.wagonNumber) {
          newState[index][action.isOld ? 'old' : 'new'][action.fieldName] = action.newValue;
        }
      });
      return newState;
    case "MERGE_WAGONS":
      newState = state.slice();
      state.forEach((wagon, index) => {
        newState[index] = {old: {...wagon.old, ...wagon.updated}}
      });
      return newState;

    default:
      return state;

  }
};

export default wagons;