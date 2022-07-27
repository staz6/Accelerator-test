import React from 'react'
import { styled } from "@mui/material/styles";
import { Input } from '@mui/material';

const FooterContainer = styled('section')(({theme})=>({
    width:"100%",
    backgroundColor:theme.palette.background.footer
}))
const HeadingSection = styled('div')(({theme})=>({
    textAlign:"center",
    paddingTop:"2vh",
    color:theme.palette.primary.footer,
    "& .heading":{
        fontSize:"1.4em",
    },
    "& .subText":{
        fontSize:"1.1em",
        marginTop:"2vh"
    }
}))
const FooterInput = styled(Input)(({theme})=>({
    borderBottom:"1px solid rgba(255, 255, 255, 0.4)"
}))
function Footer() {
    return (
        <FooterContainer>
            <HeadingSection>
                <h1 className={"heading"}>Join our growing community</h1>
                <p className={"subText"}>Sign up for news and updates about AcceleratorApp</p>
            </HeadingSection>
            <FooterInput placeholder={"email"}/>
        </FooterContainer>
    )
}

export default Footer
