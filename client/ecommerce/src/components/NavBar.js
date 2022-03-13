import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import {Menu} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import { MenuItem } from '@mui/material';
import { withRouter, useHistory}  from "react-router-dom";
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import Grid from '@mui/material/Grid';
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import {useAuth0} from '@auth0/auth0-react';

const pages = ['HOME', 'BUY', 'SELL', 'ABOUT'];
const settings = ['Profile', 'Account', 'Dashboard','Login', 'Logout'];

 function NavBar(props){
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const {history} = props;

  const {loginWithRedirect} = useAuth0();
  const {logout} = useAuth0();
  const {isAuthenticated} = useAuth0();
  

  const handleMenuClick = (pageURL) => {
    history.push(pageURL)
   
    
};

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar style={{ background: "#673ab7" }}  position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' , color: '#FFFFFF'} }}
          >
           The Watch Club
          </Typography>
       
          <Box sx={{ color: ' white', flexGrow: 1, display: { xs: 'flex', md: 'none' }, }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none', color: '#FFFFFF' },
              }}
            >
         
                <MenuItem onClick={handleCloseNavMenu}>
                <MenuItem onClick={()=>handleMenuClick('/')}> 
                <Typography  textAlign="center" color='#673ab7' > Home </Typography> </MenuItem>
                <MenuItem onClick={()=>handleMenuClick('/product')}> 
                <Typography color='#673ab7' textAlign="center" > Buy </Typography> </MenuItem>
                <MenuItem onClick={()=>handleMenuClick('/sell')}> 
                <Typography color='#673ab7'  textAlign="center"> Sell </Typography> </MenuItem>
                <MenuItem onClick={()=>handleMenuClick('/about')}> 
                <Typography color='#673ab7' textAlign="center"> About </Typography> </MenuItem>
                



                </MenuItem>
              
            </Menu>
          </Box>

          <Typography
            variant="h6"
            noWrap
            component="div"
            color='#673ab7'
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' ,color: '#FFFFFF'} }}
          >
              The Watch Club
          </Typography>

          {isAuthenticated && (
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
       {/*   onClick={handleCloseNavMenu} 
       
       Initially this was added to the button nav bar, doesn't seem neded
       keeping just incase..... add as prop to button
       

       */}
              <Button
                
                sx={{ my: 2, color: '#FFFFFF', display: 'block' }}
                onClick={()=>handleMenuClick('/')}
              >
                {pages[0]}
              </Button>

              <Button
                  onClick={()=>handleMenuClick('/product')}
                sx={{ my: 2, color: '#FFFFFF', display: 'block' }}
              >
                {pages[1]}
              </Button>


              <Button
              onClick={()=>handleMenuClick('/sell')}
                sx={{ my: 2, color: '#FFFFFF', display: 'block' }}
              >
                {pages[2]}
              </Button>

              <Button
              onClick={()=>handleMenuClick('/about')}
                sx={{ my: 2, color: '#FFFFFF', display: 'block' }}
              >
                {pages[3]}
              </Button>



       
             
          </Box>

          )}

          {!isAuthenticated && (

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          </Box>
          )}
          
          <Grid className="navBarShoppingIcon">
          <ShoppingCartTwoToneIcon   onClick={()=>handleMenuClick('/navcart')} style={{ fontSize: 50, color:'#FFFFFF' }}/>
          </Grid>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
            
  
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
            
         
          
                <AccountCircleTwoToneIcon  style={{ fontSize: 50, color:'#FFFFFF' }}/>
          
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
           
           <MenuItem  onClick={handleCloseNavMenu}>


          {isAuthenticated && (

              <>
                <MenuItem   onClick={()=>handleMenuClick('/navcart')}> 
                <Typography  color='#673ab7' textAlign="center"> Cart </Typography> </MenuItem>
                <MenuItem > 
                <Typography color='#673ab7'  textAlign="center"> Account </Typography> </MenuItem>     
                </>
                     )}


                {!isAuthenticated && (
                <MenuItem > 
                <Typography 
              color='#673ab7'
                 onClick = {() => loginWithRedirect()}


                 textAlign="center"
                 width="80px"> Login </Typography> </MenuItem>

                )}

                {isAuthenticated && (
                <MenuItem> 
                <Typography 
                color='#673ab7'
                   onClick ={()=> logout()}
                 textAlign="center"> Logout </Typography> </MenuItem>
                

                )}
                

                </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default withRouter(NavBar);

//     onClick = {() => loginWithRedirect()}