import React from "react";
import { MainLayout } from "box/layouts";
import {
  Container,
  GradientBox,
  Header,
  IconButton,
  LayoutSaveScrollView,
  LoadingOverlay,
  Space,
  TextPill,
  useAuth,
  useFetch,
  useTypedDispatch,
} from "box/shared";
import { Avatar, getMe, signOut } from "box/entities";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import s from "./style";
import { colors, setFont } from "styles/index";
import Icon from "react-native-vector-icons/Ionicons";
import { StackActions, useNavigation } from "@react-navigation/native";
import { EventsWidget } from "box/widgets";

const Index = () => {
  const { loading } = useFetch({ action: () => getMe() }, []);
  const { user } = useAuth();
  const navigate = useNavigation();
  const goToSettings = () => navigate.dispatch(StackActions.push("settings"));
  const dispatch = useTypedDispatch();
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
      <Header
        centerText={<Text>Профиль</Text>}
        right={
          <IconButton
            size={30}
            color={colors.primary}
            icon={"exit"}
            onClick={logout}
          />
        }
      />
      <LayoutSaveScrollView withTabBar={true}>
        <LoadingOverlay loading={loading} />
        <Container>
          <Avatar size={"xl"} src={null} />
          <Space height={20} />
          <Text style={[s.name, setFont("bold")]}>{user.login}</Text>
          <Space height={25} />
        </Container>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          style={s.pills}
          horizontal={true}
        >
          <TextPill style={s.pills_pill} type={"filled"}>
            1 отряд
          </TextPill>
          <TextPill style={s.pills_pill}>17 комната</TextPill>
          <TextPill style={s.pills_pill} type={"filled"}>
            1 отряд
          </TextPill>
          <TextPill style={s.pills_pill}>17 комната</TextPill>
          <TextPill style={s.pills_pill} type={"filled"}>
            1 отряд
          </TextPill>
          <TextPill style={s.pills_pill}>17 комната</TextPill>
          <TextPill style={s.pills_pill} type={"filled"}>
            1 отряд
          </TextPill>
          <TextPill style={s.pills_pill}>17 комната</TextPill>
        </ScrollView>
        <Container>
          <Space height={20} />
          <GradientBox style={[s.day_feedback_gradient]}>
            <TouchableOpacity style={[s.day_feedback]}>
              <View>
                <Text style={[s.day_feedback_title, setFont("semiBold")]}>
                  Как прошёл твой день?
                </Text>
                <Space height={2} />
                <Text style={[s.day_feedback_subtitle, setFont("regular")]}>
                  Сделаем лагерь лучше вместе
                </Text>
              </View>
              <Icon name="arrow-forward" color={"white"} size={28} />
            </TouchableOpacity>
          </GradientBox>
          <Space height={40} />
          <EventsWidget />
        </Container>
      </LayoutSaveScrollView>
    </MainLayout>
  );
};

export default Index;
