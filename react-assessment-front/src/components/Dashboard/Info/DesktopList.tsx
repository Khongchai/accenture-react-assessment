import { Box } from "@chakra-ui/react";
import React from "react";
import Contact from "../../../types/Contact";
import ListForDesktop from "./Row/Desktop";
import "./desktopList.css";

interface DesktopListType {
  contacts: Contact[];
  setRefetchToggle?: React.Dispatch<React.SetStateAction<boolean>>;
}

const DesktopList: React.FC<DesktopListType> = ({
  contacts,
  setRefetchToggle,
}) => {
  return (
    <Box>
      <table
        style={{
          width: "100%",
          textAlign: "left",
          borderCollapse: "collapse",
        }}
      >
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th></th>
          </tr>
        </thead>
        <tbody id="table-list">
          {contacts.map((contact) => (
            <ListForDesktop
              key={contact.email}
              setRefetchToggle={setRefetchToggle}
              contact={contact}
            />
          ))}
        </tbody>
      </table>
    </Box>
  );
};

export default DesktopList;
