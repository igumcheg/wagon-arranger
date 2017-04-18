import React from 'react';
import {Table, TableFooter, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import {width} from "./WagonRow";
import OpenInputButton from "../containers/OpenInputButton"
import TableCell from "./TableCell"
import LoadingDislocationScreen from "./LoadingDislocationScreen"

const WagonTablePresentation = ({wagons,showFileNameInput, onRowSelect, selected, loaded, onHeaderClick}) => {

    const overallStyle = {
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

    let style = {...overallStyle};
    return (
        <div style={{width: "auto"}}>
            { !loaded ?
            <LoadingDislocationScreen/> : null}
            <Table height={'400px'} fixedFooter={true} showCheckboxes={true} multiSelectable={true} onRowSelection={(keys) => {
              let selectedPositions = keys.map(key => wagons[key].wagon);
              onRowSelect(selectedPositions);
            }}>
                <TableHeader displaySelectAll={false} adjustForCheckbox={true}>
                    <TableRow>
                        <TableHeaderColumn style={{...overallStyle, ...width('2%')}} onTouchTap={()=>onHeaderClick("number")}>N</TableHeaderColumn>
                        <TableHeaderColumn style={{...overallStyle, ...width('5%')}} onTouchTap={()=>onHeaderClick("wagon")}>Вагон</TableHeaderColumn>
                        <TableHeaderColumn style={{...overallStyle, ...width('6%')}} onTouchTap={()=>onHeaderClick("owner")}>Собственник</TableHeaderColumn>
                        <TableHeaderColumn style={{...overallStyle, ...width('7%')}} onTouchTap={()=>onHeaderClick("manager")}>Распорядитель</TableHeaderColumn>
                        <TableHeaderColumn style={{...overallStyle, ...width('5%')}} onTouchTap={()=>onHeaderClick("releaseDate")}>Дата отправки</TableHeaderColumn>
                        <TableHeaderColumn
                            style={{...overallStyle, ...width('7%')}} onTouchTap={()=>onHeaderClick("releaseStation")}>Станция отправления</TableHeaderColumn>
                        <TableHeaderColumn style={{...overallStyle, ...width('6%')}} onTouchTap={()=>onHeaderClick("releaseRailroad")}>ЖД Отправления</TableHeaderColumn>
                        <TableHeaderColumn style={{...overallStyle, ...width('3%')}} onTouchTap={()=>onHeaderClick("cargoType")}>Тип груза</TableHeaderColumn>
                        <TableHeaderColumn style={{...overallStyle, ...width('2%')}} onTouchTap={()=>onHeaderClick("weight")}>Вес</TableHeaderColumn>
                        <TableHeaderColumn style={{...overallStyle, ...width('5%')}} onTouchTap={()=>onHeaderClick("operationDate")}>Дата операции</TableHeaderColumn>
                        <TableHeaderColumn style={{...overallStyle, ...width('7%')}} onTouchTap={()=>onHeaderClick("currentStation")}>Текущая станция</TableHeaderColumn>
                        <TableHeaderColumn style={{...overallStyle, ...width('4%')}} onTouchTap={()=>onHeaderClick("currentRailroad")}>ЖД текущая</TableHeaderColumn>
                        <TableHeaderColumn style={{...overallStyle, ...width('5%')}} onTouchTap={()=>onHeaderClick("operationCode")}>Код операции</TableHeaderColumn>
                        <TableHeaderColumn style={{...overallStyle, ...width('5%')}} onTouchTap={()=>onHeaderClick("arrivalDate")}>Дата прибытия</TableHeaderColumn>
                        <TableHeaderColumn
                            style={{...overallStyle, ...width('7%')}} onTouchTap={()=>onHeaderClick("arrivalStation")}>Станция назначения</TableHeaderColumn>
                        <TableHeaderColumn style={{...overallStyle, ...width('4%')}} onTouchTap={()=>onHeaderClick("arrivalRailroad")}>ЖД назначения</TableHeaderColumn>
                        <TableHeaderColumn style={{...overallStyle, ...width('4%')}} onTouchTap={()=>onHeaderClick("cargoCode")}>Код груза</TableHeaderColumn>
                        <TableHeaderColumn
                            style={{...overallStyle, ...width('5%')}} onTouchTap={()=>onHeaderClick("repairDate")}>Дата планового ремонта</TableHeaderColumn>
                        <TableHeaderColumn
                            style={{...overallStyle, ...width('6%')}} onTouchTap={()=>onHeaderClick("idleDays")}>Количество дней простоя</TableHeaderColumn>
                        <TableHeaderColumn style={{...overallStyle, ...width('4%')}} onTouchTap={()=>onHeaderClick("wagonType")}>Тип вагона</TableHeaderColumn>
                        <TableHeaderColumn style={{...overallStyle, ...width('4%')}} onTouchTap={()=>onHeaderClick("wagonModel")}>Модель</TableHeaderColumn>
                        <TableHeaderColumn style={{...overallStyle, ...width('3%')}} onTouchTap={()=>onHeaderClick("km")}>Км</TableHeaderColumn>
                        <TableHeaderColumn style={{...overallStyle, ...width('5%')}} onTouchTap={()=>onHeaderClick("comment")}>Комментарий</TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody deselectOnClickaway={false} displayRowCheckbox={!showFileNameInput}>
                    {wagons.map((wagon) =>
                            <TableRow selected={wagon.selected} key={wagon.wagon}>
                                <TableCell style={{...style, ...width('2%')}} wagonNumber={wagon.wagon}
                                           value={wagon.number} fieldName={'number'}/>
                                <TableCell style={{...style, ...width('5%')}} wagonNumber={wagon.wagon}
                                           value={wagon.wagon} fieldName={'wagon'}/>
                                <TableCell style={{...style, ...width('6%')}} wagonNumber={wagon.wagon}
                                           value={wagon.owner} fieldName={'owner'}/>
                                <TableCell style={{...style, ...width('7%')}} wagonNumber={wagon.wagon}
                                           value={wagon.manager} fieldName={'manager'}/>
                                <TableCell style={{...style, ...width('5%')}} wagonNumber={wagon.wagon}
                                           value={wagon.releaseDate} fieldName={'releaseDate'}/>
                                <TableCell style={{...style, ...width('7%')}} wagonNumber={wagon.wagon}
                                           value={wagon.releaseStation} fieldName={'releaseStation'}/>
                                <TableCell style={{...style, ...width('6%')}} wagonNumber={wagon.wagon}
                                           value={wagon.releaseRailroad} fieldName={'releaseRailroad'}/>
                                <TableCell style={{...style, ...width('3%')}} wagonNumber={wagon.wagon}
                                           value={wagon.cargoType} fieldName={'cargoType'}/>
                                <TableCell style={{...style, ...width('2%')}} wagonNumber={wagon.wagon}
                                           value={wagon.weight} fieldName={'weight'}/>
                                <TableCell style={{...style, ...width('5%')}} wagonNumber={wagon.wagon}
                                           value={wagon.operationDate} fieldName={'operationDate'}/>
                                <TableCell style={{...style, ...width('7%')}} wagonNumber={wagon.wagon}
                                           value={wagon.currentStation} fieldName={'currentStation'}/>
                                <TableCell style={{...style, ...width('4%')}} wagonNumber={wagon.wagon}
                                           value={wagon.currentRailroad} fieldName={'currentRailroad'}/>
                                <TableCell style={{...style, ...width('5%')}} wagonNumber={wagon.wagon}
                                           value={wagon.operationCode} fieldName={'operationCode'}/>
                                <TableCell style={{...style, ...width('5%')}} wagonNumber={wagon.wagon}
                                           value={wagon.arrivalDate} fieldName={'arrivalDate'}/>
                                <TableCell style={{...style, ...width('7%')}} wagonNumber={wagon.wagon}
                                           value={wagon.arrivalStation} fieldName={'arrivalStation'}/>
                                <TableCell style={{...style, ...width('4%')}} wagonNumber={wagon.wagon}
                                           value={wagon.arrivalRailroad} fieldName={'arrivalRailroad'}/>
                                <TableCell style={{...style, ...width('4%')}} wagonNumber={wagon.wagon}
                                           value={wagon.cargoCode} fieldName={'cargoCode'}/>
                                <TableCell style={{...style, ...width('5%')}} wagonNumber={wagon.wagon}
                                           value={wagon.repairDate} fieldName={'repairDate'}/>
                                <TableCell style={{...style, ...width('6%')}} wagonNumber={wagon.wagon}
                                           value={wagon.idleDays} fieldName={'idleDays'}/>
                                <TableCell style={{...style, ...width('4%')}} wagonNumber={wagon.wagon}
                                           value={wagon.wagonType} fieldName={'wagonType'}/>
                                <TableCell style={{...style, ...width('4%')}} wagonNumber={wagon.wagon}
                                           value={wagon.wagonModel} fieldName={'wagonModel'}/>
                                <TableCell style={{...style, ...width('3%')}} wagonNumber={wagon.wagon} value={wagon.km}
                                           fieldName={'km'}/>
                                <TableCell style={{...style, ...width('5%')}} wagonNumber={wagon.wagon}
                                           value={wagon.comment} fieldName={'comment'}/>
                            </TableRow>
                        )}
                </TableBody>
                    <TableFooter adjustForCheckbox = {false}>
                        <TableRow>
                        <TableRowColumn colSpan="3" style={{textAlign: 'center'}}>
                            <OpenInputButton disabled={!selected}/>
                        </TableRowColumn>
                        </TableRow>
                </TableFooter>
            </Table>


        </div>)
};

export default WagonTablePresentation;