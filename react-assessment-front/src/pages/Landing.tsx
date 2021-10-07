import { Divider } from "@chakra-ui/react";
import React from "react";
import ActionSection from "../components/Dashboard/ActionSection";
import DashboardBackground from "../components/Dashboard/DashboardBackground";
import MainWrapper from "../components/shared/MainWrapper";

interface LandingProps {}

const Landing: React.FC<LandingProps> = ({}) => {
  return (
    <MainWrapper>
      <DashboardBackground>
        <ActionSection />
        <Divider marginTop="2rem" marginBottom="2rem" type="blue" />
      </DashboardBackground>
    </MainWrapper>
  );
};

export default Landing;
