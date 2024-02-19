import { useForm, useOne, useSelect, useUpdate } from '@refinedev/core'

export const EditProduct = () => {

  const {
    onFinish,
    mutationResult,
    queryResult,
  } = useForm({
    action: 'edit',
    resource: 'products',
    id: '123',
  });

  const record = queryResult?.data?.data;

  const { options } = useSelect({
    resource: 'categories',
  });

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.target).entries());

    onFinish({
      ...data,
      price: Number(data.price).toFixed(2),
      category: { id: Number(data.category) },
    });
  }

//   const { data, isLoading } = useOne({ resource: 'products', id: 123 });
//   const { mutate, isLoading: isUpdating } = useUpdate();

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   const updatePrice = async () => {
//     await mutate({
//       resource: 'products',
//       id: 123,
//       values: {
//         price: Math.floor(Math.random() * 100),
//       },
//     });
//   };

  return (
    // <div>
    //   <div>Product name: {data?.data.name}</div>
    //   <div>Product price: ${data?.data.price}</div>
    //   <button onClick={updatePrice}>{isUpdating ? 'Updating...' : 'Update Price'}</button>
    // </div>

    <form onSubmit={onSubmit}>
      
    </form>
  );
}
