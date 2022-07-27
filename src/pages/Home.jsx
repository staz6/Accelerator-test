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
import CustomRadio from "../components/CustomRadio";
import RectangleDisc from "../images/Rectangledisc.png"
import RectangleAir from "../images/Startup-image.png"
import RectangleDash from "../images/Rectangledash.png"
import RectangleFile from "../images/Rectanglefile.png"
import RectangleArrow from "../images/Rectanglearrow.png"
import { getGridData, getIcons } from "../helpers/helper";
import CommunityCard from "../components/Cards/CommunityCard";



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

const HeaderHeading = styled("p")(
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
    display:"flex",
    justifyContent:"space-between",
    marginTop:"10vh"
}))

const CardContainer = styled(centerDiv)(({theme})=>({
  marginTop:"5vh"
}))

const TopHeading = styled('h4')(({theme})=>({
  fontFamily: theme.typography.fontFamily,
  color:theme.palette.primary.main,
  fontSize:"24px",

}))
const Heading = styled('h2')(({theme})=>({
  fontFamily: theme.typography.fontFamily,
  color:theme.palette.primary.secondary,
  fontSize:"40px",
  paddingTop:"10px",
  paddingBottom:"5px"
}))
const SubHeading = styled('p')(({theme})=>({
  fontFamily: theme.typography.fontFamily,
  color:theme.palette.primary.subHeading,
  fontSize:"18px"
}))

const icon=getIcons([RectangleDisc,RectangleAir,RectangleDash,RectangleFile,RectangleArrow])
const communityCard=getGridData();
function Home() {

  console.log(icon)
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
     <HeaderHeading
        fontSize={"1.8em"}
        paddingTop={"4vh"}
        fontWeight={600}
        color={"subGrey"}
        lineHeight={"165%"}
      >
        Join in and Connect
      </HeaderHeading>
      <HeaderHeading fontSize={"72px"} fontWeight={700} color={"primary"}>
        To faster your <br />
        innovation potential
      </HeaderHeading>
      <HeaderHeading
        fontSize={"20px"}
        paddingTop={"1vh"}
        fontWeight={400}
        color={"subGrey"}
        lineHeight={"165%"}
      >
        AcceleratorApp Innovation Community — Tools and community to <br />
        facilitate innovation between all members of our community
      </HeaderHeading>

      <FillButton text={"Schedule a Demo"} textColor={"headerButton"} marginTop={"2vh"}/>
     </ContentContainer>
    
        <VideoComponent/>
        <CookieBar/>

       
    </LandingContainer>
    <RadioContainer>
          {
            icon.map((val,index)=>{
              return(
                <CustomRadio icon={val.icon} marginTop={val.marginTop} index={index}/>
              )
            })
          }
        </RadioContainer>
    <CardContainer>
          <TopHeading>Community</TopHeading>
          <Heading>Lorem ipsum dolor sit amet</Heading>
          <SubHeading>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</SubHeading>

          <Grid container spacing={2} style={{marginTop:"8vh"}} >
              {
                communityCard.map((val,index)=>{
                  return(
                    <CommunityCard title={val} index={index}/>
                  )
                })
              }
          </Grid>

    </CardContainer>
    </HomeContainer>
  );
}

export default Home;
