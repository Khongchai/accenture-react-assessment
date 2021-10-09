import { Box } from "@chakra-ui/react";
import React from "react";
import Lottie from "react-lottie";
import lottieAnimationData from "./lottie-logo-anim.json";

const LottieLogo: React.FC = ({}) => {
  return (
    <Box width="150px" pointerEvents="none" height="150px">
      <Lottie
        options={{
          autoplay: true,
          loop: true,
          animationData: lottieAnimationData,
        }}
        width={"inherit"}
        height={"inherit"}
      />
    </Box>
  );
};

export default LottieLogo;
