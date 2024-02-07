import { SpinButton } from '../component/Button';

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
        text={props.text}
        progress={props.isSubmitting}
        type='submit'
        disabled={!props.isDirty || !props.isValid || props.isSubmitting}
      />
    </div>
  )
}
