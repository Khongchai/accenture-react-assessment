import React from "react";
import DeleteButton from "../../../../StyledElements/DeleteButton";
import Contact from "../../../../types/Contact";
import fetch from "../../../../utils/fetch";
import EditableText from "../../../shared/EditableText";

interface ListForDesktopType {
  contact: Contact;
  setRefetchToggle: React.Dispatch<React.SetStateAction<boolean>>;
  allowEdit: boolean;
}

const ListForDesktop: React.FC<ListForDesktopType> = ({
  contact,
  setRefetchToggle,
  allowEdit,
}) => {
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
            rejectCondition={(newData: string) => !newData.includes("@")}
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
            rejectCondition={(newData: string) => newData[0] === "-"}
          />
        ) : (
          contact.phone
        )}
      </td>
      <td style={{ textAlign: "right" }}>
        <DeleteButton
          action={async () => {
            return fetch(
              `http://localhost:3000/contacts/${contact.id}`,
              "DELETE"
            ).then(() => {
              setRefetchToggle((state) => !state);
            });
          }}
        />
      </td>
    </tr>
  );
};

export default ListForDesktop;
