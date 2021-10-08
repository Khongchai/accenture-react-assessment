import { Img, Text } from "@chakra-ui/react";
import React from "react";
import SecondaryBorderStyledButton from "../../StyledElements/SecondaryBorderStyledButton";
import { useEditModeToggleStore } from "../GlobalStores/EditModeToggleStore";

interface EditModeButtonProps {}

const EditModeButton: React.FC<EditModeButtonProps> = ({}) => {
  const { toggle: toggleEditMode, mode: editMode } = useEditModeToggleStore(
    (state) => state
  );
  const editOnClick = () => {
    toggleEditMode();
  };
  return (
    <SecondaryBorderStyledButton
      buttonProps={{
        leftIcon: <Img src="assets/ic_edit.svg" />,
        onClick: editOnClick,
        fontSize: "14px",
      }}
    >
      {editMode ? (
        <Text>
          Edit: <span style={{ color: "var(--chakra-colors-danger)" }}>On</span>
        </Text>
      ) : (
        "Edit: Off"
      )}
    </SecondaryBorderStyledButton>
  );
};

export default EditModeButton;
