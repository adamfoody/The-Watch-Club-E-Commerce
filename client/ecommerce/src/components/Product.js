
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
 import commerce from '../lib/Commerce.js';
 import ProductCard from "./ProductCard";
 import "../App.css";
 import PropTypes from 'prop-types';
 import Swal from 'sweetalert2/dist/sweetalert2.js'



export default function Product({products, onAddToCart}) {


    const [brandFilter, setBrandFilter] = useState("ALL");

    const [sizeFilter, setSizeFilter] = useState("ALL");
    const [priceFilter, setPriceFilter] = useState("ALL");

    const [value, setValue] = useState(2);

    const handleBrandFilter = (e) => setBrandFilter(e.target.value);
    const handleSizeFilter = (e) => setSizeFilter(e.target.value);
    const handlePriceFilter = (e) => setPriceFilter(e.target.value);
    const handleSortProduct = (e) => setSortNumber(e.target.value);


  const [sortNumber, setSortNumber] = useState(50);




  let filterProducts = (product) => {
    return (
  (product.categories[0].name === brandFilter || brandFilter === "ALL" ) &&
  (product.categories[1].name === sizeFilter || sizeFilter === "ALL") &&
  (product.price.raw <= priceFilter || priceFilter === "ALL")
    )
  };


      
      function valuetext(value) {
        return `£${value}`;
      }

    

 

  return(
   <div>
   {/**
   <Typography className = "banner" color = "#673ab7"    textAlign="right"  padding ="70px"> 
   <h2> Latest Watches </h2></Typography>  
  
     */}
     <Container>    
    <Grid className = "gap" container spacing={2} >
        <Grid  item md={12} xs={12} s={12} > 
        <Grid  item md={12} xs={12} s={12} >
  
        </Grid>
        <Grid container spacing={2} className="filters" > 
        <Grid item md={3} xs={12} s={6}> 
        <Card className = "custom-filter-card"> 
        <FormControl   size="small" sx={{ m: 1, minWidth: 120 }}>
        <FormLabel>Brand Filter
        
     
          </FormLabel>

        <div  className = "padding">
     
     <Select
         autoWidth
            size="small"
         variant="outlined" 
         onChange={handleBrandFilter}>

   

      
         <MenuItem value={"Rolex"}>Rolex</MenuItem>
         <MenuItem value={"IWC"}>IWC</MenuItem>
         <MenuItem value={"Audermars Piguet"}>Audermars Piguet</MenuItem>
         <MenuItem value={"Omega"}>Omega</MenuItem>
         <MenuItem value={"Patek Phillipe"}>Patek Phillipe</MenuItem>
         <MenuItem value={"ALL"}>All</MenuItem>
    
   
       </Select>
</div>

        

       </FormControl>
            </Card>
</Grid>
       <Grid item md={3} xs={12} s={6}> 
        <Card className = "custom-filter-card"> 
        <FormControl   size="small" sx={{ m: 1, minWidth: 120}}>
        <FormLabel> Size Filter </FormLabel>
    
        <div  className = "padding">
     
       <Select
      
   
           autoWidth
                 
              onChange={handleSizeFilter}
             
              size="small"
              
           variant="outlined"
     
           
         >
          <MenuItem value={"42mm"}>42mm</MenuItem>
           <MenuItem value={"41mm"}>41mm</MenuItem>
           <MenuItem value={"40mm"}>40mm</MenuItem>
           <MenuItem value={"39mm"}>39mm</MenuItem>
           <MenuItem value={"36mm"}>36mm</MenuItem>
           <MenuItem value={"ALL"}>ALL</MenuItem>
       
        
         </Select>
</div>
 

        </FormControl>


            </Card>
</Grid>
       <Grid item md={3} xs={12} s={6} > 
        <Card className = "custom-filter-card"> 
         <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
   <FormControl   size="small" sx={{ m: 1, minWidth: 120}}>
        <FormLabel> Products per page </FormLabel>
  
        <div  className = "padding">
        <Select
      
   
      autoWidth
            
         onChange={handleSortProduct}
        
         size="small"
         
      variant="outlined"

      
    >
     <MenuItem value={4}> 4 </MenuItem>
      <MenuItem value={8}>8</MenuItem>
      <MenuItem value={16}>16</MenuItem>
      <MenuItem value={32}>32</MenuItem>
      <MenuItem value={100}>All</MenuItem>
  
   
    </Select>


      </div>
      </FormControl>
      </Box>
            </Card>
</Grid>
       <Grid item md={3} xs={12} s={6}> 
        <Card className = "custom-filter-card"> 
        <FormControl   size="small" sx={{ m: 1, minWidth: 120}}>
        <FormLabel> Price Filter </FormLabel>
  
        <div  className = "padding">
        <Select
      
   
      autoWidth
            
         onChange={handlePriceFilter}
        
         size="small"
         
      variant="outlined"

      
    >
     <MenuItem value={5000}> £5000 </MenuItem>
      <MenuItem value={10000}>£10,000</MenuItem>
      <MenuItem value={15000}>£15,000</MenuItem>
      <MenuItem value={30000}>£30,000</MenuItem>
      <MenuItem value={75000}>£75,000</MenuItem>
      <MenuItem value={200000}>£200,000</MenuItem>
      <MenuItem value={"ALL"}>All</MenuItem>
  
   
    </Select>


      </div>
      </FormControl>




  







            </Card>
            
        </Grid>



   
           
       
         {/**

         {products.map(product => 
        
            
        <Grid item md={3} xs={12} s={6}> 
     
    <ProductCard key={product.id} product={product}   onAddToCart={onAddToCart}  />     </Grid>
    
    )}

 */}
    
       
        
      
        
        
     
  




        {products.filter((product) => filterProducts(product)).slice(0, sortNumber).map(product => 
        <Grid item lg={3} md={4} xs={12} sm={6}> 
    <ProductCard key={product.id} product={product}   onAddToCart={onAddToCart}  /> </Grid>
    )}

        
        </Grid>


{/**

products.slice(0, 4).map(product =>   <Grid item lg={3} md={4} xs={12} sm={6}> 
    <ProductCard key={product.id} product={product}   onAddToCart={onAddToCart}  /> </Grid>
    )}

        
        </Grid>)}





 */}
 




        </Grid>


              




    </Grid>  


 </Container>
 


  </div>
  )}

  Product.propTypes = {
    products: PropTypes.array,
};

