import React from 'react';
import {TableRow, TableRowColumn} from 'material-ui/Table';
import "./WagonItem"

export const overallStyle = {
    borderRight: "1px solid black",
    fontSize: "11px",
    textAlign: "center",
    width: "auto",
    padding: "0",
    margin: "0",
    wordWrap: 'break-word',
    whiteSpace: 'normal'
};
let oldStyle = { backgroundColor: '#f9f768'};
let newStyle = { backgroundColor: '#b3d84b'};
export const width = (width) => ({width});
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
    comment,
    isOld
}) => {
    let style ={...overallStyle, ...(isOld ? oldStyle : newStyle)};
    return <TableRow>
        <TableRowColumn style={{...style, ...width('2%')}}>{number}</TableRowColumn>
        <TableRowColumn style={{...style, ...width('5%')}}>{wagon}</TableRowColumn>
        <TableRowColumn style={{...style, ...width('7%')}}>{owner}</TableRowColumn>
        <TableRowColumn style={{...style, ...width('7%')}}>{manager}</TableRowColumn>
        <TableRowColumn style={{...style, ...width('5%')}}>{releaseDate}</TableRowColumn>
        <TableRowColumn style={{...style, ...width('10%')}}>{releaseStation}</TableRowColumn>
        <TableRowColumn style={{...style, ...width('6%')}}>{releaseRailroad}</TableRowColumn>
        <TableRowColumn style={{...style, ...width('5%')}}>{cargoType}</TableRowColumn>
        <TableRowColumn style={{...style, ...width('4%')}}>{weight}</TableRowColumn>
        <TableRowColumn style={{...style, ...width('5%')}}>{operationDate}</TableRowColumn>
        <TableRowColumn style={{...style, ...width('7%')}}>{currentStation}</TableRowColumn>
        <TableRowColumn style={style}>{currentRailroad}</TableRowColumn>
        <TableRowColumn style={style}>{operationCode}</TableRowColumn>
        <TableRowColumn style={style}>{arrivalDate}</TableRowColumn>
        <TableRowColumn style={style}>{arrivalStation}</TableRowColumn>
        <TableRowColumn style={style}>{arrivalRailroad}</TableRowColumn>
        <TableRowColumn style={style}>{cargoCode}</TableRowColumn>
        <TableRowColumn style={style}>{repairDate}</TableRowColumn>
        <TableRowColumn style={style}>{idleDays}</TableRowColumn>
        <TableRowColumn style={style}>{wagonType}</TableRowColumn>
        <TableRowColumn style={style}>{wagonModel}</TableRowColumn>
        <TableRowColumn style={style}>{km}</TableRowColumn>
        <TableRowColumn style={style}>{comment}</TableRowColumn>
    </TableRow>
};

export default WagonRow;