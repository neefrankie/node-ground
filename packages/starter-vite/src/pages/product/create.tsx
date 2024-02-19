import { useForm, useSelect } from '@refinedev/core'

export const CreateProduct = () => {
  const { onFinish, mutationResult } = useForm({
    action: 'create',
    resource: 'products',
  });

  const { options } = useSelect({
    resource: 'categories'
  })

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = Object.fromEntries(new FormData(event.target).entries());

    onFinish({
      ...data,
      price: Number(data.price).toFixed(2),
      category: { id: Number(data.category) },
    });
  };

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="name">Name</label>
      <input type="text" id='name' name='name' />

      <label htmlFor="description">Description</label>
      <textarea id='description' name='description' />

      <label htmlFor="price">Price</label>
      <input type="number" id='price' name='price' step='.01' />

      <label htmlFor="material">Material</label>
      <input type="text" id='material' name='material' />

      <label htmlFor="category">Category ID</label>
      <input type="text" id='category' name='category' />
      <select name="category" id="category">
        {options?.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      {mutationResult.isSuccess && <span>succesfully submitted!</span>}

      <button type='submit'>Submit</button>
    </form>
  )
}
