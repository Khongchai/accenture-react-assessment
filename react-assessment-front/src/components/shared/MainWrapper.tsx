import { Box } from "@chakra-ui/layout";
import React from "react";
import HeaderWithLogo from "./HeaderWithLogo";

/**
 * MainWrapper component wraps wraps children with left and right paddings + top header
 */
const MainWrapper: React.FC = ({ children }) => {
  return (
    <Box
      id="main-wrapper"
      padding={["0 1rem", null, "0 3rem", null, "0 11rem"]}
      minH="100vh"
    >
      <HeaderWithLogo />
      {children}
    </Box>
  );
};

export default MainWrapper;
