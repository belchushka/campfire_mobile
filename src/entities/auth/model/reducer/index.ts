import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "box/entities";

interface IInitialState {
  user: IUser | null;
  token: string;
  isAuth: boolean;
}

const initialState: IInitialState = {
  user: null,
  token: "",
  isAuth: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthUser(state, action) {
      state.user = action.payload;
    },
    setAuthToken(state, action) {
      state.token = action.payload;
      state.isAuth = true;
    },
    removeAuthUser(state) {
      state.user = null;
      state.token = "";
      state.isAuth = false;
    },
  },
});

export const authReducer = authSlice.reducer;
export const { setAuthUser, removeAuthUser, setAuthToken } = authSlice.actions;
