import { Box } from "@chakra-ui/react";
import React from "react";
import Contact from "../../../types/Contact";
import ListForDesktop from "./Lists/Desktop";
import "./desktopList.css";

interface DesktopListType {
  contacts: Contact[];
  setRefetchToggle: React.Dispatch<React.SetStateAction<boolean>>;
  allowEdit: boolean;
}

const DesktopList: React.FC<DesktopListType> = ({
  contacts,
  setRefetchToggle,
  allowEdit,
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
              allowEdit={allowEdit}
            />
          ))}
        </tbody>
      </table>
    </Box>
  );
};

export default DesktopList;