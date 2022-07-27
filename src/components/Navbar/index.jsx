import React from 'react'
import { styled } from "@mui/material/styles";
import { Grid } from "@mui/material";
import LogoIcon from '../../icons/LogoIcon'

const Container = styled('div')(({theme})=>({
    display:"flex",
    allignItems:"center",
    justifyContent:"space-around",
    background:'linear-gradient(110.96deg, #206ECF 0.72%, #71B0FF 100%)',
    height:"6vh",

}))

function Navbar() {
    return (
        <Container>
            <div>
                <LogoIcon/>
            </div>
        </Container>
    )
}

export default Navbar
