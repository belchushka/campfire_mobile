import React from "react";
import s from "./style";
import { LoginForm } from "box/features";
import { MainLayout } from "box/layouts";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Container } from "box/shared";

const Index = () => {
  return (
    <MainLayout>
      <Container style={s.wrapper}>
        <KeyboardAwareScrollView>
          <LoginForm />
        </KeyboardAwareScrollView>
      </Container>
    </MainLayout>
  );
};

export default Index;
