import React from 'react';
import {TableRowColumn} from 'material-ui/Table';

const TableCell = ({
  style,
  value,
    wagonNumber,
    isOld,
    fieldName
}) =>(
  <TableRowColumn style={style}>
      {value}
  </TableRowColumn>
);

export default TableCell;