import { AppThunk } from "box/app/store";
import { $authHost } from "box/shared";
import { removeAuthUser, setAuthUser } from "box/entities";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const getMe: AppThunk = () => async (dispatch) => {
  try {
    const { data } = await $authHost.get("/users/me");
    dispatch(setAuthUser(data.data));
  } catch (e) {}
};

export const signOut: AppThunk = () => async (dispatch) => {
  try {
    await AsyncStorage.removeItem("access_token");
    dispatch(removeAuthUser());
  } catch (e) {}
};
