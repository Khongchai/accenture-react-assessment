import { Stack } from "@chakra-ui/react";
import React from "react";
import Contact from "../../../types/Contact";
import MobileRow from "./Row/Mobile";

const MobileList: React.FC<{ contacts: Contact[] }> = ({ contacts }) => {
  return (
    <Stack spacing={"1.5rem"} padding="2rem 0">
      {contacts.map((contact) => {
        return <MobileRow key={contact.id} contact={contact} />;
      })}
    </Stack>
  );
};

export default MobileList;
