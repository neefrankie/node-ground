import { Outlet } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { ScrollToTop } from './ScrollToTop';

function TopAppBar() {
  return (
    <AppBar position='static'>
      <Toolbar>
        <IconButton
          size='large'
          edge='start'
          color='inherit'
          aria-label='menu'
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography component="div" sx={{ flexGrow: 1, height: 50 }}>
          <Link href='/' sx={{height: 1, display: 'inline-block'}}>
            <Box
              component='img'
              sx={{ objectFit: 'contain', height: 1 }}
              src='/images/logo-100x100.png'
            />
          </Link>
        </Typography>
        
        <Button color='inherit'>Login</Button>      
      </Toolbar>
    </AppBar>
  )
}

export function Root() {
  return (
    <>
      <TopAppBar/>
      <ScrollToTop/>
      <Outlet/>
    </>
  );
}
