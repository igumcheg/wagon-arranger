const wagons = (state = [], action)=> {
  console.log(action.type);
  switch (action.type) {
    case "RECEIVE_WAGONS":
     return action.wagons;
    default:
      return state;
  }
};

export default wagons;