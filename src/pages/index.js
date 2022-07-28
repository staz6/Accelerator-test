import { createTheme, ThemeProvider } from "@mui/material/styles";
import * as React from "react";
import "@fontsource/poppins";
import Navbar from "../components/Navbar";
import Home from "./Home";
import Footer from "../components/Footer";

const theme = createTheme({
  typography: {
    fontFamily: "Poppins",
  },
  palette: {
    primary: {
      main: "#206ECF",
      primary: "#FFFFFF",
      secondary: "#1F2024",
      headerButton: "#1B1E22",
      cookieBar: "#1F304C",
      footer: "#F3F5F7",
      sub: "#6B788A",
      subGrey: "#E7EAEE",
      subHeading: "#6B788A",
      communityCard: {
        heading: "#363C45",
        content: "#33475B",
      },
    },

    background: {
      main: "#206ECF",
      primary: "#FFFFFF",
      footer: "#1B1E22",
      border: {
        white: "1px solid white",
        main: "1px solid #206ECF",
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
      <Footer />
    </ThemeProvider>
  );
};

export default IndexPage;
