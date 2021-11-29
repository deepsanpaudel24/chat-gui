import { combineReducers } from "redux";
import chatMessageReducer from "./chat/reducer";

const rootReducer = combineReducers({
  chatMessages: chatMessageReducer,
});

export default rootReducer;
