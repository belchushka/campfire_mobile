import React from "react";
import { MainLayout } from "box/layouts";
import {
  Button,
  Container,
  LayoutSaveScrollView,
  useTypedDispatch,
} from "box/shared";
import { signOut } from "box/entities";
import { StackActions, useNavigation } from "@react-navigation/native";

const Index = () => {
  const dispatch = useTypedDispatch();
  const navigate = useNavigation();
  const logout = () => {
    dispatch(signOut());
    navigate.reset({
      index: 0,
      routes: [
        {
          name: "login" as never,
        },
      ],
    });
  };
  return (
    <MainLayout>
      <LayoutSaveScrollView withTabBar={false}>
        <Container>
          <Button onClick={logout}>Выйти</Button>
        </Container>
      </LayoutSaveScrollView>
    </MainLayout>
  );
};

export default Index;
