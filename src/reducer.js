import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import { drizzleReducers } from "drizzle";
import personnelReducer from "./redux/Pessonnel/personnelReducers";
const reducer = combineReducers({
  routing: routerReducer,
  personnelReducer,
  ...drizzleReducers
});

export default reducer;
