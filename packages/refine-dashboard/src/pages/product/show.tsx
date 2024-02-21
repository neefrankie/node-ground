import { useOne, useShow } from '@refinedev/core'

export const ShowProduct = () => {
//   const { data, isLoading } = useOne({ resource: 'products', id: 123});

  const {
    queryResult
  } = useShow();

  if (queryResult.isLoading) {
    return <div>Loading...</div>
  }

  return <div>Product name: {queryResult.data?.data.name}</div>
}
