import React, {useState, useEffect}from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
 import Box from '@mui/material/Box';
 import Container from '@mui/material/Container';
 import Swal from 'sweetalert2';
 import { styled } from '@mui/material/styles';
import commerce from '../lib/Commerce.js';
import {useParams}  from "react-router-dom";

export const ProductPage = ({ onAddToCart}) => {

    const params = useParams();

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


  

      const [product, setProduct] = useState({});

   
{/**
      const fetchProduct = async (id) => {
        commerce.products.retrieve(id).then((product) => setProduct(product));
       
         


      }

    */}


    const fetchProduct = async (id) => {
        const response = await commerce.products.retrieve(id);
        const {name, price, image, description} = response;
        if(response.image.url){
        setProduct({
            id,
            name,
            description,
            image,
            price


        })}


    }

   



      useEffect(() => {
        const id = window.location.pathname.split("/");
        fetchProduct(id[2]);

      



        
       


    
    }, []);



 


      
  return (
    <div>

          
   <Typography className = "banner" bgcolor ="#212121"  textAlign="center" color = "" padding ="98px"> 
   <h2> {""} {""} {""} {""} </h2>

 </Typography>  

 <Container>
    <Box padding = "20px" >
    <Grid container spacing={2}  

  justifyContent="center"
  textAlign = "center">
        <Grid item xs={12} sm={12} >
        <Card className="productPageCard"> 
        <Grid container spacing={2}>
        <Grid item xs = {12} md ={6}>
        <CardContent>
   
        <Box>

        
     
        

    {/**     <p> {JSON.stringify(product.image)} </p>


   
   
*/}

  
        

        <Box> 
    
  
       
  
        </Box>

        

        </Box>

        </CardContent>
        </Grid>
        <Grid item xs = {12} md ={6}>
        <CardContent>
        <Box> 
        <Typography   textAlign="center" paddingTop ="20px"> 
   
<h2>
   {product.name} </h2>
   
   <p> 

   {JSON.stringify(product)}



  



<p>





{/**
   {JSON.stringify(product.image.description)}
   {JSON.stringify(product.image.is_image)}
 */}
   </p>
   
   
   
   </p></Typography>  
        </Box>
        <Box>
        

        <CardMedia>


        </CardMedia>

        </Box>

        </CardContent>
        </Grid>



        </Grid>


        </Card>
        </Grid>
       
      </Grid>
    </Box>


    </Container>

    </div>
  )
}
