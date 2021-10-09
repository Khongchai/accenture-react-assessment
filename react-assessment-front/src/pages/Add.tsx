import { Box, Stack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import AddContactForm from "../components/AddContactForm.tsx";
import EditModeText from "../components/Dashboard/EditModeText";
import Info from "../components/Dashboard/Info";
import { useRefetchToggleStore } from "../components/GlobalStores/RefetchToggleStore";
import NewlyAddedListTextDivider from "../components/NewlyAddedList";
import { serverUrl } from "../const/server";
import Contact from "../types/Contact";
import useFetch from "../utils/useFetch";
import useFetchFromLastPosition from "../utils/useFetchFromLastPosition";

const Add: React.FC = ({}) => {
  //TODO => not sure about these guys yet
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
