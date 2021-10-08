import { Text } from "@chakra-ui/react";
import React from "react";
import { useEditModeToggleStore } from "../GlobalStores/EditModeToggleStore";

const EditMode: React.FC<{}> = () => {
  const editMode = useEditModeToggleStore((state) => state.mode);
  return (
    <Text
      aria-live="assertive"
      textAlign="center"
      fontSize="20px"
      color="danger"
      height={editMode ? "20px" : 0}
      opacity={editMode ? "1" : 0}
      transition=".3s"
      fontWeight="bold"
      pointerEvents="none"
    >
      Edit mode is now on, select any field to edit
    </Text>
  );
};

export default EditMode;
