import { Button, Img, Text } from "@chakra-ui/react";
import React, { useState } from "react";

interface DeleteButtonProps {
  action?: () => Promise<any>;
}

const DeleteButton: React.FC<DeleteButtonProps> = ({ action }) => {
  const [isLoading, setIsLoading] = useState(false);
  const buttonOnClick = async () => {
    if (action) {
      setIsLoading(true);
      action().then(() => {
        setIsLoading(false);
      });
    }
  };
  return (
    <Button
      onClick={buttonOnClick}
      background="danger"
      color="white"
      iconSpacing={["0", null, null, null, "auto"]}
      leftIcon={<Img src="assets/trash.svg" />}
      _hover={{ opacity: 0.8 }}
      isLoading={isLoading}
    >
      <Text display={["none", null, null, null, "block"]}>Delete</Text>
    </Button>
  );
};

export default DeleteButton;
