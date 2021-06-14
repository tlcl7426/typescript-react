import { createAction, createReducer } from '@reduxjs/toolkit';
type state = Array<{ name: string }>;
const init: state = [{ name: 'zhang' }];

export const add = createAction('user/add', (name: string) => {
  return {
    payload: {
      name, //git config --global init.defaultBranch maingi
    },
  };
});
export const useReducer = createReducer(init, (builder) => {
  builder.addCase(add, (state, action) => {
    state.push({ name: action.payload.name });
  });
});
