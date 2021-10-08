import { Box, Divider, Heading } from "@chakra-ui/react";
import React, { useState } from "react";
import Contact from "../../types/Contact";

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
