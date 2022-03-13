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


export default function Contact() {


    const ColorButton = styled(Button)(({ theme }) => ({
        color: theme.palette.getContrastText("#673ab7"),
        backgroundColor: 	"#673ab7",
        '&:hover': {
          backgroundColor: 	"#673ab7",
        },
      }));

      const RedButton = styled(Button)(({ theme }) => ({
        color: theme.palette.getContrastText("#FF0000"),
        backgroundColor: 	"#FF0000",
        '&:hover': {
          backgroundColor: "	#FF0000",
        },
      }));


  return (
    <div>  


    <Container>
    <Box paddingTop = "60px" >
    <Grid container spacing={2}  

  justifyContent="center"
  textAlign = "center">
        <Grid item xs={12} sm={6} >
        <Card className="heightContactCard"> 
        <Typography color = "#673ab7"  textAlign="center" paddingTop ="20px"> 
   <h1> SEND MESSAGE </h1></Typography>  
      
   <Box 
    
    display="flex" 
    justifyContent="center"
    alignItems="center"
    className = "Form"
    paddingBottom ="20px"
    >
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
  
   

        </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
        <Card className="heightContactCard">
        <Typography color = "#673ab7"  textAlign="center" paddingTop ="20px"> 
   <h1> CONTACT DETAILS </h1></Typography>  
   <Typography  color = "#673ab7" variant="body2" gutterBottom fontSize={"20px"}>
       The Watch Club
      </Typography>
      <Typography color = "#673ab7" variant="body2" fontSize={"20px"} gutterBottom>
       St Marys Road 
      </Typography>
      <Typography color = "#673ab7" variant="body2" fontSize={"20px"} gutterBottom>
       London
      </Typography>
      <Typography color = "#673ab7" variant="body2" fontSize={"20px"} gutterBottom paddingBottom={"10px"}>
       W5 5RF
      </Typography>
      <Typography color = "#673ab7" variant="body2" fontSize={"20px"} gutterBottom paddingTop={"10px"}>
       info@thewatchclub.com
      </Typography>
      <Typography color = "#673ab7" variant="body2" fontSize={"20px"} gutterBottom paddingBottom={"20px"}>
       sales@thewatchclub.com
      </Typography>

        <Box    padding={"10px"}>
        <Grid paddingBottom ={"20px"} container spacing={2}  
  alignItems="center"
  justifyContent="center"
  textAlign = "center">
        <Box className = "paddingRight"> 
        <SocialIcon url="https://linkedin.com/" />
        </Box>
        <Box className = "paddingRight"> 
        <SocialIcon url="https://google.com/" />
        </Box>
        <Box className ="paddingRight"> 
        <SocialIcon url="https://instagram.com/" />
        </Box>
        <Box className = "paddingRight"> 
        <SocialIcon url="https://facebook.com/" />
        </Box>
        <Box className = "paddingRight"> 
        <SocialIcon url="https://twitter.com/" />
        </Box>
        </Grid>
        
   
        </Box>

   
        </Card>
        </Grid>
      </Grid>
    </Box>


    </Container>
     </div>
  )
}
