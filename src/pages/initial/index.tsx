import React from "react";
import { LoadingOverlay, useInit } from "box/shared";

const Index = () => {
  const { loading } = useInit();
  return <LoadingOverlay loading={true} />;
};

export default Index;
