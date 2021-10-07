import { Box } from "@chakra-ui/react";
import React, { useState } from "react";
import Lottie from "react-lottie";
import lottieAnimationData from "./lottie-logo-anim.json";

const LottieLogo: React.FC = ({}) => {
  const [isStopped, setIsStopped] = useState(false);

  return (
    <Box
      width="150px"
      height="150px"
      onClick={() => {
        setIsStopped(!isStopped);
      }}
    >
      <Lottie
        options={{
          autoplay: true,
          loop: false,
          animationData: lottieAnimationData,
        }}
        isStopped={isStopped}
        speed={2}
        width={"inherit"}
        height={"inherit"}
      />
    </Box>
  );
};

export default LottieLogo;
