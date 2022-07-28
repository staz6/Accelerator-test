import React from "react";
import { styled } from "@mui/material/styles";
import { Grid, Input } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstaIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FooterLinks from "./FooterLinks";
import { CenterDiv, FooterBar } from "../../styles/styles";
import BorderIcon from "./BorderIcon";
import FooterPolicies from "./FooterPolicies";

const FooterContainer = styled("section")(({ theme }) => ({
  width: "100%",
  backgroundColor: theme.palette.background.footer,
  paddingBottom: "5vh",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
}));
const HeadingSection = styled("div")(({ theme }) => ({
  textAlign: "center",
  paddingTop: "2vh",
  color: theme.palette.primary.footer,
  "& .heading": {
    fontSize: "1.4em",
  },
  "& .subText": {
    fontSize: "1.1em",
    marginTop: "2vh",
  },
}));
const footerData = [
  {
    heading: "Community",
    data: [
      {
        type: "text",
        text: "Loren ipsum",
      },
      {
        type: "text",
        text: "Loren ipsum",
      },
      {
        type: "text",
        text: "Loren ipsum",
      },
      {
        type: "text",
        text: "Loren ipsum",
      },
      {
        type: "text",
        text: "Loren ipsum",
      },
    ],
  },
  {
    heading: "Modules",
    data: [
      {
        type: "text",
        text: "Loren ipsum",
      },
      {
        type: "text",
        text: "Loren ipsum",
      },
      {
        type: "text",
        text: "Loren ipsum",
      },
      {
        type: "text",
        text: "Loren ipsum",
      },
      {
        type: "text",
        text: "Loren ipsum",
      },
      {
        type: "text",
        text: "Loren ipsum",
      },
    ],
  },
  {
    heading: "Company",
    data: [
      {
        type: "text",
        text: "Loren ipsum",
      },
      {
        type: "text",
        text: "Loren ipsum",
      },
      {
        type: "text",
        text: "Loren ipsum",
      },
      {
        type: "text",
        text: "Loren ipsum",
      },
      {
        type: "text",
        text: "Loren ipsum",
      },
    ],
  },
  {
    heading: "Documentation",
    data: [
      {
        type: "text",
        text: "Loren ipsum",
      },
      {
        type: "text",
        text: "Loren ipsum",
      },
      {
        type: "text",
        text: "Loren ipsum",
      },
      {
        type: "text",
        text: "Loren ipsum",
      },
    ],
  },
  {
    heading: "Follow",
    data: [
      {
        type: "icon",
        text: <BorderIcon icon={<LinkedInIcon />} />,
      },
      {
        type: "icon",
        text: <BorderIcon icon={<FacebookIcon />} />,
      },
      {
        type: "icon",
        text: <BorderIcon icon={<InstaIcon />} />,
      },
      {
        type: "icon",
        text: <BorderIcon icon={<TwitterIcon />} />,
      },
    ],
  },
];

const FooterInput = styled(Input)(({ theme }) => ({
  width: "58vh",
  borderBottom: "1px solid rgba(255, 255, 255, 0.4)",
  marginTop: "2vh",
  marginLeft: "auto",
  marginRight: "auto",
  paddingBottom: "22px",
  "& input": {
    "&::placeholder": {
      color: "rgba(255, 255, 255, 0.2)",
    },
    color:theme.palette.primary.primary,
    width: "100%",
  },
  [theme.breakpoints.down("lg")]: {
    width: "50%",
  },
  [theme.breakpoints.down("sm")]: {
    width: "80%",
  },
  
}));

const FooterLinksContainer = styled(Grid)(({ theme }) => ({
  justifyContent: "space-between",
  paddingTop: "4vh",
  [theme.breakpoints.down("lg")]: {
    justifyContent: "flex-start",
  },
}));
function Footer() {
  return (
    <FooterContainer>
      <HeadingSection>
        <h1 className={"heading"}>Join our growing community</h1>
        <p className={"subText"}>
          Sign up for news and updates about AcceleratorApp
        </p>
      </HeadingSection>
      <FooterInput
        placeholder={"Your email"}
        endAdornment={
          <ArrowRightAltIcon style={{ fill: "rgba(255, 255, 255, 1)" }} />
        }
      />

      <CenterDiv>
        <FooterLinksContainer container spacing={2}>
          {footerData.map((val, index) => {
            return <FooterLinks val={val} />;
          })}
        </FooterLinksContainer>

        <FooterBar />

        <Grid container style={{ paddingTop: "1vh" }}>
          <FooterPolicies />
        </Grid>
      </CenterDiv>
    </FooterContainer>
  );
}

export default Footer;
