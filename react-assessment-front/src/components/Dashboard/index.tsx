import { Box, Flex } from "@chakra-ui/layout";
import { Divider } from "@chakra-ui/react";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { serverUrl } from "../../const/server";
import Contact from "../../types/Contact";
import { Paginator } from "../../utils/Paginator";
import useDashboardFullLength from "../../utils/ui-utils/useDashboardFullLength";
import useFetch from "../../utils/useFetch";
import usePagination from "../../utils/usePagination";
import { useRefetchToggleStore } from "../GlobalStores/RefetchToggleStore";
import PaginationSelector from "../shared/PaginationSelector";
import ActionSection from "./ActionSection";
import EditModeText from "./EditModeText";
import Info from "./Info";

const Dashboard: React.FC = () => {
  const bg = useRef<HTMLElement>();
  useDashboardFullLength(bg);

  const refetch = useRefetchToggleStore((state) => state.refetch);
  const [page, setPage] = useState(1);
  const [contacts, setContacts] = useState<Contact[]>([]);

  useFetch(`${serverUrl}/contacts`, setContacts, [refetch, page]);

  const {
    paginatedItems: paginatedContacts,
    currentPagePos,
    totalPages,
  } = usePagination(contacts, page, [refetch]);

  return (
    <Box
      ref={bg as any}
      backgroundColor={["white", null, null, "lightBlue"]}
      borderRadius={["15px 15px 0 0", null, null, "90px 90px 0 0"]}
      minHeight={["500px", null, "600px", null, "700px"]}
      padding={["1rem", null, null, "70px 2.5rem", "70px 2.5rem"]}
      width="100%"
      height="100%"
    >
      <ActionSection />
      <Divider margin="1.25rem 0" type="blue" />
      <Box margin="1.25rem 0">
        <EditModeText />
      </Box>
      <Info contacts={paginatedContacts} />
      <Flex>
        <Box marginLeft="auto">
          <PaginationSelector
            setPage={setPage}
            totalPages={totalPages}
            currentPagePos={currentPagePos}
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default Dashboard;
