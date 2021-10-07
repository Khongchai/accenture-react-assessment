import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    body: "Selawik",
    heading: "Selawik",
  },
  colors: {
    primary: "#165A82",
    secondary: "#3A82F3",
    danger: "#FA5959",
    lightBlue: "#F2F7FF",
  },
  components: {
    Heading: {
      baseStyle: {
        color: "primary",
      },
    },
  },
});

export default theme;
