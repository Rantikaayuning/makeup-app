import { combineReducers } from "redux";
import HomepageReducer from "./reducers/HomepageReducer";

const rootReducer = combineReducers({
    homepage : HomepageReducer,
});

export default rootReducer;
