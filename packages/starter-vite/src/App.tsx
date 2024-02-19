import { Refine } from "@refinedev/core";
import { dataProvider } from './providers/data-provider';
import { ShowProduct } from './pages/product/show';
import { EditProduct } from './pages/product/edit';
import { ListProducts } from './pages/product/list';
import { CreateProduct } from './pages/product/create';

function App() {
  return (
    <Refine dataProvider={dataProvider}>
      {/* <ShowProduct /> */}
      {/* <EditProduct /> */}
      {/* <ListProducts /> */}
      <CreateProduct />
    </Refine>
  );
}

export default App;
