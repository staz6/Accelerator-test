import * as React from "react";
import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";


export const RadioButton = styled(Button)(({theme,marginTop})=>({
    boxShadow: "0px 16px 48px rgba(0, 0, 0, 0.18)",
    marginTop:marginTop,
    borderRadius: "32px",
    backgroundColor:theme.palette.background.primary,
    height:"184px",
    width:"183px",
    [theme.breakpoints.down("lg")]:{
        width:"11vh",
        height:"12vh",
        
    },
    [theme.breakpoints.down("sm")]:{
        "& .icon":{
            width:"60%"
        },
        width:"15vh",
        height:"9vh",
        borderRadius: "8px",
        marginTop:marginTop/2
        
    },
    
    
}))

function CustomRadio({icon,marginTop,index}) {
    return (
        <RadioButton marginTop={marginTop} index={index}>
            <img src={icon} alt={"icon"} className={"icon"}/>
        </RadioButton>
    );
}
export default CustomRadio;