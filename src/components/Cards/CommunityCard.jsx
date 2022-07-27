import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Grid, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Divider from '@mui/material/Divider';
import communityBar from '../../svg/communityBar.svg'
import communityDash from '../../svg/communityDash.svg'
import communityChart from '../../svg/communityChart.svg'
import communityPlus from '../../svg/communityPlus.svg'
import communityPlane from '../../svg/communityPlane.svg'
import FillButton from '../CustomButton/FillButton';
const icons=[communityBar,communityDash,communityChart,communityPlane,communityPlus]
const CustomCard = styled(Card)(({theme})=>({
  
  boxShadow:"0px 8px 24px 8px rgba(0, 0, 0, 0.08)",
  borderRadius:"8px",
  "& .avatar":{
    borderRadius:"8px",
    backgroundColor:theme.palette.primary.main
  },
  "& .MuiCardHeader-title":{
    color:theme.palette.primary.communityCard.heading,
    fontWeight:600,
    
    fontSize:"24px"
},
"& .cardContent":{
    lineHeight:"23px",
    color:theme.palette.primary.communityCard.content,
    
},
"& .featuers":{
  color:theme.palette.primary.communityCard.content,
  
  fontSize:"16px",
  fontWeight:"600",
  marginTop:"10px",
  paddingBottom:"10px"
},
"& .checkIcon":{
  fill:theme.palette.primary.main
},
"& .MuiListItemText-primary":{
  color:theme.palette.primary.communityCard.content,
  
},
"& .action":{
  paddingTop:"25px",
  display:"flex",
  justifyContent:"center",
  paddingBottom:"20px",
  textAlign:"center",
  "& > button":{
    width:"80%"
  }
}

}))

const Bar = styled(Divider)(({theme})=>({
  paddingTop:"20px",
  paddingBottom:"10px"
}))


function CommunityCard({title,index}) {
    return (
        <Grid item lg={4} md={4} sm ={6} xs={12}>
            <CustomCard sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar className={"avatar"} aria-label="recipe">
            <img src={icons[index]}/>
          </Avatar>
        }
       
        title={title}
      />
      
      <CardContent>
        <Typography className={"cardContent"}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
        <br/> <br/>
        Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
        </Typography>
        <Bar/>
        <Typography className={"featuers"}>
          Popular Featuers
        </Typography>
        {
          [...Array(3)].map((val,index)=>{
            return(
              <ListItem disablePadding index={index}>
            <ListItemIcon>
              <CheckCircleIcon className={"checkIcon"}/>
            </ListItemIcon>
            <ListItemText
              primary="Lorem ipsum dolor sit "
            />
          </ListItem>
            )
          })
        }
        
      </CardContent>
        
      <CardActions className={"action"}>
        <FillButton text={"Get Started"} bg={"main"} textColor={"primary"} />
        </CardActions>
      
    </CustomCard>
        </Grid>
    )
}

export default CommunityCard
