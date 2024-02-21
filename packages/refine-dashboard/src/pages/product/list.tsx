import { useMany, useNavigation, useTable, } from '@refinedev/core'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';

export const ListProducts = () => {

  const {
    tableQueryResult: { data, isLoading },
    current,
    setCurrent,
    pageCount,
  } = useTable({
    // resource: 'protected-products',
    pagination: { current: 1, pageSize: 10 },
    sorters: {
      initial: [
        { field: 'id', order: 'asc'}
      ]
    },
    syncWithLocation: true,
  });

  const { showUrl, editUrl } = useNavigation();

  const {
    data: categories
  } = useMany({
    resource: 'categories',
    ids: data?.data?.map((product) => product.category?.id) ?? []
  })

  if (isLoading) {
    return <div>Loading...</div>
  }

  const onPrevious = () => {
    if (current > 1) {
      setCurrent(current - 1);
    }
  };

  const onNext = () => {
    if (current < pageCount) {
      setCurrent(current + 1);
    }
  };

  const onPage = (page: number) => {
    setCurrent(page);
  };

  return (
    <div>
      <h1>Products</h1>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID </TableCell>
              <TableCell>Name </TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Material</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.data?.map((product) =>(
              <TableRow key={product.id}>
                <TableCell>{product.id}</TableCell>
                <TableCell>{product.name}</TableCell>
                <TableCell>
                  {
                    categories?.data?.find(
                      (category) => category.id == product.category?.id
                    )?.title
                  }
                </TableCell>
                <TableCell>{product.material}</TableCell>
                <TableCell>{product.price}</TableCell>
                <TableCell>
                  <Link to={showUrl("protected-products", product.id)}>Show</Link>
                  <Link to={editUrl("protected-products", product.id)}>Edit</Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div className='pagination'>
        <button type='button' onClick={onPrevious}>
          {'<'}
        </button>
        <div>
          {current - 1 > 0 && (
            <span onClick={() => onPage(current - 1)}>
              {current - 1}
            </span>
          )}
          <span className='current'>{current}</span>
          {current + 1 < pageCount && (
            <span onClick={() => onPage(current + 1)}>
              {current + 1}
            </span>
          )}
        </div>
        <button type='button' onClick={onNext}>
          {'>'}
        </button>
      </div>
    </div>
  )
}
