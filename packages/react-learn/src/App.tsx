import React, {  } from 'react'
import {
  Outlet,
  RouteObject,
} from 'react-router-dom';
import { LoginPage } from './learn/LoginPage';
import { LearnPage } from './learn/LearnPage';
import { RHFPage } from './rhf/HFPage';
import { Root, ScrollToTop } from './routes/Root';
import { CenterLayout } from './routes/CenterLayout';
import { ErrorPage } from './ErrorPage';
import { sitePath } from './routes/sitemap';
import { Navbar } from './component/Navbar';


function Skeleton() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Outlet />
    </>
  );
}

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Skeleton />,
    errorElement: <ErrorPage />,
    children: [
      {
        element: <Root />,
        children: [
          {
            index: true,
            element: <h1>Hello, React</h1>
          },
          {
            path: sitePath.tutorial,
            element: <LearnPage />
          },
          {
            path: sitePath.hookForm,
            element: <RHFPage />
          },
        ]
      },
      {
        path: sitePath.auth,
        element: <CenterLayout />,
        children: [
          {
            path: sitePath.login,
            element: <LoginPage />
          }
        ]
      }
    ]
  }
];

