import React from 'react';

export function ContainerCenter(props: {
  children: JSX.Element
}) {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <Col
          md={8}
          lg={6}
          xl={4}
        >
          {props.children}
        </Col>
      </div>
    </div>
  );
}

export function ContainerRowCenter(
  props: {
    children: React.ReactNode
  }
) {
  return (
    <div className="container">
      <div className="row justify-content-center">
        {props.children}
      </div>
    </div>
  );
}

export function Col(props: {
  children: React.ReactNode;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
}) {

  let colClass: string[] = [];
  if (props.sm) {
    colClass.push(`col-sm-${props.sm}`);
  }
  if (props.md) {
    colClass.push(`col-md-${props.md}`);
  }
  if (props.lg) {
    colClass.push(`col-lg-${props.lg}`);
  }
  if (props.xl) {
    colClass.push(`col-xl-${props.xl}`);
  }
  if (colClass.length === 0) {
    colClass.push('col');
  }

  return (
    <div className={colClass.join(' ')}>
      {props.children}
    </div>
  )
}

export function ContainerSideLayout(
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
