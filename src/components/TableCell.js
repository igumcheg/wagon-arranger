import React from 'react';
import {TableRowColumn} from 'material-ui/Table';
import CellInput from './CellInput'

const TableCell = ({
  style,
  value
}) =>(
  <TableRowColumn style={style}>
    <CellInput style = {style} value={value}/>
  </TableRowColumn>
);

export default TableCell;