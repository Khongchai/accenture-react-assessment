import { Box, Flex, Stack, Text } from "@chakra-ui/react";
import React from "react";
import DeleteButton from "../../../../StyledElements/DeleteButton";
import Contact from "../../../../types/Contact";

interface MobileProps {
  contact: Contact;
}

const Mobile: React.FC<MobileProps> = ({ contact }) => {
  return (
    <Flex fontSize="15px">
      <Text flex="0.1" marginRight="1rem">
        {contact.id}
      </Text>
      <Stack spacing="0.75rem" flex="auto">
        <Text mb="0.5rem">{contact.name}</Text>
        <Text>
          <b style={{ marginRight: "1rem" }}>Email:</b> {contact.email}
        </Text>
        <Text>
          <b style={{ marginRight: "1rem" }}>Phone:</b>
          {contact.phone}
        </Text>
      </Stack>
      <Box>
        <DeleteButton />
      </Box>
    </Flex>
  );
};

export default Mobile;
