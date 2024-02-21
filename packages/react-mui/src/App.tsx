import {
  RouteObject,
} from 'react-router-dom';
import { ContentRoot } from './routes/ContentRoot';
import { AuthRoot } from './routes/AuthRoot';
import { Root } from './routes/Root';
import { sitePath } from './routes/sitemap';
import { ErrorPage } from './routes/ErrorPage';
import { LoginPage } from './pages/auth/LoginPage';
import { HookFormPage } from './pages/HookFormPage';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        element: <ContentRoot />,
        children: [
          {
            index: true,
            element: <h1>Hello</h1>
          },
          {
            path: sitePath.hookForm,
            element: <HookFormPage />
          }
        ]
      },
      {
        path: sitePath.auth,
        element: <AuthRoot />,
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
