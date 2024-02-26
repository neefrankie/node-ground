import Button from '@mui/material/Button'
import CircularProgress from '@mui/material/CircularProgress'

export function SubmitButton(
  props: {
    isDirty?: boolean;
    isValid?: boolean;
    fullWidth?: boolean;
    isSubmitting?: boolean;
    children: JSX.Element | string;
  }
) {
  return (
    <Button 
      type='submit' 
      fullWidth
      variant='contained'
      sx={{ mt: 3, mb: 2 }}
      disabled={props.isSubmitting || !props.isDirty || !props.isValid}
    >
      {
        props.isSubmitting ?
        <CircularProgress size='1.2rem' /> :
        props.children
      }
    </Button>
  )
}
