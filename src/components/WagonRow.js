import React from 'react';
import TableCell from './TableCell'
import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn}
    from 'material-ui/Table';
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';

const style = {
    margin: 12
};

export const overallStyle = {
    border: 'none',
    fontSize: "11px",
    textAlign: "center",
    width: "auto",
    padding: "0",
    margin: "0",
    height: "48px",
    overflow: "hidden",
    whiteSpace: "normal",
    textOverflow: "ellipsis",
    wordWrap: "break-word"
};
let oldStyle = {backgroundColor: '#eff0f2'};
let newStyle = {backgroundColor: 'rgba(127, 221, 233, 0.8)'};
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
    let style = {...overallStyle, ...(isOld ? oldStyle : newStyle)};
    return <TableRow>
        <TableCell wagonNumber={wagon} isOld={isOld} style={{...style, ...width('2%')}} fieldName={'number'}
                   value={number}/>
        <TableCell wagonNumber={wagon} isOld={isOld} style={{...style, ...width('5%')}} fieldName={'wagon'}
                   value={wagon}/>
        <TableCell wagonNumber={wagon} isOld={isOld} style={{...style, ...width('6%')}} fieldName={'owner'}
                   value={owner}/>
        <TableCell wagonNumber={wagon} isOld={isOld} style={{...style, ...width('7%')}} fieldName={'manager'}
                   value={manager}/>
        <TableCell wagonNumber={wagon} isOld={isOld} style={{...style, ...width('5%')}} fieldName={'releaseDate'}
                   value={releaseDate}/>
        <TableCell wagonNumber={wagon} isOld={isOld} style={{...style, ...width('7%')}} fieldName={'releaseStation'}
                   value={releaseStation}/>
        <TableCell wagonNumber={wagon} isOld={isOld} style={{...style, ...width('6%')}} fieldName={'releaseRailroad'}
                   value={releaseRailroad}/>
        <TableCell wagonNumber={wagon} isOld={isOld} style={{...style, ...width('3%')}} fieldName={'cargoType'}
                   value={cargoType}/>
        <TableCell wagonNumber={wagon} isOld={isOld} style={{...style, ...width('2%')}} fieldName={'weight'}
                   value={weight}/>
        <TableCell wagonNumber={wagon} isOld={isOld} style={{...style, ...width('5%')}} fieldName={'operationDate'}
                   value={operationDate}/>
        <TableCell wagonNumber={wagon} isOld={isOld} style={{...style, ...width('7%')}} fieldName={'currentStation'}
                   value={currentStation}/>
        <TableCell wagonNumber={wagon} isOld={isOld} style={{...style, ...width('4%')}} fieldName={'currentRailroad'}
                   value={currentRailroad}/>
        <TableCell wagonNumber={wagon} isOld={isOld} style={{...style, ...width('5%')}} fieldName={'operationCode'}
                   value={operationCode}/>
        <TableCell wagonNumber={wagon} isOld={isOld} style={{...style, ...width('5%')}} fieldName={'arrivalDate'}
                   value={arrivalDate}/>
        <TableCell wagonNumber={wagon} isOld={isOld} style={{...style, ...width('7%')}} fieldName={'arrivalStation'}
                   value={arrivalStation}/>
        <TableCell wagonNumber={wagon} isOld={isOld} style={{...style, ...width('4%')}} fieldName={'arrivalRailroad'}
                   value={arrivalRailroad}/>
        <TableCell wagonNumber={wagon} isOld={isOld} style={{...style, ...width('4%')}} fieldName={'cargoCode'}
                   value={cargoCode}/>
        <TableCell wagonNumber={wagon} isOld={isOld} style={{...style, ...width('5%')}} fieldName={'repairDate'}
                   value={repairDate}/>
        <TableCell wagonNumber={wagon} isOld={isOld} style={{...style, ...width('6%')}} fieldName={'idleDays'}
                   value={idleDays}/>
        <TableCell wagonNumber={wagon} isOld={isOld} style={{...style, ...width('4%')}} fieldName={'wagonType'}
                   value={wagonType}/>
        <TableCell wagonNumber={wagon} isOld={isOld} style={{...style, ...width('4%')}} fieldName={'wagonModel'}
                   value={wagonModel}/>
        <TableCell wagonNumber={wagon} isOld={isOld} style={{...style, ...width('3%')}} fieldName={'km'} value={km}/>
        <TableCell wagonNumber={wagon} isOld={isOld} style={{...style, ...width('5%')}} fieldName={'comment'}
                   value={comment}/>
    </TableRow>
};
export default WagonRow;