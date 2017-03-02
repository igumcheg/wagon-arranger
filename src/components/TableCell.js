import React from 'react';
import {TableRowColumn} from 'material-ui/Table';
import CellInput from './CellInput'

const TableCell = ({
  style,
  value,
    wagonNumber,
    isOld,
    fieldName
}) =>(
  <TableRowColumn style={style}>
    <CellInput style = {style}
               value={value}
    wagonNumber={wagonNumber}
    isOld={isOld}
    fieldName={fieldName}/>
  </TableRowColumn>
);

export default TableCell;