import UsersReducer from './reducers/UsersReducer';
import { configureStore } from '@reduxjs/toolkit';

export default configureStore({
  reducer: {
    usersList: UsersReducer,
  },
})