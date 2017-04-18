import {combineReducers} from 'redux'
import wagons from "./wagons";
import status from "./status";
import sorting from "./sorting";


const rootReducer = combineReducers({
  wagons,
  status,
  sorting
});

export default rootReducer;