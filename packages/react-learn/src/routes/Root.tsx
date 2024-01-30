import React, { ReactNode, useEffect } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { ILink, navItems } from './sitemap';

/**
 * @description Scroll restoration. Render it at the top of your app, but below Router
 * @see https://v5.reactrouter.com/web/guides/scroll-restoration
 */
export function ScrollToTop(): ReactNode {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export function Root() {
  return (
    <div className="container">
      <div className="row">

        <div className="col-sm-3" role="navigation">
          <Nav list={navItems} indent={false} />
        </div>

        <div className="col-sm-9">
          <Outlet/>
        </div>
      </div>
    </div>
  );
}

function NavItem(
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
      { props.children }
    </li>
  );
}

function Nav(
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

