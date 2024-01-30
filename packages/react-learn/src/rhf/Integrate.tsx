import React, { HTMLInputTypeAttribute } from 'react';
import { FieldValues, UseFormRegister, Path, useForm, SubmitHandler, Controller } from 'react-hook-form';
import { TextControl } from '../form/Controls';


interface IFormValues {
  firstName: string;
  age: number;
}

interface TextInputProps<T extends FieldValues> {
  name: Path<T>
  label: string;
  type?: HTMLInputTypeAttribute;
  desc?: string;
  register: UseFormRegister<T>
}

function HFTextControl<T extends FieldValues>(
  props: TextInputProps<T>
) {
  return (
    <TextControl
      label={props.label}
      type={props.type}
      desc={props.desc}
      {...props.register(props.name)}
    />
  );
}

export function IntegrateWithRef() {
  // formState.isDirty only works if you set initial value here.
  const { 
    register, 
    handleSubmit, 
    formState: { isDirty, isValid, isSubmitting } 
  } = useForm<IFormValues>({
    defaultValues: {
      firstName: ''
    }
  });

  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    console.log(data);
    return new Promise((resolve) => {
      setTimeout(() => resolve(data), 2000);
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      
      <HFTextControl
        name='firstName'
        label='First name'
        type='text'
        desc='Your family name'
        register={register}
      />

      <button 
        type='submit' 
        className='btn btn-primary'
        disabled={!isDirty || !isValid || isSubmitting}
      >
        {
          isSubmitting ?
          'Submitting...' :
          'Submit'
        }
      </button>
    </form>
  )
}


interface IFormInput {
  firstName: string;
  lastName: string;
  iceCreamType: {
    label: string;
    value: string;
  };
}

export function IntegreateNoRef() {
  const { control, handleSubmit } = useForm<IFormInput>({
    defaultValues: {
      firstName: '',
      lastName: '',
      iceCreamType: {}
    }
  });

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
  }

  return (
    <form>
      <Controller
        name='firstName'
        control={control}
        render={({field}) => <TextControl {...field} />}
      />
    </form>
  )
}

