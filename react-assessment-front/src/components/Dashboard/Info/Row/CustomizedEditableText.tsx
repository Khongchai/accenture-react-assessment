import React from "react";
import { Text, Link } from "@chakra-ui/react";
import { useErrorModalMessageStore } from "../../../GlobalStores/ErrorModalMessage";
import EditableText from "../../../shared/EditableText";
import fetch from "../../../../utils/fetch";
import { useEditModeToggleStore } from "../../../GlobalStores/EditModeToggleStore";
import { useRefetchToggleStore } from "../../../GlobalStores/RefetchToggleStore";
import { serverUrl } from "../../../../const/server";

interface CustomizedEditableTextProps {
  fieldName: string;
  fieldValue: string;
  fieldId: number;
  error: {
    condition: (newData: string) => boolean;
    message: string;
  };
}

const CustomizedEditableText: React.FC<CustomizedEditableTextProps> = ({
  fieldName,
  fieldValue,
  fieldId,
  error,
}) => {
  const { setErrorState } = useErrorModalMessageStore((state) => state);

  const { toggle: toggleRefetch } = useRefetchToggleStore((state) => state);

  function updateText(id: number, fieldName: string, newData: string) {
    const body: any = {};
    body[fieldName] = newData;

    fetch(`${serverUrl}/contacts/${id}`, "PATCH", JSON.stringify(body));

    toggleRefetch();
  }

  const allowEdit = useEditModeToggleStore((state) => state.mode);

  return allowEdit ? (
    <EditableText
      onSave={(newData: string) => {
        updateText(fieldId, fieldName, newData);
        setErrorState({ message: "" });
        return true;
      }}
      defaultText={fieldValue}
      rejectCondition={(newData: string) => error.condition(newData)}
      rejectionAction={(rejectedValue: string) => {
        //Handle differently for emtpy space
        rejectedValue
          ? setErrorState({
              backgroundColor: "danger",
              message: error.message,
            })
          : setErrorState({
              backgroundColor: "secondary",
              message: "Fields do not allow empty spaces",
            });

        return true;
      }}
    />
  ) : fieldName === "email" ? (
    <Text color="secondary">
      <Link href={`mailto:${fieldValue}`}>{fieldValue}</Link>
    </Text>
  ) : (
    <Text> {fieldValue}</Text>
  );
};

export default CustomizedEditableText;
