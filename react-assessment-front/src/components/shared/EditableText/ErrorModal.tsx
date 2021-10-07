import { Text } from "@chakra-ui/layout";
import React from "react";
import ReactDOM from "react-dom";

//TODO =>
const ErrorModal: React.FC = ({ children }) => {
  return ReactDOM.createPortal(
    <Text pos="fixed" bottom="100px">
      {children}
    </Text>,
    document.getElementById("main-wrapper") as HTMLElement
  );
};

export default ErrorModal;
