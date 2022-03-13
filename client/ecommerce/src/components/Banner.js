
import "./Banner.css";

import { styled } from '@mui/material/styles';
import  React, {useState, useEffect}from 'react';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
 
 import Container from '@mui/material/Container';




const Banner = () => {

  const image1 = 'https://i.postimg.cc/Hk5YQmvP/rolexkermit.png';
  const image2 = 'https://i.postimg.cc/nrmrmP3t/png-clipart-audemars-piguet-royal-oak-chronograph-watch-audemars-piguet-royal-oak-offshore-chronogra.png'
  const image3 = 'https://i.postimg.cc/1RBjh3Bw/png-transparent-patek-philippe-co-patek-philippe-calibre-89-automatic-watch-nautilus-watch-watch-acc.png'

  const ColorButton = styled(Button)(({ theme }) => ({
		color: theme.palette.getContrastText("#673ab7"),
		backgroundColor: 	"#673ab7",
		'&:hover': {
		  backgroundColor: 	"#673ab7",
		},
	  }));


  return (
    <div className="bannerF">
      <Container>
        <Grid container spacing={4}>
 
          <Grid item xs={12} sm={6} >
            <Typography className ="bannerTitle"fontSize="25px" color="white" variant="h1" >
         <h1>  Welcome to The Watch Club </h1> 
            </Typography>
            <ColorButton   variant="outlined">
              Shopping
            </ColorButton>
          </Grid>
          <Grid className="brandImg"  item sm={6}>
          <Grid container spacing={2}>
      <Grid item xs={12} sm={6} md ={4}> 
         <img  src={image1} height="300px" width="300px" alt ="broke bro" />
         </Grid>
         <Grid item xs={12} sm={6} md ={4}>  
         <img  src={image2} height="300px" width="300px" alt ="broke bro" />
         </Grid>
         <Grid item xs={12} sm={6} md ={4}> 
         <img  src={image3} height="300px" width="300px" alt ="broke bro" />
         </Grid>
         </Grid>
          </Grid>

        </Grid>
        
        

      </Container>
    </div>
  );
};

export default Banner;