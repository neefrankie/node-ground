import React from 'react'
import { createRoot } from 'react-dom/client'
import { CenterLayout} from './bsui/Layout';

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <React.StrictMode>
    <LoginPage />
  </React.StrictMode>
);

function LoginPage() {
  return (
    <CenterLayout>
      <>
        <h4 className="text-center">Login</h4>
        <LoginForm/>
      </>
    </CenterLayout>
  )
}

function LoginForm() {
  return (
    <form method="POST" id="loginForm" action="/api/login" encType="multipart/form-data">
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email</label>
        <input type="email" className="form-control" id="email" name="email" required/>
        <div id="emailHelp" className="form-text">We'll never share your email with anyone else</div>
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">Password</label>
        <input type="password" className="form-control" id="password" name="password" required/>
      </div>
      <div className="mb-3 form-check">
        <input type="checkbox" className="form-check-input" id="exampleCheck" name="exampleCheck"/>
        <label className="form-check-label" htmlFor="exampleCheck">Check me out</label>
      </div>
      <div className='d-grid'>
        <button type="submit" className="btn btn-primary">Submit</button>
      </div>
    </form>    
  );
}
