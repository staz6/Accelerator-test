import { createTheme, ThemeProvider } from "@mui/material/styles";
import * as React from "react";
import Navbar from "../components/Navbar";
import Home from "./Home";

const theme = createTheme({
  typography: {
    fontFamily: "Poppins",
  },
  palette: {
    primary:{
      main:"#206ECF",
      primary:"#FFFFFF",
      secondary:"#1F2024",
      sub:"#6B788A"
    },
    background: {
      main: "#206ECF",
      primary:"#FFFFFF",
      border:{
        white:"1px solid white"
      }
      
    },
    
  },
  
});

// markup
const IndexPage = () => {
  return (
    <ThemeProvider theme={theme}>
        <Navbar/>
        <Home />
    </ThemeProvider>
  )
}

export default IndexPage
