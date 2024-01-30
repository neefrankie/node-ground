import React, { ReactNode, useEffect } from 'react'
import {
  Outlet,
  RouteObject,
  useLocation,
} from 'react-router-dom';
import { LoginPage } from './auth/LoginPage';
import { LearnPage } from './learn/LearnPage';
import { RHFPage } from './rhf/HFPage';
import { Root } from './routes/Root';
import { CenterLayout } from './routes/CenterLayout';
import { ErrorPage } from './ErrorPage';
import { sitePath } from './routes/sitemap';
import { Navbar } from './component/Navbar';

/**
 * @description Scroll restoration. Render it at the top of your app, but below Router
 * @see https://v5.reactrouter.com/web/guides/scroll-restoration
 */
function ScrollToTop(): ReactNode {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}


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

