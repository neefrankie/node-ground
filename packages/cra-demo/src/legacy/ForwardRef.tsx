import React, { LegacyRef } from 'react';

type BtnProps = {
  children: string;
}

// 3. React passes the ref to the (props, ref) => ... function
// inside forwardRef as a second argument.
const FancyButton = React.forwardRef((props: BtnProps, ref: LegacyRef<HTMLButtonElement>) => (
  // 4. Forward this ref argument down to button
  // by specifying it as a JSX attribute.
  <button className='btn' ref={ref}>
    {props.children}
  </button>
));

/**
 * Ref forwarding lets some components take a ref they receive,
 * and pass it further down to a child.
 */
function ShowFancyButton() {
  // 1. We create a React ref by calling React.createdRef
  // and assign it to a ref variable.
  const ref = React.createRef<HTMLButtonElement>();
  // 5. When the ref is attached, ref.current will point to the <button> DOM node.

  return (
    // 2. Pass our ref down by specifying it as a JSX attribute.
    <FancyButton ref={ref}>Click me!</FancyButton>
  );
}

// Forwarding refs in higher-order components
function logProps(WrappedComponent: React.ComponentType) {

  class LogProps extends React.Component {

    componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<{}>, snapshot?: any): void {
        console.log('old props:', prevProps);
        console.log('new props:', this.props);
    }

    render() {
      return <WrappedComponent {...this.props} />
    }
  }

  return LogProps;
}
