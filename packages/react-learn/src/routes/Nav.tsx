import { NavLink } from 'react-router-dom';
import { ILink } from './sitemap';

export function Nav(
  props: {
    list: ILink[];
    indent: boolean;
  }
) {

  const items = props.list.map((item, index) => (
    <NavItem link={item} key={index}>
      { item.children && <Nav list={item.children} indent={true} />}
    </NavItem>
  ));

  return (
    <ul className={`nav flex-column${props.indent ? ' ms-3 ' : ''}`}>
      {items}
    </ul>
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
