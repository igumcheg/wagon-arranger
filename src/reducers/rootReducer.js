import {combineReducers} from 'redux'
import wagons from "./wagons";
import status from "./status";
import sorting from "./sorting";
import filtering from "./filtering";


const rootReducer = combineReducers({
  wagons,
  status,
  sorting,
  filtering
});

export default rootReducer;