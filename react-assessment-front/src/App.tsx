import { Box, ChakraProvider } from "@chakra-ui/react";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import BackgroundDecor from "./components/shared/BackgroundDecor";
import ErrorModal from "./components/shared/ErrorModal";
import MainWrapper from "./components/shared/MainWrapper";
import "./fonts/style.css";
import PageNotFound from "./pages/404";
import Add from "./pages/Add";
import Landing from "./pages/Landing";
import theme from "./theme";

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
            <MainWrapper>
              <Landing />
            </MainWrapper>
          </Route>
          <Route exact path="/add">
            <MainWrapper>
              <Add />
            </MainWrapper>
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
