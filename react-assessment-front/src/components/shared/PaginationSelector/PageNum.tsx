import { Button } from "@chakra-ui/react";
import React from "react";

interface PageNumProps {
  thisNum: number;
  currentPage: number;
  setPage: () => any;
}

const PageNum: React.FC<PageNumProps> = ({ thisNum, currentPage, setPage }) => {
  const onThisPage = currentPage === thisNum;
  return (
    <Button
      onClick={() => setPage()}
      padding="0"
      _hover={{ opacity: "0.8" }}
      color={onThisPage ? "white" : "auto"}
      background={onThisPage ? "secondary" : "auto"}
    >
      {thisNum}
    </Button>
  );
};

export default PageNum;
