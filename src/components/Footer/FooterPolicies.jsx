import {
  Divider,
  Grid,
  Link,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";
import { FooterBar, FooterLink } from "../../styles/styles";
import LanguageIcon from "@mui/icons-material/Language";
import { useTheme } from "@emotion/react";

const tmp = [
  "Privacy Policies",
  "Cookies",
  "Term of Use",
  "DPA",
  "Subprocessors",
];

const CopyGrid = styled(Grid)(({ theme }) => ({
  textAlign: "right",
  alignItems: "center",
  justifyContent: "flex-end",
  display: "flex",
  fontSize: "12px",

  [theme.breakpoints.down("lg")]: {
    marginTop: "19px",
    justifyContent: "center",
    textAlign: "left",
    fontSize: "10px",
    "& .language": {
      display: "none",
    },
  },
  "& .copyText": {
    color: theme.palette.primary.primary,
    paddingLeft: "5px",
  },
  "& .divider": {
    marginLeft: "10px",
    color: "rgba(255, 255, 255, 0.2)",
    fontSize: "1.2em",
  },
  "& .icon": {
    color: theme.palette.primary.primary,
    marginLeft: "10px",
  },
}));

const FooterList = styled(List)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  padding: 0,
  "& .footerMobile": {
    justifyContent: "center",
  },
  [theme.breakpoints.down("lg")]: {
    "& .MuiList-root": {
      justifyContent: "center",
    },
    "& .MuiListItem-root": {
      width: "20%",
      textAlign: "center",
    },
  },
  [theme.breakpoints.down("sm")]: {
    "& .MuiListItem-root": {
      width: "30%",
      textAlign: "center",
      fontSize: "10px",
    },
  },
}));

function FooterPolicies() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
  return (
    <>
      <Grid item lg={6} md={12} xs={12} sm={12}>
        {!isMobile ? (
          <FooterList disablePadding>
            {tmp.map((val, index) => {
              return (
                <ListItem disablePadding index={index}>
                  <ListItemText>
                    <FooterLink to="/">{val}</FooterLink>
                  </ListItemText>
                </ListItem>
              );
            })}
          </FooterList>
        ) : (
          <>
            <>
              <FooterList
                disablePadding
                className={"footerMobile"}
                style={{ justifyContent: "center" }}
              >
                <ListItem disablePadding>
                  <ListItemText>
                    <FooterLink to="/">{tmp[0]}</FooterLink>
                  </ListItemText>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemText>
                    <FooterLink to="/">{tmp[1]}</FooterLink>
                  </ListItemText>
                </ListItem>
                <FooterBar />
              </FooterList>
              <FooterBar style={{ width: "60%", marginLeft: "20%" }} />
              <FooterList
                disablePadding
                className={"footerMobile"}
                style={{ justifyContent: "center" }}
              >
                <ListItem disablePadding>
                  <ListItemText>
                    <FooterLink to="/">{tmp[2]}</FooterLink>
                  </ListItemText>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemText>
                    <FooterLink to="/">{tmp[3]}</FooterLink>
                  </ListItemText>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemText>
                    <FooterLink to="/">{tmp[4]}</FooterLink>
                  </ListItemText>
                </ListItem>
                <FooterBar />
              </FooterList>
            </>
          </>
        )}
      </Grid>
      <CopyGrid item lg={6} md={12} xs={12} sm={12}>
        <p className={"copyText"}>
          Copyright © 2022 AcceleratorApp All Rights Reserved{" "}
        </p>
        {/* <Divider/>
         */}
        <p className={"divider"}>|</p>
        <LanguageIcon className={"icon"} />
        <p className={"copyText language"}> English</p>
      </CopyGrid>
    </>
  );
}

export default FooterPolicies;
