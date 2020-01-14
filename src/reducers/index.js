import { combineReducers } from "redux";
import vendor from "./vendorReducer"
import filter from "./filterReducer"

const rootReducer = combineReducers({
  vendor,
  filter
});

export default rootReducer;
