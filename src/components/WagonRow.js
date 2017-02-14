import React from 'react';
import {TableRow, TableRowColumn} from 'material-ui/Table';
import "./WagonItem"

const WagonRow = ({
    id,
    number,
    wagon,
    owner,
    manager,
    releaseDate,
    releaseStation,
    releaseRailroad,
    cargoType,
    weight,
    operationDate,
    currentStation,
    currentRailroad,
    operationCode,
    arrivalDate,
    arrivalStation,
    arrivalRailroad,
    cargoCode,
    repairDate,
    idleDays,
    wagonType,
    wagonModel,
    km,
    comment
}) => (
    <TableRow>
        <TableRowColumn>{number}</TableRowColumn>
        <TableRowColumn>{wagon}</TableRowColumn>
        <TableRowColumn>{owner}</TableRowColumn>
        <TableRowColumn>{manager}</TableRowColumn>
        <TableRowColumn>{releaseDate}</TableRowColumn>
        <TableRowColumn>{releaseStation}</TableRowColumn>
        <TableRowColumn>{releaseRailroad}</TableRowColumn>
        <TableRowColumn>{cargoType}</TableRowColumn>
        <TableRowColumn>{weight}</TableRowColumn>
        <TableRowColumn>{operationDate}</TableRowColumn>
        <TableRowColumn>{currentStation}</TableRowColumn>
        <TableRowColumn>{currentRailroad}</TableRowColumn>
        <TableRowColumn>{operationCode}</TableRowColumn>
        <TableRowColumn>{arrivalDate}</TableRowColumn>
        <TableRowColumn>{arrivalStation}</TableRowColumn>
        <TableRowColumn>{arrivalRailroad}</TableRowColumn>
        <TableRowColumn>{cargoCode}</TableRowColumn>
        <TableRowColumn>{repairDate}</TableRowColumn>
        <TableRowColumn>{idleDays}</TableRowColumn>
        <TableRowColumn>{wagonType}</TableRowColumn>
        <TableRowColumn>{wagonModel}</TableRowColumn>
        <TableRowColumn>{km}</TableRowColumn>
        <TableRowColumn>{comment}</TableRowColumn>
    </TableRow>
);

export default WagonRow;