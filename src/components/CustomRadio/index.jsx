import * as React from "react";
import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";


export const RadioButton = styled(Button)(({theme,marginTop})=>({
    boxShadow: "0px 16px 48px rgba(0, 0, 0, 0.18)",
    marginTop:marginTop,
    borderRadius: "32px",
    backgroundColor:theme.palette.background.primary,
    height:"184px",
    width:"183px"
}))

function CustomRadio({icon,marginTop,index}) {
    return (
        <RadioButton marginTop={marginTop} index={index}>
            <img src={icon} alt={"icon"}/>
        </RadioButton>
    );
}
export default CustomRadio;