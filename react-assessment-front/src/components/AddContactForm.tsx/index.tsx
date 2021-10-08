import { ChevronLeftIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, Text, Img } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import SecondaryBackgroundStyledButton from "../../StyledElements/SecondaryBackgroundStyledButton";
import Contact from "../../types/Contact";
import fetch from "../../utils/fetch";
import getFieldErrorConditions from "../../utils/getFieldErrorConditions";
import EditModeButton from "../shared/EditModeButton";
import { InputField } from "./CustomField";

interface indexProps {
  setNewlyAddedList: React.Dispatch<React.SetStateAction<Contact[]>>;
}

const AddContactForm: React.FC<indexProps> = ({ setNewlyAddedList }) => {
  return (
    <Formik
      initialValues={{ name: "", email: "", phone: "" }}
      onSubmit={async (values, { setFieldError, setSubmitting }) => {
        const errorExist = getError(values, setFieldError);
        if (!errorExist)
          fetch(
            "http://localhost:3000/contacts",
            "POST",
            JSON.stringify(values)
          ).then((newlyAddedContact) => {
            setNewlyAddedList((list) => [...list, newlyAddedContact]);
            setSubmitting(false);
          });
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Flex css={{ gap: "1rem" }} flexDir={["column", null, null, "row"]}>
            <InputField label="name" name="name" type="text" />
            <InputField label="email" name="email" type="email" />
            <InputField label="phone" name="phone" type="number" />
          </Flex>
          <Flex
            css={{
              gap: "1rem",
              marginTop: "2rem",
              justifyContent: "flex-end",
            }}
          >
            <Box marginRight="auto">
              <Link to={""}>
                <Button
                  leftIcon={<ChevronLeftIcon />}
                  color="black"
                  backgroundColor="turquoise"
                >
                  <Text display={["none", null, null, "block"]}>
                    Back to Homepage
                  </Text>
                </Button>
              </Link>
            </Box>
            <EditModeButton />
            <SecondaryBackgroundStyledButton
              buttonProps={{
                leftIcon: <Img src="assets/person_add.svg" />,
                type: "submit",
                isLoading: isSubmitting,
                fontSize: "14px",
              }}
            >
              Add
            </SecondaryBackgroundStyledButton>
          </Flex>
        </Form>
      )}
    </Formik>
  );
};

export default AddContactForm;

function getError(
  values: Omit<Contact, "id">,
  setFieldError: (field: string, message: string | undefined) => void
) {
  let errorExist = false;
  const setError = () => {
    errorExist = true;
    return true;
  };
  const nameError = getFieldErrorConditions("name");
  const emailError = getFieldErrorConditions("email");
  const phoneError = getFieldErrorConditions("phone");
  nameError.condition(values.name) &&
    setError() &&
    setFieldError("name", nameError.message);
  emailError.condition(values.email) &&
    setError() &&
    setFieldError("email", emailError.message);
  phoneError.condition(values.phone.toString()) &&
    setError() &&
    setFieldError("phone", phoneError.message);

  return errorExist;
}
