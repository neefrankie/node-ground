import React from 'react';

export function CenterLayout(props: {
  children: JSX.Element
}) {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">{props.children}</div>
      </div>
    </div>
  );
}

export function ContentLayout(
  props: {
    sidebar?: JSX.Element;
    children: JSX.Element;
  }
) {

  return (
    <div className="container-fluid">
      <div className="row">

        <div className="col-sm-2" role="navigation">
          {props.sidebar}
        </div>

        <div className="col-sm-10">
          {props.children}
        </div>
      </div>
    </div>
  );
}

export function CenterColumn(
  props: {
    children: JSX.Element
  }
) {
  return (
    <div className="row justify-content-center">
      <div className="col-12 col-md-10 col-lg-8">
        { props.children }
      </div>
    </div>
  );
}

export function Flex(
  props: {
    start?: JSX.Element;
    end?: JSX.Element;
    children?: JSX.Element;
    justify?: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly';
    align?: 'start' | 'end' | 'center' | 'baseline' | 'stretch';
    className?: string;
  }
) {

  const justify = ` justify-content-${props.justify || 'between'}`;
  const align = ` align-items-${props.align || 'center'}`;

  let className = `d-flex${justify}${align}`;
  if (props.className) {
    className += ` ${props.className}`;
  }

  return (
    <div className={className}>
      {props.start}
      {props.children}
      {props.end}
    </div>
  );
}

export function Toolbar() {

  return (
    <nav className="navbar navbar-expand-lg bg-body-secondary border-bottom">
      <div className="container">
          <a className="navbar-brand" href="/">Great Site</a>
      </div>
  </nav>
  );
}
