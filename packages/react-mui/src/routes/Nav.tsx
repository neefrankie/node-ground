import { NavLink, Link as RouterLink } from 'react-router-dom';
import { ILink } from './sitemap';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import Link from '@mui/material/Link';

export function Nav(
  props: {
    list: ILink[];
    indent: boolean;
  }
) {

  const items = props.list.map((item, index) => (
    <ListItem>
      <ListItemButton 
        component={NavLink} 
        to={item.href}
        sx={{
          '&.active': {
            background: 'black',
            color: 'white',
          }
        }}
      >
        <ListItemText>{item.name}</ListItemText>
      </ListItemButton>
    </ListItem>
  ));

  return (
    <List>
      {items}
    </List>
  );
}

export function NavItem(
    props: {
        link: ILink;
        children?: JSX.Element;
    }
) {
    return (
      <li className="nav-item">
        <NavLink
          to={props.link.href}
          className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
        >
          {props.link.name}
        </NavLink>
        {props.children}
      </li>
    );
}
