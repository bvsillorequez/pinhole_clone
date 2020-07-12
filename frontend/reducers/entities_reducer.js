import { combineReducers } from 'redux'
import usersReducer from './users_reducer'
import PostReducer from './posts_reducer'

const entitiesReducer = combineReducers({
  users: usersReducer,
  posts: PostReducer
});

export default entitiesReducer;