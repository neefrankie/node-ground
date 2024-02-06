import { Spinner } from '../component/Spinner'

function SpinButton(
  props: {
    type?: "submit" | "reset" | "button" | undefined;
    disabled?: boolean;
    progress?: boolean;
    text: string;
  }
) {
  return (
    <button
      type={props.type}
      className='btn btn-primary'
      disabled={props.disabled}
    >
      {
        props.progress ?
        <Spinner size='sm'/> :
        props.text
      }
    </button>
  );
}

export function SubmitButton(
  props: {
    isDirty?: boolean;
    isValid?: boolean;
    isSubmitting: boolean;
    text: string;
  }
) {
  
  return (
    <div className='d-grid mt-3'>
      <SpinButton
        type='submit'
        disabled={!props.isDirty || !props.isValid || props.isSubmitting}
        progress={props.isSubmitting}
        text={props.text}
      />
    </div>
  )
}
