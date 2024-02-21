import { useForm, useSelect } from '@refinedev/core'
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

export const CreateProduct = () => {

  const { onFinish, mutationResult } = useForm({
    redirect: 'edit'
  });

  const { options } = useSelect({
    resource: 'categories'
  })

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = Object.fromEntries(new FormData(event.currentTarget).entries());

    onFinish({
      ...data,
      price: Number(data.price).toFixed(2),
      category: { id: Number(data.category) },
    });
  };

  return (
    <Box component='form' onSubmit={onSubmit}>
      <Stack spacing={2} direction='column'>
        <TextField
          id='name'
          label='Name'
        />
        <TextField
          id='description'
          label='Description'
        />
        <TextField
          id='price'
          label='Price'
          type='number'
        />
        <TextField
          id='material'
          label='Material'

        />
        <Select
          id='category'
        >
          {options?.map((option) => (
            <MenuItem 
              key={option.value} 
              value={option.value}
            >
              {option.label}
            </MenuItem>
          ))}
        </Select>
        <Button
          type='submit'
        >
          Submit
        </Button>
      </Stack>

      {mutationResult.isSuccess && <span>succesfully submitted!</span>}
    </Box>
  )
}
