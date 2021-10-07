import { Button } from "@chakra-ui/react";
import React from "react";

const SecondaryBorderStyledButton: React.FC<{ buttonProps?: any }> = ({
  children,
  buttonProps,
}) => {
  return (
    <Button
      border="1px solid var(--chakra-colors-secondary)"
      color="secondary"
      width="fit-content"
      _hover={{ opacity: 0.8 }}
      {...buttonProps}
    >
      {children}
    </Button>
  );
};

export default SecondaryBorderStyledButton;
