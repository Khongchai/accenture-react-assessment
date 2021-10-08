import { Input } from "@chakra-ui/input";
import { Box, Text } from "@chakra-ui/layout";
import React, { useState } from "react";

interface EditableTextProps {
  defaultText: string;

  /*
   * Event to trigger when text is successfully saved
   */
  onSave?: (newData: string) => any;

  /*
   * On what condition will change be rejected
   */
  rejectCondition?: (newData: string) => any;

  /*
   * Action to perform when change is rejected
   */
  rejectionAction?: (rejectedValue: string) => any;
}

/**
 * An event-based editable text field.
 */
//TODO => refactor logic
const EditableText: React.FC<EditableTextProps> = ({
  defaultText,
  onSave,
  rejectCondition,
  rejectionAction,
}) => {
  const [editable, setEditable] = useState(false);

  /**
   * Savedtext act as a fallback text when error occurs and the actual
   * text user sees. This prevents CLS when the user edits the text
   */
  const [savedText, setSavedText] = useState(defaultText);
  const [text, setText] = useState(defaultText);

  const textEvents = {
    onClick: (e: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => {
      setSavedText((e.target as HTMLElement).innerHTML);
      setEditable(true);
    },
  };

  const inputEvents = {
    onFocus: (e: React.FocusEvent<HTMLInputElement>) => {
      const compensatePadding = 2;
      e.target.style.width = e.target.value.length + compensatePadding + "ch";
    },
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
    setSavedText(newData);
    setEditable(false);
  }

  function editOffAndRestoreFallback() {
    rejectionAction && rejectionAction(text);
    setText(savedText);
    setEditable(false);
  }
  return (
    <Box width="fit-content" pos="relative">
      {editable ? (
        <Input
          padding="0.5rem"
          width="fit-content"
          autoFocus
          value={text}
          {...inputEvents}
          //prevent vertical cls
          pos="absolute"
          transform="translateY(-0.5rem)"
        />
      ) : null}
      {/* placeholder text to keep the space */}
      <Text
        display={editable ? "none" : "auto"}
        pos="absolute"
        {...textEvents}
        cursor="pointer"
      >
        {savedText}
      </Text>
      <Text opacity="0" pointerEvents="none">
        {savedText}
      </Text>
    </Box>
  );
};

export default EditableText;
