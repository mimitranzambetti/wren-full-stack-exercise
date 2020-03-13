/** @jsx jsx */

import * as R from 'ramda';
import { css, jsx } from '@emotion/core';
import HorizontalSeparator from './UI/HorizontalSeparator';
import { scale } from '../static/style';
import checkmark from '../static/checkmark.svg';
import emptyCircle from '../static/empty-circle.svg';

const tableStyle = scale({
  borderCollapse: 'collapse',
  backgroundColor: 'white',
  width: '100%',
  th: {
    textAlign: 'left',
    height: '25px',
    verticalAlign: 'middle',
    border: '1px solid #ddd',
    padding: '8px',
  },
  td: {
    minWidth: '120px',
    textAlign: 'left',
    height: '25px',
    verticalAlign: 'middle',
    border: '1px solid #ddd',
    borderTop: 'none',
    padding: '8px',
  },
});

const rowStyle = scale({
  '&:hover': {
    backgroundColor: '#f2f2f2',
  }
})

const checkmarkStyle = scale({
  width: '18px',
});

const Checkbox = ({checked}) => (
  <img
    src={checked ? checkmark : emptyCircle}
    alt=""
    css={checkmarkStyle}
  />
)

const TableCell = ({children}) => (
  <td>
    {R.type(children) === 'Boolean'
      ? <Checkbox checked={children} />
      : children
    }
  </td>
);

const TableHeadingCell = ({children}) => <th>{children}</th>;

const TableRow = ({children}) => (
  <tr css={rowStyle}>
    {children}
  </tr>
);

const Table = ({ headers, data }) => {
  const dataKeys = R.keys(R.head(data));
  const extractValues = row => R.props(dataKeys, row);
  const dataValues = R.map(extractValues, data);

  return (
    <table css={tableStyle} aria-label="a table">
      <thead>
        <TableRow>
          {R.map(x => <TableHeadingCell>{x}</TableHeadingCell>, headers)}
        </TableRow>
      </thead>
      <tbody>
      {R.addIndex(R.map)((row, index) => (
        <TableRow key={index}>
          {R.map(x => <TableCell>{x}</TableCell>, row)}
        </TableRow>
      ), dataValues)}
      </tbody>
    </table>
  );
}

export default Table;