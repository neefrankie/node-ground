import React from 'react';
import { IFooterColumn, ILink } from '../lib/data';

function FooterLinkItem(
  props: {
    href: string;
    name: string;
  }
) {
  return (
    <a
      className='pt-1 pb-1'
      href={props.href}
      target="__blank"
    >
      {props.name}
    </a>
  );
}

function FooterColumn(
  props: {
    title: string;
    items: ILink[]
  }
) {
  return (
    <div className="col-6 col-md-3 col-lg-2">
      <h6 className="fw-semibold">
        { props.title }
      </h6>
      <div className="mt-2 mb-2">
        {
          props.items.map((item, i) => (
            <FooterLinkItem
              key={i}
              name={item.name}
              href={item.href}
            />
          ))
        }
      </div>
    </div>
  );
}

export function CopyRight(
  props: {
    brand: string;
    year: string;
  }
) {

  return (
    <div className="o-footer__copyright">
      <small>
        © {props.brand} { props.year }.
      </small>
    </div>
  );
}

export function AppVersion() {
  const clientHolder = '{{footer.ClientVersion}}';
  const serverHolder = '{{footer.ServerVersion}}';

  return (
    <div className="text-muted pb-3">
      <small>Client v{ clientHolder }. Server { serverHolder}</small>
    </div>
  );
}

export function Footer(
  props: {
    matrix?: IFooterColumn[];
    copyRight?: JSX.Element;
    version?: JSX.Element;
  }
) {
  return (
    <footer className="o-footer o-footer--theme-dark">
      <div className="container">
        {
          props.matrix &&

          <div className="row">
            {
              props.matrix.map((column, i) => (
                <FooterColumn
                  key={i}
                  title={column.title}
                  items={column.items}
                />
              ))
            }
          </div>
        }
        {props.copyRight}
        {props.version}
      </div>
    </footer>
  );
}
