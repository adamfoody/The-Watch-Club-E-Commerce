
import ReactStars from "react-rating-stars-component";
import  React, {useState, useEffect}from 'react';
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

 import InputLabel from '@material-ui/core/InputLabel';   
 import "../App.css"
 import PropTypes from 'prop-types';
 import commerce from '../lib/Commerce';
 import Swal from 'sweetalert2';

 import { styled } from '@mui/material/styles';
 import { withRouter, useHistory, Link}  from "react-router-dom";

export default function ProductCard({product, onAddToCart}) {


  
  const history = useHistory();


 const productPageButton = ()=> {
    history.push( `/productpage/${product.id}`)
    

  }
 // `productpage/${product.id}`





    const handleAddToCart = () => {
   
      Swal.fire({
        icon: 'success',
        title: 'Added Watch to your Cart!',
     
      })
        onAddToCart(product.id, 1);
     
    }

    
    const ColorButton = styled(Button)(({ theme }) => ({
      color: theme.palette.getContrastText("#673ab7"),
      backgroundColor: 	"#673ab7",
      '&:hover': {
        backgroundColor: 	"#673ab7",
      },
   
      
    }));


    const [product1, setProduct1] = useState({});


  return <div>



      <Card className="custom-card" key={product.id} > 
    
     
      <CardContent>
      <Typography style={{  color:"#673ab7" }} className="textMiddle"  gutterBottom variant="h6" component="div" padding="10px" fontWeight="Bold">
      {product.name.substr(0, 35).toUpperCase() }    
      </Typography>


      <CardMedia
       
        component="img" 
        height = "200px"
        width = "200px"
   
        image={ product.image.url}
        alt={product.name}
       
          
      />


     
  
      <CardActions>

   


      </CardActions>
      <Typography  className="textMiddle" variant="body2" color="text.secondary">
      {product.description.substr(3, 150).replace(/(<([^>]+)>)/ig,"")}....
      </Typography>

      <Typography className="textMiddle" component="p" variant="h5" style={{  color:"#673ab7" }}>
      <h4>{product.price.formatted_with_symbol} </h4>  

  
      
      </Typography>
      <Typography className="textMiddle" component="p" variant="h5" style={{  color:"#673ab7" }}>
      <ButtonGroup row> 
      <Box paddingBottom="5px"
      > 
      

      
   

      <ColorButton    
  name="Add to cart"
  className="product__btn"
  onClick={handleAddToCart}



  variant ="contained" size='small'color="success"> Add Basket! </ColorButton>
      </Box>
      <Box paddingBottom="5px"> 


      <ColorButton    
  name="Add to cart"
      //className="custom-button"
      className="custom-button"
  onClick = {productPageButton}


  variant ="outlined" size='small'color="success">  View Product </ColorButton>
  


      </Box>
      </ButtonGroup>
      </Typography>
      </CardContent>
      <CardActions>
      




      </CardActions>
          </Card>

      


  </div>;
}

