import React from 'react'
import { styled } from "@mui/material/styles";
import { Divider, Grid, Link, List, ListItem, ListItemText } from '@mui/material';
import { FooterBar, FooterLink } from '../../styles/styles';

const FooterGrid = styled(Grid)(({theme})=>({
    "& .footerHeading"
    :{
        color:theme.palette.primary.footer,
        fontSize:"14px"
    },
    [theme.breakpoints.down("lg")]:{
        "& .Follow":{
            display:"flex",
            flexDirection:"row"
        }
    }
}))





function FooterLinks({val}) {
    return (
        <FooterGrid item lg={2} md={4} sm={6} xs={6}>
            <h2 className="footerHeading">{val.heading}</h2>
            <FooterBar/>
            <List disablePadding className={val.heading}>
                {
                    val.data.map((link,index)=>{
                        return(
                            <ListItem disablePadding style={{marginTop:"8px"}}>
                            <ListItemText>
                            <FooterLink to="/">{link.text}</FooterLink>
                            </ListItemText>
                        </ListItem>
                        )
                    })
                }
            </List>
        </FooterGrid>
    )
}

export default FooterLinks
