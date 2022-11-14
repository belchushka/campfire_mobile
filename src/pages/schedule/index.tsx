import React from "react";
import { MainLayout } from "box/layouts";
import {
  Container,
  Header,
  IconButton,
  LayoutSaveScrollView,
} from "box/shared";
import { colors } from "styles/index";
import { ScheduleWidget } from "box/widgets";

const Index = () => {
  return (
    <MainLayout>
      <Header
        left={
          <IconButton
            size={30}
            color={colors.primary}
            icon={"arrow-back"}
            onClick={() => null}
          />
        }
        centerText={"24 августа, Среда"}
        right={
          <IconButton
            size={30}
            color={colors.primary}
            icon={"arrow-forward"}
            onClick={() => null}
          />
        }
      />
      <LayoutSaveScrollView withTabBar={true}>
        <Container>
          <ScheduleWidget />
        </Container>
      </LayoutSaveScrollView>
    </MainLayout>
  );
};

export default Index;
