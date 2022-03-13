import React from 'react';
import Typography from '@mui/material/Typography';
import "../App.css";
import Grid from '@mui/material/Grid';
 import Box from '@mui/material/Box';
 import ProductCard from "./ProductCard";
 import Container from '@mui/material/Container';
 import { withRouter, useHistory, Link}  from "react-router-dom";
 import Card from '@mui/material/Card';
 import Banner from './Banner';


export default function Home({products, onAddToCart}) {


 // will include in report, we want to feature our most expensive products. more money less problems!



  let filterWatches = (product) => {
    return (
  (product.price.raw > 30000)
    )
  };

  const history = useHistory();


  const sellButton = ()=> {
     history.push("/sell")
     
 
   }
   
 
  


  return (
<div>
<Banner/>




<Box>
<Container> 
<Box>
    <Typography color = "#673ab7"  fontWeight ={800} className = "about"   textAlign="center" paddingTop ="20px"> 
   <h1> FEATURED WATCHES </h1>

    </Typography>
    <Box padding = "20px">
   <Typography variant="body1" fontSize = "20px" gutterBottom textAlign ="center">
   Browse the current collection of watches available from our London store.
      </Typography>
</Box>

</Box>
  <Grid container spacing ={2}>
  {products.filter((product) => filterWatches(product)).slice(0, 4).map(product =>   <Grid item lg={3} md={4} xs={12} sm={6}> 
    <ProductCard key={product.id} product={product} onAddToCart={onAddToCart}  /> </Grid>
    )}
  </Grid>
</Container>

<Box paddingTop ="100px" onClick={sellButton}  >
<Typography className = "homePageBannerSell" textAlign ="center" padding ="110px" > 
<h1>Sell Your Timepiece</h1>
<h3> Get a quote for your luxury timepiece</h3>
</Typography> 
 </Box>
 
</Box>

</div>
  )
}
