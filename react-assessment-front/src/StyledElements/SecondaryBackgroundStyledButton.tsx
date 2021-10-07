import { Button } from "@chakra-ui/react";
import React from "react";

const SecondaryBackgroundStyledButton: React.FC<{ buttonProps?: any }> = ({
  children,
  buttonProps,
}) => {
  return (
    <Button
      backgroundColor="secondary"
      color="white"
      width="fit-content"
      _hover={{ opacity: 0.8 }}
      {...buttonProps}
    >
      {children}
    </Button>
  );
};

export default SecondaryBackgroundStyledButton;
