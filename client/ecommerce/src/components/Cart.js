
   
import React from 'react';
import PropTypes from 'prop-types';
import CartItem from './CartItem';
import "./_cart.css";
import ReactStars from "react-rating-stars-component";
import Card from '@mui/material/Card';
import Paper from '@mui/material/Paper';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
 import Box from '@mui/material/Box';
 import Container from '@mui/material/Container';
 import Select from '@mui/material/Select';
 import FormControl from '@mui/material/FormControl';
 import Slider from  '@mui/material/Slider';
 import FormLabel from '@mui/material/FormLabel';
 import MenuItem from '@material-ui/core/MenuItem';
 import TextField from '@material-ui/core/TextField';  
 import { withRouter, useHistory}  from "react-router-dom";

 import {Route, Link} from "react-router-dom";
 import { styled } from '@mui/material/styles';
 import SentimentDissatisfiedTwoToneIcon from '@mui/icons-material/SentimentDissatisfiedTwoTone';
import CartEmptyBanner from "./CartEmptyBanner.js";

function Cart({ cart, onRemoveFromCart, onEmptyCart, onUpdateCartQty}) {


    
  const history = useHistory();


  const checkoutButton = () => {
    history.push('/checkout')

  }



  
  const handleEmptyCart = () => {
    onEmptyCart();
  }


	const ColorButton = styled(Button)(({ theme }) => ({
		color: theme.palette.getContrastText("#673ab7"),
		backgroundColor: 	"#673ab7",
		'&:hover': {
		  backgroundColor: 	"#673ab7",
		},
	  }));

  

  const renderEmptyMessage = () => {
      if (cart.total_unique_items > 0) {
        return;
      }
  
      return (
        <Typography color = "#673ab7"  fontWeight ={800} className = "about"   textAlign="center" paddingTop ="20px"> 
      <h2> Your basket is empty, press Shopping too add your Watch! </h2> 
    
      
      </Typography>
      
      );
  }

  const renderItems = () => (
    cart.line_items.map((lineItem) => (


      <Box padding = "10px"> 
        <CartItem
        
          item={lineItem}
          onUpdateCartQty={onUpdateCartQty}
          onRemoveFromCart={onRemoveFromCart}
          key={lineItem.id}
          
        />
        </Box>

    ))

)

const renderAllPrices = () => (
  cart.line_items.map((lineItem) => (
 
    <Box padding = "10px"> 
    <Typography  style={{  color:"#212121" }}  >
    {lineItem.name} {" "} x  {" "} 
    {lineItem.quantity}  
  
     </Typography>
   
</Box>

  ))
)

  const renderTotal = () => (
      <div className="cart__total">
          <Typography  fontWeight ={600}  style={{  color:"#212121" }}  className="cart__total-title"> Total Cost </Typography>
          <Typography fontWeight ={600}  style={{  color:"red" }}  className="cart__total-price">{cart.subtotal.formatted_with_symbol} </Typography>
      </div>
  )


  return (

    <div  >

<Box paddingBottom ="40px">


   </Box>
 <Container > 

 {cart.total_unique_items < 1 && (
//here



<CartEmptyBanner/>



  
  
  

 )}

 {cart.total_unique_items > 0 && (

 <Grid container spacing = {2}>
 
    <Grid item xs = {12} md ={8}>
   
 
    {renderItems()}

    

    

    </Grid>
    <Grid item xs = {12} md = {4}>

    <Card>
    
    <Box textAlign = "center">
    <Typography color = "#673ab7"  fontWeight ={800} className = "about"   textAlign="center" paddingTop ="20px"> 
   <h2> Summary </h2></Typography>  



      
   

    </Box>
    <Box textAlign = "center">

    {renderAllPrices()}
    </Box>

    <Box className="red" textAlign = "center">
      { renderTotal() }
      </Box>
      <Box textAlign='center' padding ="20px"> 
      <ButtonGroup>
        <ColorButton  size = "small"	variant = "outlined" color = "secondary" className="cart__btn-empty" onClick={handleEmptyCart}>Empty Cart</ColorButton>
        <ColorButton  size = "small"		variant = "outlined" color ="secondary" className="cart__btn-checkout"
        onClick = {checkoutButton}
        >        
      Check Out
      </ColorButton> 


        </ButtonGroup>
        </Box>

    </Card>

    </Grid>

 </Grid>
 )}

</Container>
    </div>

  );
};

export default withRouter(Cart);

Cart.propTypes = {
  cart: PropTypes.object,
  onRemoveFromCart: () => {},
  onUpdateCartQty: () => {},
  onEmptyCart: () => {},
};