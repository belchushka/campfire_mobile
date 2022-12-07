import { useLoading, useTypedDispatch } from "box/shared";
import { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getMe, setAuthToken } from "box/entities";
import { StackActions, useNavigation } from "@react-navigation/native";

export const useInit = () => {
  const { loading, stopLoading, startLoading } = useLoading();
  const dispatch = useTypedDispatch();
  const navigate = useNavigation();

  const initFn = async () => {
    startLoading();
    try {
      const access_token = await AsyncStorage.getItem("access_token");
      if (access_token) {
        await dispatch(getMe());
        await dispatch(setAuthToken(access_token));
        navigate.dispatch(
          StackActions.replace("home", {
            screen: "profile",
          })
        );
      } else {
        throw new Error("Not authorized");
      }
    } catch (e) {
      navigate.dispatch(StackActions.replace("login"));
    }
    stopLoading();
  };

  useEffect(() => {
    initFn();
  }, []);

  return {
    loading,
  };
};
