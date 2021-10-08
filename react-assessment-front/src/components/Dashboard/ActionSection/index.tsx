import { Box, Flex } from "@chakra-ui/layout";
import React from "react";
import EditAndAddContactsButtons from "./EditAndAddButtons";
import SearchBox from "./SearchBox";

const ActionSection: React.FC = () => {
  return (
    <Flex style={{ gap: "1rem" }} flexDir={["column", null, null, "row"]}>
      <SearchBox />
      <Box marginLeft="auto">
        <EditAndAddContactsButtons />
      </Box>
    </Flex>
  );
};

export default ActionSection;
