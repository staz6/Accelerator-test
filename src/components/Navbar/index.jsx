import React from 'react'
import { styled } from "@mui/material/styles";
import { Grid } from "@mui/material";
import LogoIcon from '../../icons/LogoIcon'
import { flexCenter } from '../../styles/styles';
import CustomButton from '../CustomButton';

const Container = styled('div')(({theme})=>({
    background:'linear-gradient(110.96deg, #206ECF 0.72%, #71B0FF 100%)',
    height:"8vh",
}))
const CenterContainer = styled('div')(({theme})=>({
    height:"100%",
    width:"90%",
    marginLeft:"auto",
    marginRight:"auto",
    display:"flex",
    allignItems:"center",
    justifyContent:"space-between",
    
}))
const LogoContainer = styled(flexCenter)(({theme})=>({
    "& > svg":{
        width:"49px",
        height:"49px",
        
    },
    "& > p":{
        fontFamilty:theme.typography.fontFamily,
        color:`${theme.palette.primary.primary}`,
        fontSize:"1.1em",
        fontWeight:700,
        marginLeft:"5px"

    }
}))

const LinkContainer = styled(flexCenter)(({theme})=>({
    justifyContent:"space-evenly",
    height:"100%",
    width:"70%"
}))

const NavLinks = styled('p')(({theme})=>({
    fontFamilty:theme.typography.fontFamily,
    color:`${theme.palette.primary.primary}`,
    fontWeight:600,
    fontSize:"1em",
    cursor:"pointer"
}))



function Navbar() {

    

    return (
        <Container>
            <CenterContainer>
            <LogoContainer>
                <LogoIcon />
                <p>AcceleratorApp</p>
            </LogoContainer>
            <LinkContainer>
                <NavLinks>Community</NavLinks>
                <NavLinks>Modules</NavLinks>
                <NavLinks>Company</NavLinks>
                <NavLinks>Pricing</NavLinks>
                <CustomButton text={"Sign in"} border={"white"} textColor={"primary"} width={"100px"}/>
                <CustomButton text={"Request a demo"} border={"white"} textColor={"main"} bg={"primary"} width={"150px"} fontWeight={600}/>
            </LinkContainer>
            </CenterContainer>
        </Container>
    )
}

export default Navbar
