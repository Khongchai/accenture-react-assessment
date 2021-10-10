import { ChevronLeftIcon } from "@chakra-ui/icons";
import { Box, Flex } from "@chakra-ui/layout";
import { Button, Img, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import SecondaryBackgroundStyledButton from "../../StyledElements/SecondaryBackgroundStyledButton";
import SecondaryBorderStyledButton from "../../StyledElements/SecondaryBorderStyledButton";
import EditModeButton from "../shared/EditModeButton";

interface ButtonsProps {
  isSubmitting: boolean;
}

const Buttons: React.FC<ButtonsProps> = ({ isSubmitting }) => {
  return (
    <Flex
      css={{
        gap: "1rem",
        marginTop: "2rem",
        justifyContent: "flex-end",
      }}
    >
      <Box marginRight="auto">
        <Link to={""}>
          <SecondaryBorderStyledButton
            buttonProps={{
              leftIcon: <ChevronLeftIcon />,
            }}
          >
            <Text display={["none", null, null, "block"]}>
              Back to Homepage
            </Text>
          </SecondaryBorderStyledButton>
        </Link>
      </Box>
      <EditModeButton />
      <Button isLoading={isSubmitting}>
        {isSubmitting ? "submitting" : "not submitting"}{" "}
      </Button>
      <SecondaryBackgroundStyledButton
        buttonProps={{
          leftIcon: <Img src="assets/person_add.svg" />,
          type: "submit",
          isLoading: isSubmitting,
          fontSize: "14px",
        }}
      >
        Add
      </SecondaryBackgroundStyledButton>
    </Flex>
  );
};

export default Buttons;
