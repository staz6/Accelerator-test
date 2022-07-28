import React from "react";
import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";

const IconButton = styled(Button)(({ theme }) => ({
  padding: "5px 5px",
  border: "1px solid rgba(73, 75, 78, 1)",
  minWidth: "0px",
  width: "35px",
  color: "inherit",
}));

function BorderIcon({ icon }) {
  return <IconButton>{icon}</IconButton>;
}

export default BorderIcon;
