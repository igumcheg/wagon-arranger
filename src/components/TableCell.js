import React from 'react';
import {TableRowColumn} from 'material-ui/Table';
import CellInput from '../containers/CellInput'

const TableCell = ({
  style,
  value,
    wagonNumber,
    fieldName
}) =>(
  <TableRowColumn style={style}>
    <CellInput style = {style}
               value={value}
    wagonNumber={wagonNumber}
    fieldName={fieldName}/>
  </TableRowColumn>
);

export default TableCell;