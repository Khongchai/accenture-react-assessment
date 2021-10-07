import { Flex, Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";
import LottieLogo from "./Lottie";

interface HeaderWithLogoProps {}

const HeaderWithLogo: React.FC<HeaderWithLogoProps> = ({}) => {
  return (
    <Flex
      padding={["3rem 0", null, null, "2.4rem 5rem"]}
      width="100%"
      height="fit-content"
      align="center"
      flexDir={["column", null, null, "row"]}
    >
      <LottieLogo />
      <Stack textAlign="left" display="flex" align="center" spacing="0.5rem">
        <Heading size="3xl" position="relative" as="h1">
          ProCon
        </Heading>
        <Text color="primary">All your contacts in one place</Text>
      </Stack>
    </Flex>
  );
};

export default HeaderWithLogo;
