import { Input } from "@chakra-ui/react";
import React from "react";

interface ConditionalInputProps {
  on: boolean;
  inputValue: string;
  inputEvents: Object;
}

const ConditionalInput: React.FC<ConditionalInputProps> = ({
  inputEvents,
  inputValue,
  on,
}) => {
  return on ? (
    <Input
      padding="0.5rem"
      width="fit-content"
      autoFocus
      value={inputValue}
      {...inputEvents}
      //prevent vertical cls
      pos="absolute"
      transform="translateY(-0.5rem)"
    />
  ) : null;
};

export default ConditionalInput;
