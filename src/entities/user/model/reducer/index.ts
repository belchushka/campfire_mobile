import { createSlice } from "@reduxjs/toolkit";

export interface IUser {
  login: string;
  id: number;
}

interface IInitialState {
  user: IUser | null;
  users: Array<IUser>;
}

const initialState: IInitialState = {
  user: null,
  users: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
    setUsers(state, action) {
      state.users = action.payload;
    },
  },
});

export const userReducer = userSlice.reducer;
export const { setUser, setUsers } = userSlice.actions;
