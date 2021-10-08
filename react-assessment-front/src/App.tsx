import { Box, ChakraProvider } from "@chakra-ui/react";
import React from "react";
import theme from "./theme";
import Landing from "./pages/Landing";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PageNotFound from "./pages/404";
import BackgroundDecor from "./components/shared/BackgroundDecor";
import ErrorModal from "./components/shared/ErrorModal";

/**
 * Entry point
 */
export const App = () => (
  <ChakraProvider theme={theme}>
    <ErrorModal />
    <Box position="relative" zIndex="1">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route>
            <PageNotFound />
          </Route>
        </Switch>
      </BrowserRouter>
    </Box>
    <BackgroundDecor />
  </ChakraProvider>
);
