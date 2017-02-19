import React from 'react';
import {TableRow} from 'material-ui/Table';
import TableCell from './TableCell'
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
        <TableCell style={{...style, ...width('2%')}} value={number}/>
        <TableCell style={{...style, ...width('4%')}} value={wagon}/>
        <TableCell style={{...style, ...width('6%')}} value={owner}/>
        <TableCell style={{...style, ...width('7%')}} value={manager}/>
        <TableCell style={{...style, ...width('5%')}} value={releaseDate}/>
        <TableCell style={{...style, ...width('7%')}} value={releaseStation}/>
        <TableCell style={{...style, ...width('6%')}} value={releaseRailroad}/>
        <TableCell style={{...style, ...width('3%')}} value={cargoType}/>
        <TableCell style={{...style, ...width('2%')}} value={weight}/>
        <TableCell style={{...style, ...width('5%')}} value={operationDate}/>
        <TableCell style={{...style, ...width('7%')}} value={currentStation}/>
        <TableCell style={{...style, ...width('4%')}} value={currentRailroad}/>
        <TableCell style={{...style, ...width('5%')}} value={operationCode}/>
        <TableCell style={{...style, ...width('5%')}} value={arrivalDate}/>
        <TableCell style={{...style, ...width('7%')}} value={arrivalStation}/>
        <TableCell style={{...style, ...width('4%')}} value={arrivalRailroad}/>
        <TableCell style={{...style, ...width('4%')}} value={cargoCode}/>
        <TableCell style={{...style, ...width('5%')}} value={repairDate}/>
        <TableCell style={{...style, ...width('6%')}} value={idleDays}/>
        <TableCell style={{...style, ...width('4%')}} value={wagonType}/>
        <TableCell style={{...style, ...width('4%')}} value={wagonModel}/>
        <TableCell style={{...style, ...width('3%')}} value={km}/>
        <TableCell style={{...style, ...width('5%')}} value={comment}/>
    </TableRow>
};

export default WagonRow;