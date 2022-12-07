import React, { useState } from "react";
import {
  CheckboxCard,
  Container,
  Header,
  IconButton,
  Input,
  LayoutSaveScrollView,
  PillButton,
  Space,
  StepBar,
} from "box/shared";
import { colors, setFont } from "styles/index";
import { MainLayout } from "box/layouts";
import { useNavigation } from "@react-navigation/native";
import { View, Text } from "react-native";
import s from "./style";
import { useForm } from "react-hook-form";

const Index = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const { control } = useForm();
  const navigate = useNavigation();
  const goBack = async () => {
    navigate.goBack();
  };
  return (
    <MainLayout>
      <Header
        center={<StepBar totalStep={3} currentStep={currentStep} />}
        left={
          <IconButton
            size={30}
            color={colors.primary}
            icon={"arrow-back"}
            onClick={goBack}
          />
        }
      />
      <LayoutSaveScrollView withTabBar={true}>
        {(() => {
          switch (currentStep) {
            case 0:
              return (
                <Container>
                  <Text style={[s.quiz_title, setFont("bold")]}>
                    Привет! Как прошел твой день?
                  </Text>
                  <Space height={20} />
                  <CheckboxCard text={"Отлично!"} />
                  <Space height={10} />
                  <CheckboxCard text={"Неплохо"} />
                  <Space height={10} />
                  <CheckboxCard text={"Ужасно"} />
                  <Space height={10} />
                </Container>
              );
            case 1:
              return (
                <Container>
                  <Text style={[s.quiz_title, setFont("bold")]}>
                    Как тебе завтрак
                  </Text>
                  <Space height={20} />
                  <CheckboxCard text={"Понравился!"} />
                  <Space height={10} />
                  <CheckboxCard text={"Не очень"} />
                  <Space height={10} />
                  <CheckboxCard text={"Отвратительный"} />
                  <Space height={10} />
                </Container>
              );
            case 2:
              return (
                <Container>
                  <Text style={[s.quiz_title, setFont("bold")]}>
                    Какие впечатления о квесте "Пираты карибского моря"
                  </Text>
                  <Space height={20} />
                  <Input
                    inputProps={{
                      multiline: true,
                      numberOfLines: 4,
                      textAlignVertical: "top",
                    }}
                    placeholder={"Начните ввод"}
                    control={control}
                    name={"ioasjkdoik"}
                  />
                </Container>
              );
          }
        })()}
      </LayoutSaveScrollView>
      <View style={s.controls}>
        <View style={s.control}>
          <PillButton
            preset={"grey"}
            onClick={() => setCurrentStep((state) => state + 1)}
          >
            Пропустить
          </PillButton>
        </View>
        <View style={s.control}>
          <PillButton onClick={() => setCurrentStep((state) => state + 1)}>
            Далее
          </PillButton>
        </View>
      </View>
    </MainLayout>
  );
};

export default Index;
