import { Box, Flex, Stack, Text } from "@chakra-ui/react";
import React from "react";
import DeleteButton from "../../../../StyledElements/DeleteButton";
import Contact from "../../../../types/Contact";
import getFieldErrorConditions from "../../../../utils/getFieldErrorConditions";
import CustomizedEditableText from "./CustomizedEditableText";

interface MobileProps {
  contact: Contact;
}

const MobileRow: React.FC<MobileProps> = ({ contact }) => {
  return (
    <Flex fontSize="15px">
      <Text flex="0.1" marginRight="1rem">
        {contact.id}
      </Text>
      <Stack spacing="0.75rem" flex="auto">
        <Box>
          <CustomizedEditableText
            fieldId={contact.id}
            fieldName={"name"}
            fieldValue={contact.name}
            error={getFieldErrorConditions("name")}
          />
        </Box>
        <Flex>
          <b style={{ marginRight: "1rem" }}>Email:</b>{" "}
          <CustomizedEditableText
            fieldId={contact.id}
            fieldName={"email"}
            fieldValue={contact.email}
            error={getFieldErrorConditions("email")}
          />
        </Flex>
        <Flex>
          <b style={{ marginRight: "1rem" }}>Phone:</b>
          <CustomizedEditableText
            fieldId={contact.id}
            fieldName={"phone"}
            fieldValue={contact.phone}
            error={getFieldErrorConditions("phone")}
          />
        </Flex>
      </Stack>
      <DeleteButton id={contact.id} />
    </Flex>
  );
};

export default MobileRow;
