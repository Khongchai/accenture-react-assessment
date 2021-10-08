import { Stack } from "@chakra-ui/react";
import React, { useState } from "react";
import AddContactForm from "../components/AddContactForm.tsx";
import EditModeText from "../components/Dashboard/EditModeText";
import Info from "../components/Dashboard/Info";
import NewlyAddedListTextDivider from "../components/NewlyAddedList";
import Contact from "../types/Contact";

const Add: React.FC = ({}) => {
  const [newlyAddedList, setNewlyAddedList] = useState<Contact[]>([]);

  return (
    <Stack spacing="2rem" padding="2rem" height="100%">
      <AddContactForm setNewlyAddedList={setNewlyAddedList} />
      <NewlyAddedListTextDivider />
      <EditModeText props={{ marginTop: "0 !important" }} />
      <Info contacts={newlyAddedList} />
    </Stack>
  );
};

export default Add;
