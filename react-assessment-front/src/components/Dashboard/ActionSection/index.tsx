import { Box, Flex } from "@chakra-ui/layout";
import React from "react";
import EditAndAddContactsButtons from "./EditAndAddButtons";
import SearchBox from "./SearchBox";

const ActionSection: React.FC<{
  toggleEditMode: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ toggleEditMode }) => {
  return (
    <Flex style={{ gap: "1rem" }} flexDir={["column", null, null, "row"]}>
      <SearchBox />
      <Box marginLeft="auto">
        <EditAndAddContactsButtons toggleEditMode={toggleEditMode} />
      </Box>
    </Flex>
  );
};

export default ActionSection;
