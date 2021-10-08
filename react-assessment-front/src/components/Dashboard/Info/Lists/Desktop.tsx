import React from "react";
import DeleteButton from "../../../../StyledElements/DeleteButton";
import Contact from "../../../../types/Contact";
import fetch from "../../../../utils/fetch";
import getFieldErrorConditions from "../../../../utils/getFieldErrorConditions";
import CustomizedEditableText from "./CustomizedEditableText";

interface ListForDesktopType {
  contact: Contact;
  setRefetchToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

const ListForDesktop: React.FC<ListForDesktopType> = ({
  contact,
  setRefetchToggle,
}) => {
  return (
    <tr>
      <td>{contact.id}</td>
      <td>
        <CustomizedEditableText
          fieldId={contact.id}
          fieldName={"name"}
          fieldValue={contact.name}
          setRefetchToggle={setRefetchToggle}
          error={getFieldErrorConditions("name")}
        />
      </td>
      <td>
        <CustomizedEditableText
          fieldId={contact.id}
          fieldName={"email"}
          fieldValue={contact.email}
          setRefetchToggle={setRefetchToggle}
          error={getFieldErrorConditions("email")}
        />
      </td>
      <td>
        <CustomizedEditableText
          fieldId={contact.id}
          fieldName={"phone"}
          fieldValue={contact.phone}
          setRefetchToggle={setRefetchToggle}
          error={getFieldErrorConditions("phone")}
        />
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
