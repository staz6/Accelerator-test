import React from 'react'
import { styled } from "@mui/material/styles";
import { flexCenter } from '../../styles/styles';
import FillButton from '../CustomButton/FillButton';
import BorderButton from '../CustomButton/BorderButton';


const CookieContainer = styled(flexCenter)(({theme})=>({
    width:"100%",
    height:"10vh",
    backgroundColor:theme.palette.background.primary,
    boxShadow:"0px 8px 24px 8px rgba(0, 0, 0, 0.08)",
    justifyContent:"space-evenly"
}))

const ButtonContainer = styled(flexCenter)(({theme})=>({
    columnGap:"20px"
}))

function CookieBar() {
    return (
        <CookieContainer>
            <subText color={"cookieBar"}>
            By using this site on the AcceleratorApp network, you agree with our use of cookies.
            </subText>
            <ButtonContainer>
                <FillButton text={"Accept Cookies"} textColor={"primary"} bg={"main"}/>
                <BorderButton text={"Want to know more"} textColor={"main"} border={"main"}/>
                <subText style={{color:"#0D122B"}}>
                    Read our cookie policy.
                </subText>
            </ButtonContainer>
        </CookieContainer>
    )
}

export default CookieBar
