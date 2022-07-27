import { createTheme, ThemeProvider } from "@mui/material/styles";
import * as React from "react";
import Navbar from "../components/Navbar";
import Home from "./Home";

const theme = createTheme({
  typography: {
    fontFamily: "Poppins",
  },
  palette: {
    primary: {
      main: "#206ECF",
      primary: "#FFFFFF",
      secondary: "#1F2024",
      headerButton:"#1B1E22",
      cookieBar:"#1F304C",
      sub: "#6B788A",
      subGrey: "#E7EAEE",
      subHeading:"#6B788A"
    },
    background: {
      main: "#206ECF",
      primary: "#FFFFFF",
      border: {
        white: "1px solid white",
        main:"1px solid #206ECF"
      },
    },
  },
});

// markup
const IndexPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Home />
    </ThemeProvider>
  );
};

export default IndexPage;
