import { Box, Img } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import SecondaryBackgroundStyledButton from "../../../StyledElements/SecondaryBackgroundStyledButton";
import SecondaryBorderStyledButton from "../../../StyledElements/SecondaryBorderStyledButton";
import { useEditModeToggleStore } from "../../GlobalStores/EditModeToggleStore";

const EditAndAddContactsButtons: React.FC = () => {
  const toggleEditMode = useEditModeToggleStore((state) => state.toggle);
  const editOnClick = () => {
    toggleEditMode();
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
      <Link to={"/add"}>
        <SecondaryBackgroundStyledButton
          buttonProps={{ leftIcon: <Img src="assets/person_add.svg" /> }}
        >
          Add Contacts
        </SecondaryBackgroundStyledButton>
      </Link>
    </Box>
  );
};

export default EditAndAddContactsButtons;
