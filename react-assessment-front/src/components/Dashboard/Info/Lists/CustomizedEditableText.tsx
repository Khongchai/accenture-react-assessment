import React from "react";
import { Text } from "@chakra-ui/react";
import { useErrorModalMessageStore } from "../../../GlobalStores/ErrorModalMessage";
import EditableText from "../../../shared/EditableText";
import fetch from "../../../../utils/fetch";

interface CustomizedEditableTextProps {
  allowEdit: boolean;
  fieldName: string;
  fieldValue: string;
  fieldId: number;
  setRefetchToggle: React.Dispatch<React.SetStateAction<boolean>>;
  error: {
    condition: (newData: string) => any;
    message: string;
  };
}

const CustomizedEditableText: React.FC<CustomizedEditableTextProps> = ({
  allowEdit,
  fieldName,
  fieldValue,
  fieldId,
  setRefetchToggle: refetch,
  error,
}) => {
  const { setErrorState } = useErrorModalMessageStore((state) => state);
  function updateText(id: number, fieldName: string, newData: string) {
    const body: any = {};
    body[fieldName] = newData;

    fetch(
      `http://localhost:3000/contacts/${id}`,
      "PATCH",
      JSON.stringify(body)
    );

    refetch((bool) => !bool);
  }

  return allowEdit ? (
    <EditableText
      onSave={(newData: string) => {
        updateText(fieldId, fieldName, newData);
        setErrorState({ message: "" });
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
      }}
    />
  ) : (
    <Text>{fieldValue}</Text>
  );
};

export default CustomizedEditableText;
