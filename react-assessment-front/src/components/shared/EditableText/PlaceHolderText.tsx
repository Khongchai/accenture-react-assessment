import React from "react";
import { Text } from "@chakra-ui/react";

interface PlaceHolderTextProps {
  editable: boolean;
  text: string;
  textEvents: Object;
}

/* placeholder text to keep the space */
const PlaceHolderText: React.FC<PlaceHolderTextProps> = ({
  editable,
  text,
  textEvents,
}) => {
  return (
    <Text
      display={editable ? "none" : "auto"}
      pos="absolute"
      {...textEvents}
      cursor="pointer"
    >
      {text}
    </Text>
  );
};

export default PlaceHolderText;
