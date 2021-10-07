import { Box } from "@chakra-ui/react";

import React from "react";
import Contact from "../../../types/Contact";
import DeleteButton from "../../../StyledElements/DeleteButton";
import fetch from "../../../utils/fetch";
import EditableText from "../../shared/EditableText";

const DesktopList: React.FC<{
  contacts: Contact[];
  setRefetchToggle: React.Dispatch<React.SetStateAction<boolean>>;
  allowEdit: boolean;
}> = ({ contacts, setRefetchToggle, allowEdit }) => {
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

const List: React.FC<{
  contact: Contact;
  setRefetchToggle: React.Dispatch<React.SetStateAction<boolean>>;
  allowEdit: boolean;
}> = ({ contact, setRefetchToggle, allowEdit }) => {
  function updateText(id: number, fieldName: string, newData: string) {
    const body: any = {};
    body[fieldName] = newData;
    fetch(
      `http://localhost:3000/contacts/${id}`,
      "PATCH",
      JSON.stringify(body)
    );
    setRefetchToggle((bool) => !bool);
  }

  return (
    <tr>
      <td>{contact.id}</td>
      <td>
        {allowEdit ? (
          <EditableText
            onSave={(newData: string) =>
              updateText(contact.id, "name", newData)
            }
            defaultText={contact.name}
            //reject if contains number
            rejectCondition={(newData: string) => !!newData.match(/\d+/g)}
          />
        ) : (
          contact.name
        )}
      </td>
      <td>
        {allowEdit ? (
          <EditableText
            onSave={(newData: string) =>
              updateText(contact.id, "email", newData)
            }
            defaultText={contact.email}
          />
        ) : (
          <a
            href={`mailto:${contact.email}`}
            style={{ color: "var(--chakra-colors-secondary)" }}
          >
            {contact.email}
          </a>
        )}
      </td>
      <td>
        {allowEdit ? (
          <EditableText
            onSave={(newData: string) =>
              updateText(contact.id, "phone", newData)
            }
            defaultText={contact.phone}
          />
        ) : (
          contact.phone
        )}
      </td>
      <td>
        <DeleteButton
          action={() => {
            fetch(`http://localhost:3000/contacts/${contact.id}`, "DELETE");
            setRefetchToggle((state) => !state);
          }}
        />
      </td>
    </tr>
  );
};
