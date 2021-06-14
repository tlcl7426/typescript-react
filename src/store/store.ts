import { configureStore } from '@reduxjs/toolkit';

import { RootState } from './rootReducer';
import rootReducer from './rootReducer';
const store = configureStore({
  reducer: rootReducer,
});

export default store;
