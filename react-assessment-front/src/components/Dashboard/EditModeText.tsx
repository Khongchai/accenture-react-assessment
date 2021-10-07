import { Text } from "@chakra-ui/react";
import React from "react";
export default function EditModeText({ children }: any) {
  return (
    <Text textAlign="center" fontSize="20px" color="danger" fontWeight="bold">
      {children}
    </Text>
  );
}
