import { Authenticated, Refine } from "@refinedev/core";
import routerProvider, { NavigateToResource } from '@refinedev/react-router-v6';
import { 
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  Navigate,
} from 'react-router-dom';
import { ThemedLayoutV2, ThemedTitleV2 } from '@refinedev/antd';
import { ConfigProvider, App as AntdApp } from 'antd';
import { dataProvider } from './providers/data-provider';
import { ShowProduct } from './pages/product/show';
import { EditProduct } from './pages/product/edit';
import { ListProducts } from './pages/product/list';
import { CreateProduct } from './pages/product/create';
import { authProvider } from './providers/auth-provider';
import { Login } from './pages/login';
import { Header } from './components/header';

import "antd/dist/reset.css";

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <ConfigProvider>
        <AntdApp>
          <Refine 
            dataProvider={dataProvider}
            authProvider={authProvider}
            routerProvider={routerProvider}
            resources={[
              {
                name: 'protected-products',
                list: '/products',
                show: '/product/:id',
                edit: '/product/:id/edit',
                create: '/product/create',
                meta: {
                  label: 'Products'
                },
              }
            ]}
          >
            <Routes>
              <Route
                element={
                  <Authenticated
                    key={'authenticated-routes'}
                    redirectOnFail='/login'
                  >
                    {/* <Header /> */}
                    <ThemedLayoutV2
                      Title={(props) => (
                        <ThemedTitleV2 {...props} text='Awesome Project' />
                      )}
                    >
                      <Outlet />
                    </ThemedLayoutV2>
                  </Authenticated>
                }
              >
                <Route 
                  index 
                  element={<NavigateToResource resource='protected-products' />}
                />
                <Route path='/products'>
                  <Route index element={<ListProducts />} />
                  <Route path=':id' element={<ShowProduct />} />
                  <Route path=':id/edit' element={<EditProduct />} />
                  <Route path='create' element={<CreateProduct />} />
                </Route>
              </Route>
              <Route
                element={
                  <Authenticated
                    key='auth-pages'
                    fallback={<Outlet />}
                  >
                    <NavigateToResource resource='protected-products' />
                  </Authenticated>
                }
              >
                <Route
                  path='/login'
                  element={<Login />}
                />
              </Route>
            </Routes>
          </Refine>  
        </AntdApp>
      </ConfigProvider>
    </BrowserRouter>
  );
}

export default App;
