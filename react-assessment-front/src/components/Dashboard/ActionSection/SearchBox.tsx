import { SearchIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import React from "react";
import handleSearchInputChange from "../../../utils/useHandleInputChange";

export default function SearchBox({
  setFetchUrl,
  resetPagination,
}: {
  setFetchUrl: React.Dispatch<React.SetStateAction<string>>;
  resetPagination: () => any;
}) {
  const inputOnChange = (e: any) => {
    handleSearchInputChange(e.target.value, setFetchUrl);
    resetPagination();
  };
  return (
    <InputGroup width={["100%", null, null, "340px"]}>
      <Input
        onChange={inputOnChange}
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
