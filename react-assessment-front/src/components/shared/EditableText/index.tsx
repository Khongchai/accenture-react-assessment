import { Input } from "@chakra-ui/input";
import { Box, Text } from "@chakra-ui/layout";
import React, { useState } from "react";

interface EditableTextProps {
  defaultText: string;

  //Events to trigger when text is changed
  onTextChanged?: () => any;

  //What happens when there is an error
  errorHandler?: () => any;
}

/**
 * Chakra UI provides editable component, but it does not handle the case when user deletes everything and unfocus component
 */
const EditableText: React.FC<EditableTextProps> = ({
  defaultText,
  onTextChanged: extraAction,
  errorHandler,
}) => {
  const [editable, setEditable] = useState(false);

  //Fallback text is the version before an edit is made.
  const [fallbackText, setFallbackText] = useState("");
  const [text, setText] = useState(defaultText);

  const textEvents = {
    onClick: (e: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => {
      setFallbackText((e.target as HTMLElement).innerHTML);
      setEditable(true);
    },
  };

  const inputEvents = {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
      setText(e.target.value);
      extraAction && extraAction();
    },
    onBlur: (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!e.target.value.length) {
        setText(fallbackText);
      }
      setEditable(false);
    },
    onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => {
      e.key === "Enter" && setEditable(false);
    },
  };

  return (
    <Box width="fit-content">
      {editable ? (
        <Input autoFocus value={text} {...inputEvents} />
      ) : (
        <Text {...textEvents} cursor="pointer">
          {text}
        </Text>
      )}
    </Box>
  );
};

export default EditableText;
