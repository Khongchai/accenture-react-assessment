import { Box } from "@chakra-ui/react";
import React from "react";
import displayBreakPoints from "../../../const/displayBreakpoints";

const BackgroundDecor = () => {
  const sharedStyles = {
    backgroundSize: "contain",
    position: "fixed",
    backgroundRepeat: "no-repeat",
  } as any;

  return (
    <Box
      position="fixed"
      backgroundColor="white"
      width="100vw"
      height="100vh"
      top="0"
      left="0"
      z-index="0"
      pointerEvents="none"
    >
      <Box
        className="backgrounds"
        backgroundImage="url('decorations/background/top-left.svg')"
        width={["200px", null, "300px", null, "400px"]}
        height={["200px", null, "300px", null, "400px"]}
        top="0"
        left="0"
        {...sharedStyles}
      />
      <Box
        className="backgrounds"
        backgroundImage="url('decorations/background/top-right.svg')"
        width="350px"
        height="350px"
        top="0"
        right="0"
        backgroundPosition="right"
        {...sharedStyles}
        {...displayBreakPoints.hideOnMedium}
      />
      <Box
        className="backgrounds"
        backgroundImage="url('decorations/background/bottom-right.svg')"
        width="400px"
        height="400px"
        backgroundPosition="right top"
        bottom="0"
        right="0"
        {...sharedStyles}
        {...displayBreakPoints.hideOnMedium}
      />
      <Box
        className="backgrounds"
        backgroundImage="url('decorations/background/bottom-left.svg')"
        width="200px"
        height="200px"
        bottom="0"
        left="0"
        {...sharedStyles}
        {...displayBreakPoints.hideOnSmall}
      />
    </Box>
  );
};

export default BackgroundDecor;
