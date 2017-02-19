import React from 'react';
import {TableRowColumn} from 'material-ui/Table';

let onClick = () => {
  console.log("clicked");
}
const TableCell = ({
  style,
  value,
  onClick
}) =>(
  <TableRowColumn style={style}>{value}</TableRowColumn>
);

export default TableCell;