import React from 'react'
import { ContainerCenterLayout} from './Layout';

export function LoginPage() {
  return (
    <ContainerCenterLayout>
      <>
        <h4 className="text-center">Login</h4>
        <LoginForm/>
      </>
    </ContainerCenterLayout>
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
