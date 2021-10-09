import { Box, Flex } from "@chakra-ui/layout";
import React from "react";
import EditAndAddContactsButtons from "./EditAndAddButtons";
import SearchBox from "./SearchBox";

interface ActionSectionType {
  setFetchUrl: React.Dispatch<React.SetStateAction<string>>;
  resetPagination: () => any;
}

const ActionSection: React.FC<ActionSectionType> = ({
  setFetchUrl,
  resetPagination,
}) => {
  return (
    <Flex style={{ gap: "1rem" }} flexDir={["column", null, null, "row"]}>
      <SearchBox setFetchUrl={setFetchUrl} resetPagination={resetPagination} />
      <Box marginLeft="auto">
        <EditAndAddContactsButtons />
      </Box>
    </Flex>
  );
};

export default React.memo(ActionSection);
