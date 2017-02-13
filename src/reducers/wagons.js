let id = 0;
const wagons = (state = [], action)=> {
    console.log(action.type);
    console.log(JSON.stringify(action));
    switch (action.type) {
        case "RECEIVE_WAGONS":
            return action.wagons.map((wagon) =>(
            {...wagon, id: id++, new: false}
            ));
        case "ADD_NEW_WAGONS":
            return state.concat(action.wagons.map((wagon) =>(
            {...wagon, id: id++, new: true}
            )));
        default:
            return state;
    }
};

export default wagons;