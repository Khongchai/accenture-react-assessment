import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import React from "react";

const ChevronsWrapper: React.FC = ({ children }) => {
  const props = {
    color: "secondary",
    h: "1.5rem",
    w: "1.5rem",
    transition: ".3s",
    cursor: "pointer",
    _hover: { transform: "scale(1.3)" },
  };
  return (
    <>
      <ChevronLeftIcon {...props} />
      {children}
      <ChevronRightIcon {...props} />
    </>
  );
};

export default ChevronsWrapper;
