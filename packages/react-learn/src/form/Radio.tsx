import { ForwardedRef, InputHTMLAttributes, OptionHTMLAttributes, forwardRef } from 'react';
import { ChangeHandler } from 'react-hook-form';

export const Radio = forwardRef(function (
  props: {
    children?: React.ReactNode;
  } & InputHTMLAttributes<HTMLInputElement>,
  ref?: ForwardedRef<HTMLInputElement>
) {
  
  const {
    children,
    ...attr
  } = props;

  return (
    <div className="mb-3 form-check">
      <input
        {...attr}
        type='radio'
        className='form-check-input'
        id={attr.id}
        ref={ref}
      />
      <label 
        className="form-check-label" 
        htmlFor={attr.id}
      >
        {children}
      </label>
    </div>
  );
});

export const RadioGroup = forwardRef(function(
  props: {
    title?: string;
    items: OptionHTMLAttributes<HTMLSelectElement>[],
    name?: string | undefined;
    onChange?: ChangeHandler;
    onBlur?: ChangeHandler
  },
  ref?: ForwardedRef<HTMLInputElement>
) {

  return (
    <div className='mb-3'>
      {
        props.title &&
        <div className='form-label'>{props.title}</div>
      }

      {
        props.items.map((item, i) =>
          <Radio
            key={i}
            name={props.name}
            onChange={props.onChange}
            onBlur={props.onBlur}
            id={`${props.name}-${i}`}
            value={item.value}
            ref={ref}
          >
            {item.label}
          </Radio>
        )
      }
    </div>
  );
});
