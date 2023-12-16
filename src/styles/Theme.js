import { extendTheme } from "@chakra-ui/react";
import { ButtonStyles as Button } from "./ButtonStyles";
import "./Fonts.css";

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const colors = {
  "zzPurple.100": "#8058F0",
  "zzPurple.200": "#6018B8",
  "zzPurple.300": "#380C6E",
  // "zzBlue.100": "#6787F0",
  "zzBlue.100": "rgb(75, 180, 233)",
  // "zzBlue.200": "rgb(130, 152, 239)",
  "zzBlue.200": "#4567D9",
  "zzBlue.300": "#304BA4",
  "zzPink.100": "#F961AF",
  "zzPink.200": "#E13F92",
  "zzPink.300": "#B82671",
  "zzYellow.100": "#FFFD89",
  "zzYellow.200": "#FEFB2F",
  "zzYellow.300": "#EDEA32",
  "zzGray.100": "#F5F5F5",
  "zzGray.200": "#B3A9C1",
  "zzGray.300": "#7B7288",
  "zzGray.400": "#524A5E",
  "zzGray.500": "#39353F",
};

// const styles = {
//   global: {
//     body: { color: "black" },
//     a: { color: "black" },
//     p: { color: "black" },
//     h1: { color: "black" },
//     h2: { color: "black" },
//     h3: { color: "black" },
//     h4: { color: "black" },
//     Heading: { color: "black" },
//     Text: { color: "black" },
//     Button: { color: "black" },
//     FooterLink: { color: "black" }
//   },
// };

const styles = {
  global: {
    html: {
      overflowX: "hidden",
      overflowY: "scroll",
      overscrollBehavior: "none",
      "@media(max-width: 480px)": {
        scrollSnapType: "none",
        scrollPadding: "0px",
        scrollSnapAlign: "start",
      },
      "@media(min-width: 481px)": {
        scrollSnapType: "y mandatory",
      },
    },
    body: {
      color: "zzGray.100",
      overscrollBehavior: "none",
    },
    a: { color: "zzGray.100" },
    p: { color: "zzGray.100" },
    h1: { color: "zzGray.100" },
    h2: { color: "zzGray.100" },
    h3: { color: "zzGray.100" },
    h4: { color: "zzGray.100" },
    Heading: { color: "zzGray.100" },
    Text: { color: "zzGray.100" },
    Button: { color: "zzGray.100" },
  },
};

const fonts = {
  heading: `'EXO', sans-serif`,
  body: `'Sansation Light', sans-serif`,
};

const components = {
  Button,
};

const Theme = extendTheme({ config, colors, components, styles, fonts });

export default Theme;
