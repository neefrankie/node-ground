import { DevtoolsProvider, DevtoolsPanel } from "@refinedev/devtools";
import { Authenticated, Refine } from "@refinedev/core";
import routerProvider, { NavigateToResource } from "@refinedev/react-router-v6";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import {
  ThemedLayoutV2,
  ErrorComponent,
  RefineThemes,
  useNotificationProvider,
  RefineSnackbarProvider,
} from "@refinedev/mui";
import CssBaseline from "@mui/material/CssBaseline";
import GlobalStyles from "@mui/material/GlobalStyles";
import { ThemeProvider } from "@mui/material/styles";
import { dataProvider } from "./providers/data-provider";
import { ShowProduct } from "./pages/product/show";
import { EditProduct } from "./pages/product/edit";
import { ListProducts } from "./pages/product/list";
import { CreateProduct } from "./pages/product/create";
import { authProvider } from "./providers/auth-provider";
import { ForgotPassword, Login, UpdatePassword } from './pages/AuthPage';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <ThemeProvider theme={RefineThemes.Blue}>
        <CssBaseline />
        <GlobalStyles styles={{ html: { WebkitFontSmoothing: "auto" } }} />
        <RefineSnackbarProvider>
          <DevtoolsProvider>
            <Refine
              dataProvider={dataProvider}
              authProvider={authProvider}
              routerProvider={routerProvider}
              notificationProvider={useNotificationProvider}
              resources={[
                {
                  name: "protected-products",
                  list: "/products",
                  show: "/products/:id",
                  edit: "/products/:id/edit",
                  create: "/products/create",
                  meta: {
                    label: "Products",
                  },
                },
              ]}
              options={{
                syncWithLocation: true,
              }}
            >
              <Routes>
                <Route
                  element={
                    <Authenticated
                      key={"authenticated-routes"}
                      redirectOnFail="/login"
                    >
                      <ThemedLayoutV2>
                        <Outlet />
                      </ThemedLayoutV2>
                    </Authenticated>
                  }
                >
                  <Route
                    index
                    element={
                      <NavigateToResource resource="protected-products" />
                    }
                  />
                  <Route path="/products">
                    <Route index element={<ListProducts />} />
                    <Route path=":id" element={<ShowProduct />} />
                    <Route path=":id/edit" element={<EditProduct />} />
                    <Route path="create" element={<CreateProduct />} />
                  </Route>
                  <Route path='*' element={<ErrorComponent />} />
                </Route>
                <Route
                  element={
                    <Authenticated key="auth-pages" fallback={<Outlet />}>
                      <NavigateToResource resource="protected-products" />
                    </Authenticated>
                  }
                >
                  <Route path="/login" element={<Login />} />
                  <Route
                    path="/forgot-password"
                    element={<ForgotPassword />}
                  />
                  <Route
                    path="/update-password"
                    element={<UpdatePassword />}
                  />
                </Route>
              </Routes>
            </Refine>
            <DevtoolsPanel />
          </DevtoolsProvider>
        </RefineSnackbarProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
