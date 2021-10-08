import { Flex, Img } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import SecondaryBackgroundStyledButton from "../../StyledElements/SecondaryBackgroundStyledButton";
import SecondaryBorderStyledButton from "../../StyledElements/SecondaryBorderStyledButton";
import Contact from "../../types/Contact";
import fetch from "../../utils/fetch";
import getFieldErrorConditions from "../../utils/getFieldErrorConditions";
import { InputField } from "./CustomField";

interface indexProps {}

const AddContactForm: React.FC<indexProps> = ({}) => {
  return (
    <Formik
      initialValues={{ name: "", email: "", phone: "" }}
      onSubmit={async (values, { setFieldError, setSubmitting }) => {
        //prettier-ignore

        const errorExist = getError(values, setFieldError);
        if (!errorExist)
          fetch(
            "http://localhost:3000/contacts",
            "POST",
            JSON.stringify(values)
          ).then(() => {
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
          <Flex css={{ gap: "1rem", marginTop: "2rem" }}>
            <SecondaryBackgroundStyledButton
              buttonProps={{
                leftIcon: <Img src="assets/person_add.svg" />,
                type: "submit",
                isLoading: isSubmitting,
              }}
            >
              Add Now
            </SecondaryBackgroundStyledButton>
            <Link to={""}>
              <SecondaryBorderStyledButton>
                Back to Homepage
              </SecondaryBorderStyledButton>
            </Link>
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
