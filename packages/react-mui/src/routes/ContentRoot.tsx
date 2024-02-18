import { Outlet } from 'react-router-dom';
import { navItems } from './sitemap';
import { Nav } from './Nav';
import Grid from '@mui/material/Grid';

export function ContentRoot() {
  return (
    <Grid container spacing={2}>
      <Grid item sm={3}>
        <Nav list={navItems} indent={false} />
      </Grid>
      <Grid item sm={9}>
        <Outlet/>
      </Grid>
    </Grid>
  );
}


