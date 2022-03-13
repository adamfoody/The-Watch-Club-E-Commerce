
   import React, {useState} from 'react';

import {
  
    Grid,
    Button,
 Typography,
    Box, Container} from '@material-ui/core';

  import { createTheme, ThemeProvider } from '@mui/material/styles';
  import LockIcon from '@mui/icons-material/Lock';
  import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
  import { green, orange, yellow} from '@material-ui/core/colors'
  import { withStyles } from '@material-ui/core/styles'
  import { withRouter, useHistory}  from "react-router-dom";
  import {useAuth0} from '@auth0/auth0-react';

 


const GreenButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(green[500]),
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[700]
    },
    color: yellow
  }
}))(Button)
  
  
function LogIn(props) {

  const {history} = props;


  const {loginWithRedirect} = useAuth0();

  


  const handleRegisterClick = (pageURL) => {
       history.push(pageURL)
  
  };

      
    
      const handleSubmit = (event) => {
        event.preventDefault();
      }
      const theme = createTheme();
      
    return (
        <div>

      
  
       <Container component="main" maxWidth="xs">
 
    
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            paddingTop: 50,
          
          }}
        >
         <LockIcon height="100" style={{ fontSize: 60, color:"#3f51b5" }}
          
             />

          <Typography component="h1" variant="h5" style={{  color:"red" }}>
            <h3> <strong> <u> Please Log in </u></strong></h3> 
          </Typography>
     

        <Grid className="gridHomePage"
        >
          <Typography style={{ color:"#3f51b5" }}>
          <div className ="color1">
          <p> Authentication  required. Please use the below buttons to log in or register an account. </p>
          <p>Contact the IT Department if you require support. </p> 
          </div>
      </Typography>

      </Grid>
       
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              sx={{ mt: 3, mb: 2}}
              onClick = {() => loginWithRedirect()}
            >
              Sign In
            </Button>
            

            
            <GreenButton
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              sx={{ mt: 3, mb: 2, padding: 20, }}
              onClick = {() => loginWithRedirect()}
              
            >
              Register
            </GreenButton>
            <Grid container>
              <Grid item xs>
            
              </Grid>
              <Grid item>
            
              </Grid>
            </Grid>
          </Box>
   
       
      </Container>
      

        </div>
    )
}


export default withRouter(LogIn);