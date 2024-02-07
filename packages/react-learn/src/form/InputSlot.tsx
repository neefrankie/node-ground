import { FormLabel, FormText, InvalidFeedback } from './Input';
import classNames from 'classnames';
import { InputSlotProps } from './Input';

export function InputSlot(
  props: {
    htmlFor?: string;
    children: JSX.Element;
    className?: string;
  } & InputSlotProps,
) {

  const cls = classNames('mb-3', props.className);

  return (
    <div className={cls}>
      <FormLabel
        htmlFor={props.htmlFor}
        text={props.label}
      />
      {props.children}
      <FormText>{props.desc}</FormText>
      <InvalidFeedback text={props.error} />
    </div>
  );
};


