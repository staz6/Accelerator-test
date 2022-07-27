import { Button } from '@mui/material'
import React from 'react'

import { styled } from "@mui/material/styles";

const ButtonContainer = styled(Button)(({theme,textColor,borderColor,bg,border,width,fontWeight})=>({
    textTransform:"inherit",
    color:theme.palette.primary[textColor],
    backgroundColor:theme.palette.background[bg],
    border:theme.palette.background.border[border],
    width:width,
    fontWeight:fontWeight

}))


function CustomButton({text,border,bg,textColor,width,fontWeight,handleOnClick}) {
    return (
        <ButtonContainer textColor={textColor} border={border} bg={bg} width={width} fontWeight={fontWeight}>
            {text}
        </ButtonContainer>
    )
}

export default CustomButton
