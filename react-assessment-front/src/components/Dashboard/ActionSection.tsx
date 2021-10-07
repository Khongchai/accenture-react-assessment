import { Button } from "@chakra-ui/button";
import { EmailIcon, SearchIcon } from "@chakra-ui/icons";
import { Img } from "@chakra-ui/image";
import { InputGroup, Input, InputRightElement } from "@chakra-ui/input";
import { Box, Flex } from "@chakra-ui/layout";
import React, { useState } from "react";
import SecondaryBackgroundStyledButton from "../../StyledElements/SecondaryBackgroundStyledButton";
import SecondaryBorderStyledButton from "../../StyledElements/SecondaryBorderStyledButton";

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

function SearchBox() {
  return (
    <InputGroup width={["100%", null, null, "340px"]}>
      <Input
        color="primary"
        _placeholder={{
          color: "var(--chakra-colors-primary)",
          opacity: "0.7",
        }}
        placeholder="Search Contacts"
        background="white"
      />
      <InputRightElement
        pointerEvents="none"
        children={<SearchIcon color="primary" />}
      />
    </InputGroup>
  );
}

//TODO => refactor component
const EditAndAddContactsButtons: React.FC<{
  toggleEditMode: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ toggleEditMode }) => {
  const editOnClick = () => {
    toggleEditMode((on) => !on);
  };
  const addOnClick = () => {};

  return (
    <Box>
      <Box display="inline" mr="1rem">
        <SecondaryBorderStyledButton
          buttonProps={{
            leftIcon: <Img src="assets/ic_edit.svg" />,
            onClick: editOnClick,
          }}
        >
          Edit Mode
        </SecondaryBorderStyledButton>
      </Box>
      <SecondaryBackgroundStyledButton
        buttonProps={{ leftIcon: <Img src="assets/person_add.svg" /> }}
      >
        Add Contacts
      </SecondaryBackgroundStyledButton>
    </Box>
  );
};
