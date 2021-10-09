import { Box, Flex } from "@chakra-ui/react";
import React, { useEffect, useMemo } from "react";
import PageNum from "./PageNum";

interface PaginationSelectorProps {
  setPage: React.Dispatch<React.SetStateAction<number>>;
  totalPages: number;
  currentPagePos: number;
}

const PaginationSelector: React.FC<PaginationSelectorProps> = ({
  setPage,
  totalPages,
  currentPagePos,
}) => {
  const numArr = useMemo(() => {
    let arr = [];
    for (let i = 0; i < totalPages; i++) arr.push(i + 1);
    return arr;
  }, [totalPages]);

  return (
    <Flex align="center" css={{ gap: "1.25rem" }}>
      {numArr.map((thisNum) => (
        <PageNum
          key={thisNum}
          thisNum={thisNum}
          currentPage={currentPagePos}
          setPage={() => setPage(thisNum)}
        />
      ))}
    </Flex>
  );
};

export default PaginationSelector;
