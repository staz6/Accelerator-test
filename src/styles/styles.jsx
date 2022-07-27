import { styled } from "@mui/material/styles";

export const FlexCenter = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
}));

export const CenterDiv = styled("div")(({theme})=>({
  width:"80%",
  marginRight:"auto",
  marginLeft:"auto",
  [theme.breakpoints.down("sm")]:{
    width:"90%"
  }
}))

export const CenterFlexDiv = styled("div")(({theme})=>({
  width:"80%",
  marginRight:"auto",
  marginLeft:"auto",
  display: "flex",
  alignItems: "center",
}))

export const subText= styled("p")(({theme,color})=>({
    color:theme.palette.primary[color],
    fontSize:"14px",
    lineHeight:"23px",
    fontWeight:400

}))