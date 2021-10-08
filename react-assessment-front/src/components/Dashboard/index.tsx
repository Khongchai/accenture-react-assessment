import { Box } from "@chakra-ui/layout";
import { Divider, Text } from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import Contact from "../../types/Contact";
import useDashboardFullLength from "../../utils/ui-utils/useDashboardFullLength";
import useFetch from "../../utils/useFetch";
import ActionSection from "./ActionSection";
import EditModeText from "./EditModeText";
import Info from "./Info";

const Dashboard: React.FC = () => {
  const bg = useRef<HTMLElement>();
  useDashboardFullLength(bg);

  const [contacts, setContacts] = useState<Contact[]>();
  const [toggleRefetch, setRefetchToggle] = useState(false);

  //TODO optional feature, do if time left
  const [page, setPage] = useState(1);

  useFetch(`http://localhost:3000/contacts?_page=${page}`, setContacts, [
    page,
    toggleRefetch,
  ]);

  return (
    <Box
      ref={bg as any}
      backgroundColor={["white", null, null, "lightBlue"]}
      borderRadius={["15px 15px 0 0", null, null, "90px 90px 0 0"]}
      minHeight={["500px", null, "600px", null, "700px"]}
      padding={["1rem", null, null, "70px 2.5rem", "70px"]}
      width="100%"
      height="100%"
    >
      <ActionSection />
      <Divider margin="1.25rem 0" type="blue" />
      <Box margin="1.25rem 0">
        <EditModeText />
      </Box>
      <Info contacts={contacts} setRefetchtoggle={setRefetchToggle} />
    </Box>
  );
};

export default Dashboard;
