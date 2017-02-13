const wagons = (state = [], action)=> {
  console.log(action.type);
  console.log(JSON.stringify(action));
  switch (action.type) {
    case "RECEIVE_WAGONS":
     return action.wagons;
    default:
      return state;
  }
};

export default wagons;