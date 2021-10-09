import { Box, Flex } from "@chakra-ui/react";
import React, { useEffect, useMemo } from "react";
import ChevronsWrapper from "./ChevronsWrapper";
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
      <ChevronsWrapper>
        {numArr.map((thisNum) => (
          <PageNum
            thisNum={thisNum}
            currentPage={currentPagePos}
            setPage={() => setPage(thisNum)}
          />
        ))}
      </ChevronsWrapper>
    </Flex>
  );
};

export default PaginationSelector;
