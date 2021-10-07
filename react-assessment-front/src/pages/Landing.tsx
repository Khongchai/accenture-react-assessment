import React from "react";
import Dashboard from "../components/Dashboard";
import MainWrapper from "../components/shared/MainWrapper";

interface LandingProps {}

const Landing: React.FC<LandingProps> = ({}) => {
  return (
    <MainWrapper>
      <Dashboard />
    </MainWrapper>
  );
};

export default Landing;
