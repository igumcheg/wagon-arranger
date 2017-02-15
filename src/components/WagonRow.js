import React from 'react';
import {TableRow, TableRowColumn} from 'material-ui/Table';
import "./WagonItem"

export const overallStyle = {
    // borderBottom: "1px solid #ffbe47",
    fontSize: "11px",
    textAlign: "center",
    width: "auto",
    padding: "0",
    margin: "0",
    wordWrap: 'break-word',
    whiteSpace: 'normal'
};
let oldStyle = { backgroundColor: '#f9f768', borderBottom: "1px solid #edf26f"};
let newStyle = { backgroundColor: '#b3d84b', borderBottom: "1px solid #afd662"};
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
        <TableRowColumn style={{...style, ...width('4%')}}>{wagon}</TableRowColumn>
        <TableRowColumn style={{...style, ...width('6%')}}>{owner}</TableRowColumn>
        <TableRowColumn style={{...style, ...width('7%')}}>{manager}</TableRowColumn>
        <TableRowColumn style={{...style, ...width('5%')}}>{releaseDate}</TableRowColumn>
        <TableRowColumn style={{...style, ...width('7%')}}>{releaseStation}</TableRowColumn>
        <TableRowColumn style={{...style, ...width('6%')}}>{releaseRailroad}</TableRowColumn>
        <TableRowColumn style={{...style, ...width('3%')}}>{cargoType}</TableRowColumn>
        <TableRowColumn style={{...style, ...width('2%')}}>{weight}</TableRowColumn>
        <TableRowColumn style={{...style, ...width('5%')}}>{operationDate}</TableRowColumn>
        <TableRowColumn style={{...style, ...width('7%')}}>{currentStation}</TableRowColumn>
        <TableRowColumn style={{...style, ...width('4%')}}>{currentRailroad}</TableRowColumn>
        <TableRowColumn style={{...style, ...width('5%')}}>{operationCode}</TableRowColumn>
        <TableRowColumn style={{...style, ...width('5%')}}>{arrivalDate}</TableRowColumn>
        <TableRowColumn style={{...style, ...width('7%')}}>{arrivalStation}</TableRowColumn>
        <TableRowColumn style={{...style, ...width('4%')}}>{arrivalRailroad}</TableRowColumn>
        <TableRowColumn style={{...style, ...width('4%')}}>{cargoCode}</TableRowColumn>
        <TableRowColumn style={{...style, ...width('5%')}}>{repairDate}</TableRowColumn>
        <TableRowColumn style={{...style, ...width('6%')}}>{idleDays}</TableRowColumn>
        <TableRowColumn style={{...style, ...width('4%')}}>{wagonType}</TableRowColumn>
        <TableRowColumn style={{...style, ...width('4%')}}>{wagonModel}</TableRowColumn>
        <TableRowColumn style={{...style, ...width('3%')}}>{km}</TableRowColumn>
        <TableRowColumn style={{...style, ...width('5%')}}>{comment}</TableRowColumn>
    </TableRow>
};

export default WagonRow;