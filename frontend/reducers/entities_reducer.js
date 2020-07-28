import { combineReducers } from 'redux'
import usersReducer from './users_reducer'
import PostReducer from './posts_reducer'
import ProfileReducer from './profile_reducer';
import LikeReducer from './like_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  posts: PostReducer,
  user: ProfileReducer,
  like: LikeReducer,
});

export default entitiesReducer;