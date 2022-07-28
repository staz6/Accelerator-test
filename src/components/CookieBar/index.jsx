import React from "react";
import { styled } from "@mui/material/styles";
import FillButton from "../CustomButton/FillButton";
import BorderButton from "../CustomButton/BorderButton";
import { CenterDiv, CenterFlexDiv } from "../../styles/styles";
import { Grid } from "@mui/material";

const CookieContainer = styled(Grid)(({ theme }) => ({
  width: "100%",
  paddingTop: "2vh",
  paddingBottom: "2vh",
  backgroundColor: theme.palette.background.primary,
  boxShadow: "0px 8px 24px 8px rgba(0, 0, 0, 0.08)",
  // justifyContent:"space-evenly",
  // display: "flex",
  alignItems: "center",
  paddingLeft: "10%",
  paddingRight: "10%",
}));

const ButtonContainer = styled(Grid)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  columnGap: "20px",
  justifyContent: "flex-end",
  [theme.breakpoints.down("lg")]: {
    justifyContent: "center",
    marginTop: "2vh",
  },
}));

const TextContainer = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down("lg")]: {
    textAlign: "center",
  },
}));

function CookieBar() {
  return (
    <CookieContainer container>
      <TextContainer item lg={6} md={12} sm={12} xs={12}>
        <subText color={"cookieBar"}>
          By using this site on the AcceleratorApp network, you agree with our
          use of cookies.
        </subText>
      </TextContainer>
      <ButtonContainer container lg={6} md={12} sm={12} xs={12}>
        <Grid item lg={3} md={4} sm={4} xd={3}>
          <FillButton
            text={"Accept Cookies"}
            textColor={"primary"}
            bg={"main"}
          />
        </Grid>
        <Grid item lg={3} md={3} sm={4} xd={3}>
          <BorderButton
            text={"Want to know more"}
            textColor={"main"}
            border={"main"}
            width={"160px"}
          />
        </Grid>

        <Grid item lg={3} md={3} sm={3} xd={12}>
          <subText style={{ color: "#0D122B" }}>
            Read our cookie policy.
          </subText>
        </Grid>
      </ButtonContainer>
    </CookieContainer>
  );
}

export default CookieBar;
