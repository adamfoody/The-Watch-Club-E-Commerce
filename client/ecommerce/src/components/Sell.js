import React, {useState} from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import "../App.css";
import Button from '@mui/material/Button';
import { withRouter, useHistory}  from "react-router-dom";
import Card from '@mui/material/Card';
import ArticleTwoToneIcon from '@mui/icons-material/ArticleTwoTone';
import LinkedCameraTwoToneIcon from '@mui/icons-material/LinkedCameraTwoTone';
import LocalAtmTwoToneIcon from '@mui/icons-material/LocalAtmTwoTone';
import WatchTwoToneIcon from '@mui/icons-material/WatchTwoTone';
import CreditCardTwoToneIcon from '@mui/icons-material/CreditCardTwoTone';
import { styled } from '@mui/material/styles';
import ArrowDownwardTwoToneIcon from '@mui/icons-material/ArrowDownwardTwoTone';


function Sell(props){


  const {history} = props;

  const image1 = 'https://i.postimg.cc/Hk5YQmvP/rolexkermit.png';
  const image2 = 'https://i.postimg.cc/nrmrmP3t/png-clipart-audemars-piguet-royal-oak-chronograph-watch-audemars-piguet-royal-oak-offshore-chronogra.png'
  const image3 = 'https://i.postimg.cc/1RBjh3Bw/png-transparent-patek-philippe-co-patek-philippe-calibre-89-automatic-watch-nautilus-watch-watch-acc.png'


  const handleMenuClick = (pageURL) => {
    history.push(pageURL)};

    const ColorButton = styled(Button)(({ theme }) => ({
        color: theme.palette.getContrastText("#673ab7"),
        backgroundColor: 	"#673ab7",
        '&:hover': {
          backgroundColor: 	"#673ab7",
        },
      }));

  return (
    <div>

   {/** 
<Typography className = "banner" bgcolor ="#212121"  textAlign="right" color = "#673ab7"  fontWeight ={800} padding ="70px"> 
   <h2> SELLING YOUR WATCH </h2></Typography>  
*/}

<div className ="sellBanner">\ <Container>
<Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <Typography fontSize="30px" color="white" variant="h1">
         <h1>  Sell Your Timepiece</h1> 
            </Typography>

            <Typography  variant="subtitle1" fontSize = "20px" gutterBottom color="white"  paddingBottom ="20px">
   If you have a used luxury watch that you simply don’t wear, why not realise its value by selling it on to us? Follow our simple 5-step process to make the most out of your unwanted watches…
      </Typography>
           
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
<Container>
<Box  className="center" paddingTop ="30px" >

<Box >



  
 

</Box>

<Grid container  
spacing ={2}

 
 > 
<Grid item xs={12} md={6}> 
<Box  textAlign ="center" >
<Card className ="cardHeight"> 
 
<Typography   color = "#673ab7"  fontWeight ={800} className = "about"   textAlign="center" > 
   <h2> Step One - The Form </h2></Typography>  
    <Box >
      <ArticleTwoToneIcon   style={{ fontSize: 50, color:"#673ab7" }} />
    
     </Box>
    <Typography  variant="body1" fontSize = "20px" gutterBottom   gutterBottom padding="5px">
     Simply complete our on-line form by submitting as many details of your watch as you can, including make, model, condition, age etc.
     
      </Typography>
      </Card>
     
</Box>
</Grid> 



<Grid item xs={12} md ={6}> 
<Box >
<Card className ="cardHeight" > 

  
<Typography color = "#673ab7"  fontWeight ={800} className = "about"   textAlign="center" > 
   <h2> Step Two - The Photos </h2></Typography>  
    <Box >
      <LinkedCameraTwoToneIcon  style={{ fontSize: 50, color:"#673ab7" }} />
    
     </Box>
    <Typography  variant="body1" fontSize = "20px" gutterBottom   padding="5px">
    Once our team have been in touch, To help receive an accurate valuation; if possible, take a few clear photos of your watch using a smart phone or digital camera and attach them to the form.
    
      </Typography>
    </Card>
     
</Box>
</Grid> 



<Grid item xs={12} md ={6}> 
<Box >
<Card className ="cardHeight"> 

<Typography color = "#673ab7"  fontWeight ={800} className = "about"   textAlign="center" > 
   <h2> Step Three - The Offer </h2></Typography>  
    <Box>
      <LocalAtmTwoToneIcon   style={{ fontSize: 50, color:"#673ab7" }} />
    
     </Box>
    <Typography  variant="body1" fontSize = "20px" gutterBottom  padding="5px">

    Once the watch details have been received, we’ll get back to you within 48hrs with an initial offer, subject to an inspection.
     
      </Typography>
    </Card>
     
</Box>
</Grid> 



<Grid item xs={12} md ={6}> 
<Box paddingBottom = "10px">
<Card className ="cardHeight">


<Typography color = "#673ab7"  fontWeight ={800} className = "about"   textAlign="center" > 
   <h2> Step Four - The Watch </h2></Typography>  
    <Box >
      <WatchTwoToneIcon  style={{ fontSize: 50, color:"#673ab7" }} />
    
     </Box>
    <Typography  variant="body1" fontSize = "20px" gutterBottom padding="5px">
    If you are happy with our initial offer, we will provide our postage address for the watch to be sent to, or we can arrange a meeting/inspection at our London premises.
   
      </Typography>
    
     </Card>
</Box>
</Grid> 


<Grid item xs={12} md ={6}> 
<Box >
<Card className ="cardHeight"> 

 
<Typography color = "#673ab7"  fontWeight ={800} className = "about"   textAlign="center" > 
   <h2> Step Five - The Payment </h2></Typography>  
    <Box >
      <CreditCardTwoToneIcon   style={{ fontSize: 50, color:"#673ab7" }} />
    
     </Box>
    <Typography  variant="body1" fontSize = "20px" gutterBottom   padding="5px">
    Following a final inspection, the agreed amount will be paid either the same day if the watch is delivered in person, or within 2-3 business days if sent remotely.
  
      </Typography>
    
     </Card>
</Box>
</Grid> 



<Grid item xs={12} md={6}> 
<Box >
<Card className ="cardHeight"> 

<Typography color = "#673ab7"  fontWeight ={800} className = "about"   textAlign="center" > 
   <h2> Ready to Sell?</h2></Typography>  
    <Typography  variant="body1" fontSize = "20px" gutterBottom  padding="5px">
    If you are ready to start the process, please pop us an enquiry!
     <Box padding="20px">

        <ColorButton  onClick={()=>handleMenuClick('/sellform')} variant = "contained"> SEND ENQUIRY </ColorButton>
    
     </Box>
      </Typography>
    
    </Card> 
</Box>
</Grid> 
</Grid>
   </Box>
   


   </Container>






    </div>
  )
}

export default withRouter(Sell);