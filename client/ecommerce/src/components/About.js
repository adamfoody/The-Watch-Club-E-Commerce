import React, {useState} from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import "../App.css";
import Button from '@mui/material/Button';
import { withRouter, useHistory}  from "react-router-dom";
import { SocialIcon } from 'react-social-icons';
import Card from '@mui/material/Card';
import Link from '@mui/material/Link';
import { styled } from '@mui/material/styles';
import { black } from '@mui/material/colors';
import CardMedia from '@mui/material/CardMedia';

 function About(props) {

  const {history} = props;
  

  const handleMenuClick = (pageURL) => {
    history.push(pageURL)
    };

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText("#673ab7"),
  backgroundColor: 	"#673ab7",
  '&:hover': {
    backgroundColor: 	"#673ab7",
  },
}));

const image1 = 'https://i.postimg.cc/Hk5YQmvP/rolexkermit.png';

  return <div>
  
  <div className ="aboutBanner" > <Container>
<Grid container spacing={4}>
          <Grid item xs={12} sm={12}>
            <Typography fontSize="30px" color="white" variant="h1">
         <h1>  About The Watch Club</h1> 
            </Typography>

            <Typography  variant="subtitle1" fontSize = "20px" gutterBottom color="white"  paddingBottom ="20px">
            A timepiece can say a lot about a person, from their professional field and accomplishments to their individual taste and sense of style, or simply an admiration for fine craftsmanship and technical precision. Here at The Watch Club, we don’t just buy and sell luxury watches, we obsess over them. All watches have history and heritage, and used watches in particular tell not only the time, but also a story. 

      </Typography>

      <Typography  variant="subtitle1" fontSize = "20px"   gutterBottom color="white"  paddingBottom ="20px">
   
   As a dealership, retailer and family business, we pride ourselves in only selling watches that are in exceptional condition and perfect working order, whether they are brand new or 50 years old. Therefore, all watches come with a one-year warranty against mechanical failure, in addition to any manufacturer’s warranty that remains valid. We deal in most luxury watch brands, including Rolex, Omega, Cartier, Panerai and Audemars Piguet.

   </Typography>
   
   <Typography variant="body2" fontSize = "20px" color="white"   gutterBottom>
   Please do not hesitate to give us a call, we will be pleased to help, and if nothing else we would love to hear your own horological story!
   </Typography>


<Box padding = "20px" textAlign='center'>
   <Typography variant="body2" fontSize = "20px"  gutterBottom>
 <ColorButton  onClick={()=>handleMenuClick('/contact')} variant = "outlined"> Contact The Watch Club  </ColorButton>
   </Typography>
</Box>
           
          </Grid>
    
        </Grid>
        </Container>
       
</div>
 {/* <div className ="aboutBanner2">\ <Container>
<Grid container spacing={4}>
          <Grid item xs={12} sm={12}>

     
           
          </Grid>
    
        </Grid>
        </Container>}
       
</div>*/}

<Container>
<Box className = "about"   >

<Box padding = "20px">
     
</Box>

   </Box>

   <Box className = "about"   >
   <Typography color = "#673ab7"  fontWeight ={800} className = "about"   textAlign="center" > 
   <h1> Meet The Team </h1></Typography>  


  
</Box>

  <Box> 
  <Grid container spacing = {2}>
  <Grid item md={2.4} xs={12} sm={6}> 
  <Box> 
  <Card className = "team-card">
  <Typography color="#673ab7"  fontWeight ={600}  textAlign="center" padding="10px"  > 
    Foody the Fierce </Typography>  
    <Typography color="#673ab7" textAlign="center" > 
    CEO </Typography>  
    <Typography  color="#673ab7"variant="body2" textAlign="center" gutterBottom padding={"5px"}>
      <Link color="#673ab7"> foody@thewatchclub.com </Link>
      </Typography>
      <Typography color="#673ab7" variant="body2" textAlign="center" gutterBottom >
       07123456789
      </Typography>
    <Box classNane = "aboutimage"> 
<CardMedia
 component="img" 
        height = "200px"
        width = "150px"
        image="https://pbs.twimg.com/media/B0ZuuuECMAA_S2B.png"
       > 


</CardMedia>
  </Box> 
  </Card>
  </Box>


  </Grid>


  <Grid item md={2.4} xs={12} sm={6}> 
  <Box> 
  <Card className = "team-card">
  <Typography color="#673ab7" fontWeight ={600}   textAlign="center" padding="10px"  > 
    Gelu the Great </Typography>  
    <Typography color="#673ab7"  textAlign="center" > 
   CQO </Typography>  
    <Typography  variant="body2" textAlign="center" gutterBottom padding={"5px"}>
      <Link color="#673ab7"> gelu@thewatchclub.com </Link>
      </Typography>
      <Typography color="#673ab7" variant="body2" textAlign="center" gutterBottom >
      999
      </Typography>
    
    <Box classNane = "aboutimage"> 
<CardMedia
 component="img" 
        height = "200px"
        width = "150px"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDUyJ40ZYS7nRTWjzL74i4aWmRNroCmC0yOw&usqp=CAU"
       > 


</CardMedia>
  </Box> 
  </Card>
  </Box>

  </Grid>

  <Grid item md={2.4} xs={12} sm={6}> 
  <Box> 
  <Card className = "team-card">
  <Typography color="#673ab7" fontWeight ={600}  textAlign="center" padding="10px"  > 
  Angus the Almighty  </Typography>  
    <Typography  color="#673ab7"  textAlign="center" > 
    CTO  </Typography>  
    <Typography  color="#673ab7" variant="body2" textAlign="center" gutterBottom padding={"5px"}>
      <Link color="#673ab7"> angus@thewatchclub.com </Link>
      </Typography>
      <Typography color="#673ab7" variant="body2" textAlign="center" gutterBottom >
       07123456789
      </Typography>
    <Box classNane = "aboutimage"> 
<CardMedia
 component="img" 
        height = "200px"
        width = "150px"
        image="https://pbs.twimg.com/profile_images/1038548670768181249/L5Y34Ygo_400x400.jpg"
       > 


</CardMedia>
  </Box> 
  </Card>
  </Box>


  </Grid>
  <Grid item md={2.4} xs={12} sm={6}> 
  <Box> 
  <Card className = "team-card">
  <Typography color="#673ab7" fontWeight ={600}   textAlign="center" padding="10px"  > 
    James the Joker </Typography>  
    <Typography color="#673ab7"  textAlign="center" > 
    CISO </Typography>  
    <Typography color="#673ab7" variant="body2" textAlign="center" gutterBottom padding={"5px"}>
      <Link color="#673ab7"> jimbo@thewatchclub.com </Link>
      </Typography>
      <Typography color="#673ab7" variant="body2" textAlign="center" gutterBottom >
       07123456789
      </Typography>
    
    <Box classNane = "aboutimage"> 
<CardMedia
 component="img" 
        height = "200px"
        width = "150px"
        image="https://runescape.wiki/images/Head_old.gif?720f7"
       > 


</CardMedia>
  </Box> 
  </Card>
  </Box>

  </Grid>


  <Grid item md={2.4} xs={12} sm={6}> 
  <Box> 
  <Card className = "team-card">
  <Typography color="#673ab7"  fontWeight ={600}  textAlign="center" padding="10px" > 
   Mosu the Mad </Typography>  
    <Typography color="#673ab7"  textAlign="center" > 
    COO </Typography>  
    <Typography color="#673ab7" variant="body2" textAlign="center" gutterBottom padding={"5px"}>
      <Link color="#673ab7"> italiano@thewatchclub.com </Link>
      </Typography>
      <Typography color="#673ab7" variant="body2" textAlign="center" gutterBottom >
       07123456789
      </Typography>
    <Box classNane = "aboutimage"> 
<CardMedia
 component="img" 
        height = "200px"
        width = "150px"
        image="https://oldschool.runescape.wiki/images/Spria_chathead.png?c91cb"
       > 


</CardMedia>
  </Box> 
  </Card>
  </Box>

  </Grid>


  </Grid> 
  </Box> 



   </Container>

<h1>  </h1> 
  </div>;
}

export default withRouter(About);
