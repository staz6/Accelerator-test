import { Divider, Link } from "@mui/material";
import { styled } from "@mui/material/styles";

export const FlexCenter = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
}));

export const CenterDiv = styled("div")(({ theme }) => ({
  width: "80%",
  marginRight: "auto",
  marginLeft: "auto",
  [theme.breakpoints.down("sm")]: {
    width: "90%",
  },
}));

export const CenterFlexDiv = styled("div")(({ theme }) => ({
  width: "80%",
  marginRight: "auto",
  marginLeft: "auto",
  display: "flex",
  alignItems: "center",
}));

export const SubText = styled("p")(({ theme, color }) => ({
  color: theme.palette.primary[color],
  fontSize: "14px",
  lineHeight: "23px",
  fontWeight: 400,
}));

export const FooterBar = styled(Divider)(({ theme }) => ({
  // paddingBottom:"10px",
  marginTop: "10px",
  backgroundColor: "rgba(255, 255, 255, 0.2)",
}));

export const FooterLink = styled(Link)(({ theme, fontSize }) => ({
  color: "#B6C0CD",
  textDecoration: "none",
  fontSize: "12px",
  lineHeight: "18px",
  marginTop: "8px",
  cursor: "pointer",
  "&:hover": {
    color: theme.palette.primary.main,
  },
}));
