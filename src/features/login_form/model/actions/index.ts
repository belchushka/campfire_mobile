import { AppThunk } from "box/app/store";
import { $authHost } from "box/shared";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getMe, setAuthToken } from "box/entities";

export const login: AppThunk =
  (params: { login: string; password: string }) => async (dispatch) => {
    try {
      const { data } = await $authHost.post(
        "/auth/signin",
        {},
        {
          params: params,
        }
      );
      const access_token = data.data.access_token;
      await AsyncStorage.setItem("access_token", access_token);
      dispatch(setAuthToken(access_token));
      await dispatch(getMe());
    } catch (e) {
      console.log(e);
      throw e;
    }
  };
