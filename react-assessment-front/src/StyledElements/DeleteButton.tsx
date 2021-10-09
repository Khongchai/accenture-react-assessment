import { DeleteIcon } from "@chakra-ui/icons";
import { Box, Button } from "@chakra-ui/react";
import React, { useState } from "react";
import { useRefetchToggleStore } from "../components/GlobalStores/RefetchToggleStore";
import { serverUrl } from "../const/server";
import fetch from "../utils/fetch";

interface DeleteButtonProps {
  id: number;
}

const DeleteButton: React.FC<DeleteButtonProps> = ({ id }) => {
  const [isLoading, setIsLoading] = useState(false);
  const { toggle: toggleRefetch } = useRefetchToggleStore((state) => state);

  const buttonOnClick = async () => {
    setIsLoading(true);
    fetch(`${serverUrl}/contacts/${id}`, "DELETE")
      .then(() => {
        toggleRefetch();
      })
      .then(() => {
        setIsLoading(false);
      });
  };

  return (
    <Box onClick={buttonOnClick}>
      <ButtonComponent isLoading={isLoading} />
    </Box>
  );
};

export default DeleteButton;

function ButtonComponent({ isLoading }: { isLoading: boolean }) {
  return (
    <Button
      background="danger"
      color="white"
      iconSpacing={["0", null, null, null, "auto"]}
      _hover={{ opacity: 0.8 }}
      padding="1rem"
      isLoading={isLoading}
    >
      <DeleteIcon />
    </Button>
  );
}
