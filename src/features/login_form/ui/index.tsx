import React from "react";
import { Input } from "box/shared/ui/input";
import { Container } from "box/shared/ui/container";
import { Space } from "box/shared/ui/space";
import { Button } from "box/shared/ui/button";
import Logo from "assets/icons/logo";
import { KeyboardAvoidingView, Text, View, Alert } from "react-native";
import { setFont } from "styles/index";
import s from "./style";
import { SubmitHandler, useForm } from "react-hook-form";
import { useLoading, useTypedDispatch } from "box/shared";
import { login } from "../model";
import axios from "axios";
import { StackActions, useNavigation } from "@react-navigation/native";

type FormFields = {
  email: string;
  password: string;
};

export const LoginForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormFields>();
  const navigation = useNavigation();
  const dispatch = useTypedDispatch();
  const { loading, stopLoading, startLoading } = useLoading();
  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    startLoading();
    if (Object.values(errors).length == 0) {
      try {
        await dispatch(
          login({
            login: data.email,
            password: data.password,
          })
        );
        navigation.dispatch(
          StackActions.replace("home", {
            screen: "profile",
          })
        );
      } catch (e) {
        if (axios.isAxiosError(e)) {
          switch (e.response?.status) {
            case 403:
              Alert.alert("Неверный логин или пароль");
              break;
          }
        }
      }
    }
    stopLoading();
  };
  return (
    <View>
      <Logo
        style={{
          alignSelf: "center",
        }}
      />
      <View>
        <Space height={50} />
        <Input
          error={!!errors["email"]}
          control={control}
          name={"email"}
          rules={{ required: true }}
          placeholder={"Email"}
        />
        <Space height={20} />
        <Input
          secure={true}
          error={!!errors["password"]}
          control={control}
          name={"password"}
          rules={{ required: true }}
          placeholder={"Пароль"}
        />
        <Space height={30} />
        <Button onClick={handleSubmit(onSubmit)} loading={loading}>
          Войти
        </Button>
        <Space height={20} />
        <Text style={[setFont("semiBold"), s.forget_password]}>
          Забыли пароль?{" "}
          <Text style={[setFont("bold"), s.reset_text]}>Восстановить</Text>
        </Text>
      </View>
    </View>
  );
};
