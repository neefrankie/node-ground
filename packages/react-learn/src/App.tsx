import {
  Outlet,
  RouteObject,
} from 'react-router-dom';
import { LoginPage } from './learn/LoginPage';
import { LearnPage } from './learn/LearnPage';
import { RHFPage } from './rhf/HFPage';
import { Root } from './routes/Root';
import { ScrollToTop } from './routes/ScrollToTop';
import { CenterLayout } from './routes/CenterLayout';
import { sitePath } from './routes/sitemap';
import { Navbar } from './component/Navbar';
import { ErrorPage } from './routes/ErrorPage';
import Cookie from 'js-cookie';
import { MUIPage } from './mui/MUIPage';


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
            element: <Hello />
          },
          {
            path: sitePath.tutorial,
            element: <LearnPage />
          },
          {
            path: sitePath.hookForm,
            element: <RHFPage />
          },
          {
            path: sitePath.mui,
            element: <MUIPage />
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

function Hello() {
  document.cookie = "test1=Hello; SameSite=None; Secure";
  document.cookie = "test2=World; SameSite=None; Secure";

  console.log(document.cookie);

  const cookieValue = document.cookie.split(";")
    .find((row) => row.startsWith("test2="))
    ?.split("=")[1];

  console.log(cookieValue);

  console.log(Cookie.get('test1'));
  return (
    <h1>Hello React!</h1>
  )
}
