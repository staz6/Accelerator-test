import React from "react";
import { styled } from "@mui/material/styles";
import { Grid } from "@mui/material";
import landingSvg from "../svg/landing.svg";
import LandingCurve from "../icons/LandingCurve";
import { SvgIcon } from "@mui/material";
import CustomButton from "../components/CustomButton";
import FillButton from "../components/CustomButton/FillButton";
import VideoComponent from "../components/VideoComponent";
import CookieBar from "../components/CookieBar";
import { centerDiv } from "../styles/styles";

const HomeContainer = styled('div')(({theme})=>({
    paddingBottom:"5vh"
}))
const LandingContainer = styled(`section`)(({ theme }) => ({
  width: "100%",
  height: "100vh",
  position: "relative",
  
  // background: `linear-gradient(110.96deg, #206ECF 0.72%, #71B0FF 100%)`,
  // border: `12px solid #EDF1F7`,
}));

const ContentContainer = styled('div')(({theme})=>({
    width:"100%",
    height:"100%",
    textAlign:"center"
}))

const TopHeading = styled("p")(
  ({ theme, fontSize, paddingTop, fontWeight, color,lineHeight }) => ({
    fontFamily: theme.typography.fontFamily,
    color: theme.palette.primary[color],
    fontSize: fontSize,
    fontWeight: fontWeight,
    textTransform: "inherit",
    textAlign: "center",
    paddingTop: paddingTop,
    lineHeight: lineHeight,
  })
);

const RadioContainer = styled(centerDiv)(({theme})=>({
    height:"250px",
}))



function Home() {
  return (
    <HomeContainer>
        <LandingContainer >
      <SvgIcon
        component={LandingCurve}
        viewBox="0 0 1440 930"
        preserveAspectRatio="none"
        height="100%"
        width="100%"
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          zIndex: "-1",
        }}
      />

     <ContentContainer>
     <TopHeading
        fontSize={"1.8em"}
        paddingTop={"4vh"}
        fontWeight={600}
        color={"subGrey"}
        lineHeight={"165%"}
      >
        Join in and Connect
      </TopHeading>
      <TopHeading fontSize={"72px"} fontWeight={700} color={"primary"}>
        To faster your <br />
        innovation potential
      </TopHeading>
      <TopHeading
        fontSize={"20px"}
        paddingTop={"1vh"}
        fontWeight={400}
        color={"subGrey"}
        lineHeight={"165%"}
      >
        AcceleratorApp Innovation Community — Tools and community to <br />
        facilitate innovation between all members of our community
      </TopHeading>

      <FillButton text={"Schedule a Demo"} textColor={"headerButton"} marginTop={"2vh"}/>
     </ContentContainer>
    
        <VideoComponent/>
        <CookieBar/>

        <RadioContainer>

        </RadioContainer>
    </LandingContainer>
    </HomeContainer>
  );
}

export default Home;
