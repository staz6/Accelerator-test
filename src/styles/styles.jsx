import { styled } from "@mui/material/styles";

export const FlexCenter = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
}));

export const centerDiv = styled("div")(({theme})=>({
  width:"80%",
  marginRight:"auto",
  marginLeft:"auto"
}))

export const subText= styled("p")(({theme,color})=>({
    color:theme.palette.primary[color],
    fontSize:"14px",
    lineHeight:"23px",
    fontWeight:400

}))