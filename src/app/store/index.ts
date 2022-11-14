import {
  ActionCreator,
  AnyAction,
  configureStore,
  ThunkAction,
} from "@reduxjs/toolkit";
import { authReducer, userReducer } from "box/entities";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
  },
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk = ActionCreator<
  ThunkAction<void, AppState, unknown, AnyAction>
>;
