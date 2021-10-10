import { Box, Text } from "@chakra-ui/layout";
import React, { useState } from "react";
import ConditionalInput from "./ConditionalInput";
import PlaceHolderText from "./PlaceHolderText";

//!DO NOT USE PRETTIER WITH THIS FILE; EVERYTHING WILL GET REALLY MESSY

/**
 * All arguments must return true for chaining purposes
 */
interface EditableTextProps {
  defaultText: string;

  /*
   * Event to trigger when text is successfully saved
   */
  onSave: (newData: string) => boolean;

  /*
   * On what condition will change be rejected
   */
  rejectCondition: (newData: string) => boolean;

  /*
   * Action to perform when change is rejected
   */
  rejectionAction: (rejectedValue: string) => boolean;
}

/**
 * An event-based editable text field.
 */
const EditableText: React.FC<EditableTextProps> = ({
  defaultText,
  onSave,
  rejectCondition,
  rejectionAction,
}) => {
  const [editable, setEditable] = useState(false);

  /**
   * The visible text acts as a fallback text when error occurs and the actual
   * text user sees. This prevents CLS when the user edits the text
   * 
   * Lead text leads the change, once the change checks out, lead text passes the change on to visibleText
   */
  const [visibleFallback, setVisibleFallback] = useState(defaultText);
  const [leadText, setLeadText] = useState(defaultText);

  const textEvents = {
    onClick: (e: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => {
      makeVisible((e as any).target.innerHTML) && editOn();
    },
  };

  const inputEvents = {
    onFocus: (e: React.FocusEvent<HTMLInputElement>) => {
      adjustWidthOnChange(e.target);
    },
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
      adjustWidthOnChange(e.target);
      setLeadText(e.target.value);
    },
    onKeyPress: (e: any) => {
      e.key === "Enter" && handleTextEdit(e.target.value);
    },
    onBlur: (e: React.ChangeEvent<HTMLInputElement>) => {
      handleTextEdit(e.target.value);
      }
  };

  function handleTextEdit(newText: string)
  {
    noChange(newText, visibleFallback)
      ? editOff()
        : isEmtpyString(newText) 
          ? showErrorMessage(newText) && editOff() && setLeadText(visibleFallback)
            : noErrors(newText) 
              ?  performSave(newText) && makeVisible(newText) && editOff()
                : editOff() && showErrorMessage(newText) && setLeadText(visibleFallback)
  }

  const isEmtpyString = (text: string) => !text.length;
  const noChange = (text1: string, text2: string) => text1 === text2;
  const adjustWidthOnChange = (elem: HTMLInputElement) => {elem.style.width = elem.value.length + 2.5 + "ch"; return true};
  const noErrors = (newData: string) => !rejectCondition(newData);
  const performSave = (dataToSave: string) => onSave(dataToSave);
  const makeVisible = (text: string) => {setVisibleFallback(text); return true};
  const showErrorMessage  =(rejectedText: string) =>  rejectionAction(rejectedText);
  const editOff = () => {setEditable(false); return true};
  const editOn = () => {setEditable(true); return true};

  return (
    <Box width="fit-content" pos="relative">
      <ConditionalInput inputEvents={inputEvents} on={editable} inputValue={leadText}/>
      <PlaceHolderText editable={editable} text={visibleFallback} textEvents={textEvents}/>
      <Text opacity="0" pointerEvents="none">
        {visibleFallback}
      </Text>
    </Box>
  );
};

export default EditableText;
