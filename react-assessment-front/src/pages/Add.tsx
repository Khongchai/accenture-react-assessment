import { Box, Stack } from "@chakra-ui/react";
import React from "react";
import AddContactForm from "../components/AddContactForm.tsx";
import EditModeText from "../components/Dashboard/EditModeText";
import Info from "../components/Dashboard/Info";
import { useRefetchToggleStore } from "../components/GlobalStores/RefetchToggleStore";
import NewlyAddedListTextDivider from "../components/NewlyAddedList";
import useFetchFromLastPosition from "../utils/useFetchFromLastPosition";

const Add: React.FC = ({}) => {
  const { refetch } = useRefetchToggleStore((state) => state);
  const contactsFromLast = useFetchFromLastPosition([refetch]);

  return (
    <Stack spacing="3rem" padding="2rem" height="100%">
      <AddContactForm />
      <Box>
        <NewlyAddedListTextDivider />
        <EditModeText props={{ marginTop: "0 !important" }} />
        <Info contacts={contactsFromLast} />
      </Box>
    </Stack>
  );
};

export default Add;
