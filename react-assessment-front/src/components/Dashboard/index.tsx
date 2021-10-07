import { Box } from "@chakra-ui/layout";
import { Divider } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import Contact from "../../types/Contact";
import useDashboardFullLength from "../../utils/ui-utils/useDashboardFullLength";
import useFetch from "../../utils/useFetch";
import ActionSection from "./ActionSection";
import Info from "./Info";

const DashboardBackground: React.FC = ({ children }) => {
  const bg = useRef<HTMLElement>();
  useDashboardFullLength(bg);

  const [contacts, setContacts] = useState<Contact[]>();
  const [refetchSwitch, setRefetchSwitch] = useState(false);

  //TODO optional feature, do if time left
  const [page, setPage] = useState(1);

  useFetch(`http://localhost:3000/contacts?_page=${page}`, setContacts, [
    page,
    refetchSwitch,
  ]);

  return (
    <Box
      ref={bg as any}
      backgroundColor={["white", null, null, "lightBlue"]}
      borderRadius="90px 90px 0 0"
      minHeight={["500px", null, "600px", null, "700px"]}
      padding={["1rem", null, null, "70px 2.5rem", "70px"]}
      width="100%"
      height="100%"
    >
      <ActionSection />
      <Divider marginTop="2rem" marginBottom="2rem" type="blue" />
      <Info contacts={contacts} setRefetchSwitch={setRefetchSwitch} />
    </Box>
  );
};

export default DashboardBackground;
