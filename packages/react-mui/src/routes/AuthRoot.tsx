import { Outlet } from 'react-router-dom';

export function AuthRoot() {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <Outlet/>
        </div>
      </div>
    </div>
  );
}
