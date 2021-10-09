import React from "react";
import DeleteButton from "../../../../StyledElements/DeleteButton";
import Contact from "../../../../types/Contact";
import getFieldErrorConditions from "../../../../utils/getFieldErrorConditions";
import CustomizedEditableText from "./CustomizedEditableText";

interface ListForDesktopType {
  contact: Contact;
}

const ListForDesktop: React.FC<ListForDesktopType> = ({ contact }) => {
  return (
    <tr>
      <td>{contact.id}</td>
      <td>
        <CustomizedEditableText
          fieldId={contact.id}
          fieldName={"name"}
          fieldValue={contact.name}
          error={getFieldErrorConditions("name")}
        />
      </td>
      <td>
        <CustomizedEditableText
          fieldId={contact.id}
          fieldName={"email"}
          fieldValue={contact.email}
          error={getFieldErrorConditions("email")}
        />
      </td>
      <td>
        <CustomizedEditableText
          fieldId={contact.id}
          fieldName={"phone"}
          fieldValue={contact.phone}
          error={getFieldErrorConditions("phone")}
        />
      </td>
      <td style={{ textAlign: "right" }}>
        <DeleteButton id={contact.id} />
      </td>
    </tr>
  );
};

export default ListForDesktop;
