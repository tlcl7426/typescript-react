import store from './store';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import type { RootState } from './rootReducer';
export type Appdispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<Appdispatch>();
export const useAppselector: TypedUseSelectorHook<RootState> = useSelector;
