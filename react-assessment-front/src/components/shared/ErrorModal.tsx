import { IconButton } from "@chakra-ui/button";
import { CloseIcon } from "@chakra-ui/icons";
import { Box, Text } from "@chakra-ui/layout";
import React from "react";
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
    errorMessageProps: { backgroundColor, message, ariaLive, textColor },
    setErrorState,
  } = useErrorModalMessageStore((state) => state);

  const closeIconOnClick = () =>
    setErrorState({
      backgroundColor,
      message: "",
      ariaLive,
      textColor,
    });
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
      transition="padding .3s"
      color={textColor}
      padding={message ? "1.75rem 1.85rem" : "0"}
      borderRadius="5px"
      aria-live={ariaLive}
      fontWeight="bold"
      boxShadow="dark-lg"
    >
      <Text
        onChange={() => {
          console.log("change");
        }}
      >
        {message}
      </Text>
      <IconButton
        background="transparent"
        position="absolute"
        top="1px"
        right="1px"
        opacity={message ? 1 : 0}
        pointerEvents={message ? "auto" : "none"}
        aria-label="modal close icon"
        _hover={{ opacity: "0.5" }}
        icon={<CloseIcon width="20px" />}
        onClick={closeIconOnClick}
      />
    </Box>
  );
};

export default ErrorModal;
