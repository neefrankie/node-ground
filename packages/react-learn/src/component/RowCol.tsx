import React from 'react';

export function CenterRow(props: {
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


