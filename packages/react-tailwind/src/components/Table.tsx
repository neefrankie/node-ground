import React from 'react';

export function Table(
  props: {
    caption: string;
    head: string[];
    rows: string[][];
  }
) {
  return (
    <table>
      <caption>{props.caption}</caption>
      <thead>
        <tr>
          {
            props.head.map(h => <th>{h}</th>)
          }
        </tr>
      </thead>
      <tbody>
        {
          props.rows.map(row => <Row cell={row}/>)
        }
      </tbody>
    </table>
  );
}

function Row(
  props: {
    cell: string[];
  }
) {
  return (
    <tr>
      {
        props.cell.map(c => <td>{c}</td>)
      }
    </tr>
  )
}
