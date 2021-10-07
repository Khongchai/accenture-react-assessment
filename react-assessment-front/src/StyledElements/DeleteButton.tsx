import { Button, Img, Text } from "@chakra-ui/react";
import React from "react";

interface DeleteButtonProps {
  action?: () => any;
}

const DeleteButton: React.FC<DeleteButtonProps> = ({ action }) => {
  return (
    <Button
      onClick={() => action && action()}
      background="danger"
      color="white"
      iconSpacing={["0", null, null, null, "auto"]}
      leftIcon={<Img src="assets/trash.svg" />}
      _hover={{ opacity: 0.8 }}
    >
      <Text display={["none", null, null, null, "block"]}>Delete</Text>
    </Button>
  );
};

export default DeleteButton;
