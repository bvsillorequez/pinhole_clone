import { combineReducers } from 'redux'
import usersReducer from './users_reducer'
import PostReducer from './posts_reducer'
import ProfileReducer from './profile_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  posts: PostReducer,
  user: ProfileReducer,
});

export default entitiesReducer;