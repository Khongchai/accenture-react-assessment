import { Box, Stack } from "@chakra-ui/react";
import React from "react";
import Contact from "../../../types/Contact";
import Mobile from "./Lists/Mobile";

const MobileList: React.FC<{ contacts: Contact[] }> = ({ contacts }) => {
  return (
    <Stack spacing={"1.5rem"} padding="2rem 0">
      {contacts.map((contact) => {
        return <Mobile key={contact.email} contact={contact} />;
      })}
    </Stack>
  );
};

export default MobileList;
