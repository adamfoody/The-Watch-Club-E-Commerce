
import { styled } from '@mui/material/styles';
import  React, {useState, useEffect}from 'react';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import SentimentDissatisfiedTwoToneIcon from '@mui/icons-material/SentimentDissatisfiedTwoTone';
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import "./CartEmptyBanner.css"
import { withRouter, useHistory}  from "react-router-dom";

const CartEmptyBanner = () => {

    const ColorButton = styled(Button)(({ theme }) => ({
		color: theme.palette.getContrastText("#673ab7"),
		backgroundColor: 	"#673ab7",
		'&:hover': {
		  backgroundColor: 	"#673ab7",
		},
	  }));

    const history = useHistory();

  const buyButton = () => {
    history.push('/product')

  }



  return (


<div className ="emptyBanner">\ <Container>
<Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
          <Typography fontSize="30px" color= "#673ab7" variant="h1">
      
      <h1> Your basket is empty, press Shopping too add your Watch! </h1> 
    
      
      </Typography>
   
      <ColorButton
      size='large'
      onClick={buyButton}
  
  >

  SHOPPING 

  </ColorButton>

      </Grid>
      <Grid item xs={12} sm={6}>
      <Box padding = "40px" color = "#673ab7">
  <ShoppingCartTwoToneIcon  style={{ fontSize: 150, color:"#673ab7" }} />
  
  </Box>

  <Box padding = "10px">
 


  </Box>
      </Grid>
           
         
     
        </Grid>
        </Container>




    </div>
  )
}

export default withRouter(CartEmptyBanner);