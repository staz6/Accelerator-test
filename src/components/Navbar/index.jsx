import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import { Grid, useMediaQuery } from "@mui/material";
import LogoIcon from "../../icons/LogoIcon";
import CustomButton from "../CustomButton";
import FillButton from "../CustomButton/FillButton";
import { FlexCenter } from "../../styles/styles";
import BorderButton from "../CustomButton/BorderButton";
import DrawerComponent from "./DrawerComponent";
import { Drawer, IconButton } from '@mui/material';
import {MenuIcon} from '@mui/icons-material/Menu'
import { useTheme } from "@emotion/react";

const Container = styled("div")(({ theme }) => ({
  background: "linear-gradient(110.96deg, #206ECF 0.72%, #71B0FF 100%)",
  height: "8vh",
}));
const CenterContainer = styled(FlexCenter)(({ theme }) => ({
  height: "100%",
  width: "80%",
  marginLeft: "auto",
  marginRight: "auto",
}));
const LogoContainer = styled(FlexCenter)(({ theme }) => ({
  "& > svg": {
    width: "49px",
    height: "49px",
  },
  "& > p": {
    fontFamilty: theme.typography.fontFamily,
    color: `${theme.palette.primary.primary}`,
    fontSize: "1.1em",
    fontWeight: 700,
    marginLeft: "5px",
  },
}));

const LinkContainer = styled(FlexCenter)(({ theme }) => ({
  justifyContent: "space-evenly",
  height: "100%",
  width: "70%",
  marginLeft:"auto"

}));

const NavLinks = styled("p")(({ theme }) => ({
  fontFamilty: theme.typography.fontFamily,
  color: `${theme.palette.primary.primary}`,
  fontWeight: 600,
  fontSize: "1em",
  cursor: "pointer",
  "&:hover":{
    opacity:"0.8"
  }
}));

function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
  const [openDrawer, setOpenDrawer] = useState(false);
  const Drawer = () => {
    return (
      <>
      <Drawer
      open={openDrawer}
      onClose={() => setOpenDrawer(false)}
    >
        </Drawer>
        <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
      <MenuIcon />
    </IconButton>
      </>
  )
  }
  return (
    <Container>
      <CenterContainer>
        <LogoContainer>
          <LogoIcon />
          <p>AcceleratorApp</p>
        </LogoContainer>
        <LinkContainer>
        
        {
          isMobile? <DrawerComponent/> : <>
          <NavLinks>Community</NavLinks>
          <NavLinks>Modules</NavLinks>
          <NavLinks>Company</NavLinks>
          <NavLinks>Pricing</NavLinks>
          <BorderButton
            text={"Sign in"}
            border={"white"}
            textColor={"primary"}
            width={"100px"}
          />
          <FillButton
            text={"Request a demo"}
            textColor={"main"}
          />
          </>
        }
          
        </LinkContainer>
      </CenterContainer>
    </Container>
  );
}

export default Navbar;
