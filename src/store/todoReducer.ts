import {
  createReducer,
  PayloadAction,
  createAction,
  Action,
  AnyAction,
} from '@reduxjs/toolkit';

const incremnt = createAction('todo/increment', (value: number) => {
  return {
    payload: {
      value,
    },
  };
});
type todoState = {
  value: number;
};
const decrement = createAction('todo/decrement', function pre(value: number) {
  return {
    payload: {
      value,
    },
  };
});
const init: todoState = {
  value: 0,
};
export const todoReducer = createReducer(init, (builder) => {
  builder
    .addCase(incremnt, (state, action) => {
      state.value = state.value + action.payload.value;
    })
    .addCase(decrement, (state, action) => {
      state.value -= action.payload.value;
    });
});
