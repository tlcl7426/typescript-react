import { combineReducers, configureStore, Action } from '@reduxjs/toolkit';
import { todoReducer } from './todoReducer';
import { useReducer } from './userReducer';

const rootReducer = combineReducers({
  todo: todoReducer,
  use: useReducer,
});
export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
