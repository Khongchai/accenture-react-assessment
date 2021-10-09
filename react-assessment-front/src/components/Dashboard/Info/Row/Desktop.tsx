import React from "react";
import { serverUrl } from "../../../../const/server";
import DeleteButton from "../../../../StyledElements/DeleteButton";
import Contact from "../../../../types/Contact";
import fetch from "../../../../utils/fetch";
import getFieldErrorConditions from "../../../../utils/getFieldErrorConditions";
import { useRefetchToggleStore } from "../../../GlobalStores/RefetchToggleStore";
import CustomizedEditableText from "./CustomizedEditableText";

interface ListForDesktopType {
  contact: Contact;
}

const ListForDesktop: React.FC<ListForDesktopType> = ({ contact }) => {
  const { toggle: toggleRefetch } = useRefetchToggleStore((state) => state);
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
        <DeleteButton
          action={async () => {
            return fetch(`${serverUrl}/contacts/${contact.id}`, "DELETE").then(
              () => {
                toggleRefetch();
              }
            );
          }}
        />
      </td>
    </tr>
  );
};

export default ListForDesktop;
