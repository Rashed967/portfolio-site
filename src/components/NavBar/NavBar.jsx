import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';



const navLinks = [
  { 
    "name" : "Home",
    "path" : "/",
    "id" : 1
  },
  {
    "name" : "Resume",
    "path" : "/resume",
    "id" : 2
  },
  {
    "name" : "About",
    "path" : "/about",
    "id" : 3
  },
  {
    "name" : "Projects",
    "path" : "/AllProject",
    "id" : 4
  },
  {
    "name" : "Contact",
    "path" : "/contact",
    "id" : 5
  }
  
];

// const pages = ["Home", "Resume", "About", "Projects", "contact"]


const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };



  return (
    <AppBar position="static" sx={{ backgroundColor: "#012A4A" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters >

          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Abdur Rahman
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
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
                display: { xs: 'block', md: 'none' },
              }}
            >
              {navLinks.map((navLink) => (
                <MenuItem key={navLink.id} onClick={handleCloseNavMenu}>
                 <Link to={navLink.path} style={{textDecoration : "none"}}>
                 <Typography color="#014F86" textAlign="center">
                  {navLink.name}
                  </Typography></Link>
                  
                  
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: { xs: 'column', md: 'row' }, } }}>
            {navLinks.map((navLink) => (
              <Button
                key={navLink.id}
                onClick={handleCloseNavMenu}
                component={Link}
                to={navLink.path}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {navLink.name}
              </Button>
            ))}
          </Box>


        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;