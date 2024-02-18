import { Outlet } from 'react-router-dom';
import { navItems } from './sitemap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav } from './Nav';

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


