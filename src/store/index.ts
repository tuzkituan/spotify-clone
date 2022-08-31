import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import userReducer from './actions/userSlice';
import songsReducer from './actions/songsSlice';
import loadingReducer from './actions/loadingSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    songs: songsReducer,
    loading: loadingReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
