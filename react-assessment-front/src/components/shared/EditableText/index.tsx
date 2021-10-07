import { Input } from "@chakra-ui/input";
import { Box, Text } from "@chakra-ui/layout";
import React, { useState } from "react";

interface EditableTextProps {
  defaultText: string;

  //Events to trigger when text is changed
  onSave?: (newData: string) => any;

  //On what condition will change be rejected
  rejectCondition?: (newData: string) => any;

  //What happens when there is an error
  errorHandler?: () => any;
}

/**
 * Chakra UI provides editable component, but it does not handle the case when user deletes everything and unfocus component
 */
//TODO => refactor logic
const EditableText: React.FC<EditableTextProps> = ({
  defaultText,
  onSave,
  rejectCondition,
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
    },
    onBlur: (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!e.target.value.length) {
        editOffAndRestoreFallback();
      } else {
        editOffAndSave(e.target.value);
      }
    },
  };

  function editOffAndSave(newData: string) {
    if (rejectCondition) {
      const reject = rejectCondition(newData);
      if (reject) {
        editOffAndRestoreFallback();
        return;
      }
    }
    onSave && onSave(newData);
    setEditable(false);
  }

  function editOffAndRestoreFallback() {
    setText(fallbackText);
    setEditable(false);
  }
  return (
    <Box width="fit-content">
      {editable ? (
        <Input
          type="email"
          padding="0.5"
          width="fit-content"
          autoFocus
          value={text}
          {...inputEvents}
        />
      ) : (
        <Text {...textEvents} cursor="pointer">
          {text}
        </Text>
      )}
    </Box>
  );
};

export default EditableText;
