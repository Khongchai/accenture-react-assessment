import { Stack } from "@chakra-ui/react";
import React, { useState } from "react";
import AddContactForm from "../components/AddContactForm.tsx";
import EditModeText from "../components/Dashboard/EditModeText";
import NewlyAddedList from "../components/NewlyAddedList";
import Contact from "../types/Contact";

interface AddProps {}

const Add: React.FC<AddProps> = ({}) => {
  const [newlyAddedList, setNewlyAddedList] = useState<Contact[]>([]);

  return (
    <Stack spacing="2rem" padding="2rem" height="100%">
      <AddContactForm setNewlyAddedList={setNewlyAddedList} />
      <NewlyAddedList newlyAddedList={newlyAddedList} />
      <EditModeText />
    </Stack>
  );
};

export default Add;
