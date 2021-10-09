import { Box, Divider, Heading } from "@chakra-ui/react";
import React from "react";

interface indexProps {}

const NewlyAddedListTextDivider: React.FC<indexProps> = () => {
  return (
    <Box>
      <Heading as="h2" size="lg">
        Newly Added Contacts
      </Heading>
      <Divider margin="1.25rem 0" />
    </Box>
  );
};

export default NewlyAddedListTextDivider;
