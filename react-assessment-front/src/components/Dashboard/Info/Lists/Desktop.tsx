import React from "react";
import DeleteButton from "../../../../StyledElements/DeleteButton";
import Contact from "../../../../types/Contact";
import fetch from "../../../../utils/fetch";
import {
  ErrorMessageType,
  useErrorModalMessageStore,
} from "../../../GlobalStores/ErrorModalMessage";
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

  const { errorMessageProps, setErrorState } = useErrorModalMessageStore(
    (state) => state
  );

  return (
    <tr>
      <td>{contact.id}</td>
      <td>
        {allowEdit ? (
          <EditableText
            onSave={(newData: string) => {
              updateText(contact.id, "name", newData);
              setErrorState({ message: "" });
            }}
            defaultText={contact.name}
            rejectCondition={(newData: string) => !!newData.match(/\d+/g)}
            rejectionAction={() => {
              setErrorState({
                backgroundColor: "danger",
                message: "This field does not allow numbers",
              });
            }}
          />
        ) : (
          contact.name
        )}
      </td>
      <td>
        {allowEdit ? (
          <EditableText
            onSave={(newData: string) => {
              updateText(contact.id, "email", newData);
              setErrorState({ ...errorMessageProps, message: "" });
            }}
            defaultText={contact.email}
            rejectCondition={(newData: string) => !newData.includes("@")}
            rejectionAction={() => {
              setErrorState({
                backgroundColor: "danger",
                message: "Invalid email",
              });
            }}
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
            onSave={(newData: string) => {
              updateText(contact.id, "phone", newData);
              setErrorState({ ...errorMessageProps, message: "" });
            }}
            defaultText={contact.phone}
            rejectCondition={(newData: string) => newData[0] === "-"}
            rejectionAction={() => {
              setErrorState({
                backgroundColor: "danger",
                message: "Phone number cannot be negative",
              });
            }}
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
