
   
import React from 'react';
import PropTypes from 'prop-types';
import "./_cart.css";
import ReactStars from "react-rating-stars-component";
import Card from '@mui/material/Card';
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
 import CancelIcon from '@mui/icons-material/Cancel';
 import { styled } from '@mui/material/styles';

const CartItem = ({ item, onUpdateCartQty, onRemoveFromCart }) => {

	const handleUpdateCartQty = (lineItemId, quantity) => {
		onUpdateCartQty(lineItemId, quantity);
	}

	const handleRemoveFromCart = () => {
		onRemoveFromCart(item.id);
	}

	const ColorButton = styled(Button)(({ theme }) => ({
		color: theme.palette.getContrastText("#673ab7"),
		backgroundColor: 	"#673ab7",
		'&:hover': {
		  backgroundColor: 	"#673ab7",
		},
	  }));
	  


	return (
		<div >

   		<Card>
		<Grid container spacing ={2} >

		<Grid item xs = {4}> 
		<Box padding = "10px">
			   <img  height = "200px" width = "200px" src={item.image.url} alt={item.name} />
		</Box>
		
		</Grid>

		<Grid item xs = {8}>
		<Grid container >
		<Grid item xs = {8}>
		<Box textAlign = "center" padding="10px" >
		<Typography component="p" variant="h6" >
				
			
		
				{item.name} {item.sku} 
				
				</Typography>
				<Typography component="p" variant="h6" >
				
			
		
				Quantity: {item.quantity}
				
				</Typography>
				<Typography component="p" variant="h6" >
				
			
		
				Product ID: {item.id}
				
				</Typography>
				<Box className ="gapCart" paddingTop = "10px">
			
			<ButtonGroup aria-label="medium secondary button group" className = "buttonGroup">
				<ColorButton  variant ="contained"  onClick={() => item.quantity > 1 ? handleUpdateCartQty(item.id, item.quantity - 1) : handleRemoveFromCart()}>-</ColorButton>
			
				<ColorButton variant ="outlined" type="button" onClick={() => handleUpdateCartQty(item.id, item.quantity + 1)}>+</ColorButton>
				</ButtonGroup>
				</Box>
				</Box>

		</Grid>
		<Grid item xs = {4}>
		<Box textAlign = "center">
		<Typography padding="10px" fontWeight ={600}  >
			Total Cost 
				</Typography>
		<Typography padding="10px" fontWeight ={600}  style={{  color:"red" }}>
				{item.line_total.formatted_with_symbol}
				</Typography>
				<Box > 
			<ColorButton
				
				color ="secondary"
			
				onClick={handleRemoveFromCart}
			>
				Remove
			</ColorButton>
			</Box>
			
			</Box>
		</Grid>

		</Grid>
		



		</Grid>
	
		</Grid>
		

		</Card>



	 

	
		
			

  





 


		
		</div>
	);
};

export default CartItem;

CartItem.propTypes = {
    item: PropTypes.object,
    handleUpdateCartQty: PropTypes.func,
    onUpdateCartQty: () => {},
    onRemoveFromCart: () => {}
 };