import { Box, Grid, Heading, Img, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import SecondaryBackgroundStyledButton from "../StyledElements/SecondaryBackgroundStyledButton";

const PageNotFound = ({}) => {
  return (
    <Grid width="100vw" height="100vh" placeItems="center">
      <Stack spacing="3rem" display="flex" align="center">
        <Img alt="no alt text" src="404.svg" width="min(250px, 40vw)" />
        <Heading as="h1" size="2xl">
          Page Not Found
        </Heading>
        <Box textAlign="center">
          <Text>Hmm, something's wrong...</Text>
          <Text>The page you are looking for does't exist. </Text>
        </Box>
        <SecondaryBackgroundStyledButton>
          <Link to="/">Back to Homepage</Link>
        </SecondaryBackgroundStyledButton>
      </Stack>
    </Grid>
  );
};

export default PageNotFound;
