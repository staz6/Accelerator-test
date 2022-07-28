import { Button } from "@mui/material";
import React from "react";

import { styled } from "@mui/material/styles";

const ButtonContainer = styled(Button)(
  ({ theme, textColor,border,width }) => ({
    textTransform: "inherit",
    color: theme.palette.primary[textColor],
    backgroundColor: "inherit",
    fontWeight: 600,
    border:theme.palette.background.border[border],
    width:width,
    [theme.breakpoints.down("sm")]:{
      width:"auto"
    },
    "&:hover":{
        backgroundColor: "inherit",
        opacity:"0.8"
    }
  })
);

function BorderButton({
  text,
  textColor,
  border,
  width,
  handleOnClick,
}) {
  return (
    <ButtonContainer
      textColor={textColor}
      width={width}
      border={border}
    >
      {text}
    </ButtonContainer>
  );
}

export default BorderButton;
