import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Img,
  Input,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import SecondaryBorderStyledButton from "../StyledElements/SecondaryBorderStyledButton";
import { Formik, Field, Form } from "formik";
import SecondaryBackgroundStyledButton from "../StyledElements/SecondaryBackgroundStyledButton";
import AddContactForm from "../components/AddContactForm.tsx";

interface AddProps {}

const Add: React.FC<AddProps> = ({}) => {
  return (
    <Box padding="2rem" height="100%">
      <AddContactForm />
    </Box>
  );
};

export default Add;
