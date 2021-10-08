import { IconButton } from "@chakra-ui/button";
import { CloseIcon } from "@chakra-ui/icons";
import { Box, Text } from "@chakra-ui/layout";
import React, { useEffect, useState } from "react";
import { useErrorModalMessageStore } from "../GlobalStores/ErrorModalMessage";

/**
 * This modal will appear when text is set.
 *
 * It will disappear when:
 * 1. text is changed again without throwing errors
 * 2. User clicks on the "x" sign
 */
const ErrorModal: React.FC = () => {
  const {
    errorMessageProps: {
      backgroundColor,
      message: triggerMessage,
      ariaLive,
      textColor,
    },
    setErrorState,
  } = useErrorModalMessageStore((state) => state);

  const closeIconOnClick = () =>
    setErrorState({
      backgroundColor,
      message: "",
      ariaLive,
      textColor,
    });

  const messageToShow = useGetMessageToShowFromTriggerMessage(triggerMessage);
  return (
    <Box
      backgroundColor={backgroundColor}
      width="fit-content"
      pos="fixed"
      zIndex="modal"
      className="error-modal"
      bottom="100px"
      right="50%"
      transform="translateX(50%)"
      transition=".3s"
      color={textColor}
      padding={triggerMessage ? "1.75rem 1.85rem" : "0"}
      fontSize={triggerMessage ? "1rem" : 0}
      borderRadius="5px"
      aria-live={ariaLive}
      fontWeight="bold"
      boxShadow="dark-lg"
    >
      <Text>{messageToShow}</Text>
      <IconButton
        background="transparent"
        position="absolute"
        top="1px"
        right="1px"
        opacity={triggerMessage ? 1 : 0}
        pointerEvents={triggerMessage ? "auto" : "none"}
        aria-label="modal close icon"
        _hover={{ opacity: "0.5" }}
        icon={<CloseIcon width="20px" />}
        onClick={closeIconOnClick}
      />
    </Box>
  );
};

export default ErrorModal;

/**
 * Trigger message can be empty, while messageToShow will always be visible. Useful for smooth transition in and out.
 */
function useGetMessageToShowFromTriggerMessage(triggerMessage?: string) {
  const [messageToShow, setMessageToShow] = useState(triggerMessage);
  useEffect(() => {
    if (triggerMessage) {
      setMessageToShow(triggerMessage);
    }
  }, [triggerMessage]);

  return messageToShow;
}
