import { SearchIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import React from "react";

export default function SearchBox() {
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
