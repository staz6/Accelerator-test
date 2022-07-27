import { Button } from "@mui/material";
import React from "react";

import { styled } from "@mui/material/styles";

const ButtonContainer = styled(Button)(
  ({ theme, textColor,marginTop,bg }) => ({
    textTransform: "inherit",
    color: theme.palette.primary[textColor],
    backgroundColor: bg ? theme.palette.background[bg] : theme.palette.background.primary,
    marginTop:marginTop,
    fontWeight: 600,
    paddingLeft:"20px",
    paddingRight:"20px",
    [theme.breakpoints.down("sm")]:{
      paddingRight:"2px",
      paddingLeft:"2px",
    },
    "&:hover":{
        backgroundColor: bg ? theme.palette.background[bg] : theme.palette.background.primary,
    }
  })
);

function FillButton({
  text,
  bg,
  textColor,
  marginTop,
  handleOnClick,
}) {
  return (
    <ButtonContainer
      textColor={textColor}
      bg={bg}
      marginTop={marginTop}
    >
      {text}
    </ButtonContainer>
  );
}

export default FillButton;
