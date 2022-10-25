import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    body: `'Inter', sans-serif`,
    heading: `Eiko-Medium`,
  },
  breakpoints: {
    sm: "320px",
    md: "768px",
    lg: "990px",
    xl: "1200px",
    xxl: "1536px",
  },
  colors: {
    footerIcons: "#757575",
  },
});

export default theme;
