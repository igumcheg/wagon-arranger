import {combineReducers} from 'redux'
import wagons from "./wagons";
import status from "./status";


const rootReducer = combineReducers({
  wagons,
  status
});

export default rootReducer;