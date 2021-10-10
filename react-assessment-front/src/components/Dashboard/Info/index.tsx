import { Box, Text } from "@chakra-ui/layout";
import React from "react";
import Contact from "../../../types/Contact";
import DesktopList from "./DesktopList";
import MobileList from "./MobileList";
import "./styles.css";

interface InfoType {
  contacts: Contact[];
}

const Info: React.FC<InfoType> = ({ contacts }) => {
  return (
    <Box
      height="83%"
      className="custom-scrollbar"
      overflowY={["unset", null, null, "auto"]}
    >
      {contacts.length > 0 ? (
        <>
          <Box display={["none", null, null, "block"]}>
            <DesktopList contacts={contacts} />
          </Box>
          <Box display={["block", null, null, "none"]}>
            <MobileList contacts={contacts} />
          </Box>
        </>
      ) : (
        <Text>No contacts</Text>
      )}
    </Box>
  );
};

export default Info;
