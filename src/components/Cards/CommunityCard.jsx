import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Grid, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Divider from "@mui/material/Divider";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import * as React from "react";
import communityBar from "../../svg/communityBar.svg";
import communityChart from "../../svg/communityChart.svg";
import communityDash from "../../svg/communityDash.svg";
import communityPlane from "../../svg/communityPlane.svg";
import communityPlus from "../../svg/communityPlus.svg";
import FillButton from "../CustomButton/FillButton";
const icons = [
  communityBar,
  communityDash,
  communityChart,
  communityPlane,
  communityPlus,
];
const CustomCard = styled(Card)(({ theme }) => ({
  width: "100%",
  boxShadow: "0px 8px 24px 8px rgba(0, 0, 0, 0.08)",
  borderRadius: "8px",
  "& .avatar": {
    borderRadius: "8px",
    backgroundColor: theme.palette.primary.main,
  },
  "& .MuiCardHeader-title": {
    color: theme.palette.primary.communityCard.heading,
    fontWeight: 600,

    fontSize: "1.3em",
  },
  "& .cardContent": {
    lineHeight: "1.2em",
    color: theme.palette.primary.communityCard.content,
  },
  "& .featuers": {
    color: theme.palette.primary.communityCard.content,

    fontSize: "1.2em",
    fontWeight: "600",
    marginTop: "5vh",
    paddingBottom: "3vh",
  },
  "& .checkIcon": {
    fill: theme.palette.primary.main,
  },
  "& .MuiListItemText-primary": {
    color: theme.palette.primary.communityCard.content,
  },
  "& .action": {
    paddingTop: "6vh",
    display: "flex",
    justifyContent: "center",
    paddingBottom: "20px",
    textAlign: "center",
    "& > button": {
      width: "80%",
    },
  },
}));

const Bar = styled(Divider)(({ theme }) => ({
  paddingTop: "20px",
  paddingBottom: "10px",
}));

function CommunityCard({ title, index }) {
  return (
    <Grid item lg={4} md={4} sm={6} xs={12} key={index}>
      <CustomCard>
        <CardHeader
          avatar={
            <Avatar className={"avatar"} aria-label="recipe">
              <img src={icons[index]} />
            </Avatar>
          }
          title={title}
        />

        <CardContent>
          <Typography className={"cardContent"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis.
            <br /> <br />
            Class aptent taciti sociosqu ad litora torquent per conubia nostra,
            per inceptos himenaeos.
          </Typography>
          <Bar />
          <Typography className={"featuers"}>Popular Featuers</Typography>
          {[...Array(3)].map((val, i) => {
            return (
              <ListItem disablePadding key={i}>
                <ListItemIcon>
                  <CheckCircleIcon className={"checkIcon"} />
                </ListItemIcon>
                <ListItemText primary="Lorem ipsum dolor sit " />
              </ListItem>
            );
          })}
        </CardContent>

        <CardActions className={"action"}>
          <FillButton text={"Get Started"} bg={"main"} textColor={"primary"} />
        </CardActions>
      </CustomCard>
    </Grid>
  );
}

export default CommunityCard;
