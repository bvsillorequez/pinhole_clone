import { combineReducers } from "redux";
import sessionErrorsReducer from "./session_errors_reducer";
import PostErrorsReducer from "./post_errors_reducer";

const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  posts: PostErrorsReducer,
});

export default errorsReducer;