import { Button, Img, Text } from "@chakra-ui/react";
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
    console.log("askdj");
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
    <Button
      onClick={buttonOnClick}
      background="danger"
      color="white"
      iconSpacing={["0", null, null, null, "auto"]}
      leftIcon={<Img src="assets/trash.svg" />}
      _hover={{ opacity: 0.8 }}
      padding="1rem"
      isLoading={isLoading}
    />
  );
};

export default DeleteButton;
