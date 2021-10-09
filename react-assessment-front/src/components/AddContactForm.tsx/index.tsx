import { Flex } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import React from "react";
import { serverUrl } from "../../const/server";
import Contact from "../../types/Contact";
import fetch from "../../utils/fetch";
import getFieldErrorConditions from "../../utils/getFieldErrorConditions";
import { useRefetchToggleStore } from "../GlobalStores/RefetchToggleStore";
import Buttons from "./Buttons";
import { InputField } from "./CustomField";

const AddContactForm: React.FC = () => {
  const { toggle: toggleRefetch } = useRefetchToggleStore((state) => state);
  return (
    <Formik
      initialValues={{ name: "", email: "", phone: "" }}
      onSubmit={async (values, { setFieldError, setSubmitting }) => {
        const errorExist = getError(values, setFieldError);
        if (!errorExist)
          fetch(serverUrl + "/contacts", "POST", JSON.stringify(values)).then(
            (newlyAddedContact) => {
              toggleRefetch();
              setSubmitting(false);
            }
          );
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Flex css={{ gap: "1rem" }} flexDir={["column", null, null, "row"]}>
            <InputField label="name" name="name" type="text" />
            <InputField label="email" name="email" type="email" />
            <InputField label="phone" name="phone" type="number" />
          </Flex>
          <Buttons isSubmitting={isSubmitting} />
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
