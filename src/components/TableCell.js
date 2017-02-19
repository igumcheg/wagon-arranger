import React from 'react';
import {TableRowColumn} from 'material-ui/Table';

const TableCell = ({
  style,
  value
}) =>(
  <TableRowColumn style={style}>
    <CellInput value={value}/>
  </TableRowColumn>
);

export default TableCell;