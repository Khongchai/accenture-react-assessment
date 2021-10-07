import { Box } from "@chakra-ui/react";

import React from "react";
import Contact from "../../../types/Contact";
import DeleteButton from "../../../StyledElements/DeleteButton";
import fetch from "../../../utils/fetch";

const DesktopList: React.FC<{
  contacts: Contact[];
  setRefetchSwitch: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ contacts, setRefetchSwitch }) => {
  return (
    <Box>
      <table
        style={{
          width: "100%",
          textAlign: "left",
          borderCollapse: "separate",
          borderSpacing: "1rem",
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
        <tbody>
          {contacts.map((contact) => (
            <List
              key={contact.email}
              setRefetchSwitch={setRefetchSwitch}
              contact={contact}
            />
          ))}
        </tbody>
      </table>
    </Box>
  );
};

export default DesktopList;

const List: React.FC<{
  contact: Contact;
  setRefetchSwitch: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ contact, setRefetchSwitch }) => {
  return (
    //@ts-ignore
    <tr>
      <td>{contact.id}</td>
      <td>{contact.name}</td>
      <td>
        <a
          href={`mailto:${contact.email}`}
          style={{ color: "var(--chakra-colors-secondary)" }}
        >
          {contact.email}
        </a>
      </td>
      <td>{contact.phone}</td>
      <td>
        <DeleteButton
          action={() => {
            fetch(`http://localhost:3000/contacts/${contact.id}`, "DELETE");
            setRefetchSwitch((state) => !state);
          }}
        />
      </td>
    </tr>
  );
};
