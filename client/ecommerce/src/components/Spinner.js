import * as React from 'react';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
export default function Spinner() {
  return (
    <Grid
    container
    spacing={0}
    direction="column"
    alignItems="center"
    justifyContent="center"
    padding = "200px"
    
  >
    <Stack style={{  color:"#FF0000" }} fontSize ="50px" spacing={2} direction="row">
   
 
    <Grid item xs={12}>
    <Box  style={{  color:"#673ab7" }} className="spinner" > 
      <CircularProgress size="7.5rem" style={{  color:"#673ab7" }} />
      </Box>
      </Grid>
    
  
     
 
    </Stack>
    </Grid>
  );
}