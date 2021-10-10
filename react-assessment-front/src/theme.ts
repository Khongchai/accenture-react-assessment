import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    body: "Selawik Regular",
    heading: "Selawik Bold",
  },
  colors: {
    primary: "#165A82",
    secondary: "#3A82F3",
    danger: "#FA5959",
    lightBlue: "#F2F7FF",
    turquoise: "#5CE8DC",
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
