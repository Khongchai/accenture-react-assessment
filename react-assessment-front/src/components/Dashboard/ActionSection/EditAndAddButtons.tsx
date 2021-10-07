import { Box, Img } from "@chakra-ui/react";
import React from "react";
import SecondaryBackgroundStyledButton from "../../../StyledElements/SecondaryBackgroundStyledButton";
import SecondaryBorderStyledButton from "../../../StyledElements/SecondaryBorderStyledButton";

const EditAndAddContactsButtons: React.FC<{
  toggleEditMode: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ toggleEditMode }) => {
  const editOnClick = () => {
    toggleEditMode((on) => !on);
  };

  const addOnClick = () => {};

  return (
    <Box>
      <Box display="inline" mr="1rem">
        <SecondaryBorderStyledButton
          buttonProps={{
            leftIcon: <Img src="assets/ic_edit.svg" />,
            onClick: editOnClick,
          }}
        >
          Edit Mode
        </SecondaryBorderStyledButton>
      </Box>
      <SecondaryBackgroundStyledButton
        buttonProps={{ leftIcon: <Img src="assets/person_add.svg" /> }}
      >
        Add Contacts
      </SecondaryBackgroundStyledButton>
    </Box>
  );
};

export default EditAndAddContactsButtons;
