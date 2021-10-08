import { Box, Img } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import SecondaryBackgroundStyledButton from "../../../StyledElements/SecondaryBackgroundStyledButton";
import EditModeButton from "../../shared/EditModeButton";

const EditAndAddContactsButtons: React.FC = () => {
  return (
    <Box>
      <Box display="inline" mr="1rem">
        <EditModeButton />
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
