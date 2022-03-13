import React from 'react'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from  '@mui/material/TextField';
import FormLabel from  '@mui/material/FormLabel';
import Card from '@mui/material/Card';
import { SocialIcon } from 'react-social-icons';
import FormGroup from '@mui/material/FormGroup';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import MenuItem from '@mui/material/MenuItem';
import Icon from '@mui/material/Icon';
import  makeStyles  from '@mui/material';
import  FormControlLabel  from '@mui/material';

import { styled } from '@mui/material/styles';

export default function SellForm() {

    const ColorButton = styled(Button)(({ theme }) => ({
        color: theme.palette.getContrastText("#673ab7"),
        backgroundColor: 	"#673ab7",
        '&:hover': {
          backgroundColor: 	"#673ab7",
        },
      }));

  
      const image1 = 'https://i.postimg.cc/Hk5YQmvP/rolexkermit.png';


  return (
    <div>
   <div className ="sellFormBanner"> <Container>
<Grid container >
          <Grid item xs={12} sm={6}>
            <Typography fontSize="30px" color="white" variant="h1">
         <h1>  Please Complete The Sales Form!</h1> 
            </Typography>

            <Typography  variant="subtitle1" fontSize = "20px" gutterBottom color="white"  paddingBottom ="20px">
A member of our team will be in touch soon.  </Typography>
           
          </Grid>
       
        </Grid>
        </Container>
</div>


<Container>
    <Box paddingTop = "60px" >
   
    <Grid container spacing={2}  

  justifyContent="center"
  textAlign = "center">
        <Grid item xs={12} sm={6} >
 
      
   <Box 
    
    display="flex" 
    justifyContent="center"
    alignItems="center"
   
    paddingBottom ="20px"
    >
   <Stack
      component="form"
      sx={{
        width: '75ch',
      }}
      spacing={2}
      autoComplete="off"
   >


      <TextField
        size = "small"
        label="First Name"
        required
        variant="outlined"
       
        
     />
      <TextField
         size = "small"
        label="Surname"
        variant="outlined"
      
      />

<TextField
     size = "small"
    label="Email Address"
    variant="outlined"
    required
  />

<TextField
     size = "small"
    label="Message"
    variant="outlined"
    multiline
    rows={4}
  />

  

<TextField
     size = "small"
    label="Brand"
    variant="outlined"
    select
    required
  />

<TextField
      size = "small"
     label="Reference"
     variant="outlined"
     required
   
   />




<TextField
  size = "small"
 label="Condition"
 variant="outlined"
  select

/>

<TextField
  size = "small"
 label="Owners"
 variant="outlined"
 select

/>

<TextField
  size = "small"
 label="Box and Papers"
 variant="outlined"
 multiline

/>
  
  <Box padding={"20px"}>
        <Grid container spacing={2}  
  alignItems="center"
  justifyContent="center"
  textAlign = "center">
        <Box className = "paddingRight"> 
        <ColorButton  variant = "contained"> Clear Form </ColorButton>
        </Box>
        <Box className = "paddingRight"> 
    <ColorButton variant = "contained"> Submit </ColorButton>
        </Box>
     
     
        </Grid>
        
   
        </Box>

    </Stack>
   </Box>
  
   

        </Grid>
       
      </Grid>

    </Box>


    </Container>





       
{/** 
        <Container>
        <Box paddingTop = "40px" >  
        <Grid container
         spacing={2}  
            justifyContent="center"
            textAlign = "center">

        <Card >  
        <Typography   textAlign="center" paddingTop ="20px"> 
   <h2> Complete Sales Form </h2></Typography>  
       
   
   <Box 
    paddingLeft="70px"
    display="flex" 
    justifyContent="center"
    alignItems="center"
    className = "Form"
    paddingBottom ="40px"
    >

<Grid item xs={12} sm={6} >

   <Stack
      component="form"
      sx={{
        width: '50ch',
      }}
      spacing={2}
      autoComplete="off"
   >

      <TextField
        size = "small"
        label="First Name"
    
        variant="outlined"
       
        
     />
      <TextField
         size = "small"
        label="Surname"
        variant="outlined"
      
      />
       <TextField
         size = "small"
        label="Mobile Number"
        variant="outlined"
        type = "number"
      
      />

<TextField
     size = "small"
    label="Email Address"
    variant="outlined"
  
  />

<TextField
     size = "small"
    label="Message"
    variant="outlined"
    multiline
    rows={4}
  />
    </Stack>




    </Grid>

    <Grid item xs={12} sm={6} >

<Stack
   component="form"
   sx={{
     width: '50ch',
   }}
   spacing={2}
   autoComplete="off"
>

   <TextField
     size = "small"
     label="Brand"
 
     variant="outlined"
    
     
  />
   <TextField
      size = "small"
     label="Reference"
     variant="outlined"
   
   />



<TextField
  size = "small"
 label="Model"
 variant="outlined"
 multiline

/>
<TextField
  size = "small"
 label="Condition"
 variant="outlined"
 multiline

/>

<TextField
  size = "small"
 label="Owners"
 variant="outlined"

/>

<TextField
  size = "small"
 label="Box and Papers"
 variant="outlined"
 multiline

/>

 </Stack>




 </Grid>

  
  <Box padding={"20px"}>
        <Grid container spacing={2}  
  alignItems="center"
  justifyContent="center"
  textAlign = "center">
        <Box > 
        <ColorButton  variant = "contained"> Clear Form </ColorButton>
        </Box>
        <Box paddingTop = "20px"> 
    <ColorButton  variant = "contained"> Send Form ! </ColorButton>
        </Box>
     
    
        </Grid>
        
   
        </Box>


   </Box>

   </Card>

        </Grid>




        </Box>
        
        
         </Container>
        
    
    */}
    </div>
  )
}
