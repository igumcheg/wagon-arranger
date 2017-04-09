import React from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow} from 'material-ui/Table';
import {width} from "./WagonRow";
import OpenInputButton from "../containers/OpenInputButton"
import TableCell from "./TableCell"

const WagonTablePresentation = ({wagons,showFileNameInput, onRowSelect, selected}) => {

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
            <Table showCheckboxes={true} multiSelectable={true} onRowSelection={(keys) => {
              let selectedPositions = keys.map(key => wagons[key].wagon);
              onRowSelect(selectedPositions);
            }}>
                <TableHeader displaySelectAll={false} adjustForCheckbox={true}>
                    <TableRow>
                        <TableHeaderColumn style={{...overallStyle, ...width('2%')}}>N</TableHeaderColumn>
                        <TableHeaderColumn style={{...overallStyle, ...width('5%')}}>Вагон</TableHeaderColumn>
                        <TableHeaderColumn style={{...overallStyle, ...width('6%')}}>Собственник</TableHeaderColumn>
                        <TableHeaderColumn style={{...overallStyle, ...width('7%')}}>Распорядитель</TableHeaderColumn>
                        <TableHeaderColumn style={{...overallStyle, ...width('5%')}}>Дата отправки</TableHeaderColumn>
                        <TableHeaderColumn
                            style={{...overallStyle, ...width('7%')}}>Станция отправления</TableHeaderColumn>
                        <TableHeaderColumn style={{...overallStyle, ...width('6%')}}>ЖД Отправления</TableHeaderColumn>
                        <TableHeaderColumn style={{...overallStyle, ...width('3%')}}>Тип груза</TableHeaderColumn>
                        <TableHeaderColumn style={{...overallStyle, ...width('2%')}}>Вес</TableHeaderColumn>
                        <TableHeaderColumn style={{...overallStyle, ...width('5%')}}>Дата операции</TableHeaderColumn>
                        <TableHeaderColumn style={{...overallStyle, ...width('7%')}}>Текущая станция</TableHeaderColumn>
                        <TableHeaderColumn style={{...overallStyle, ...width('4%')}}>ЖД текущая</TableHeaderColumn>
                        <TableHeaderColumn style={{...overallStyle, ...width('5%')}}>Код операции</TableHeaderColumn>
                        <TableHeaderColumn style={{...overallStyle, ...width('5%')}}>Дата прибытия</TableHeaderColumn>
                        <TableHeaderColumn
                            style={{...overallStyle, ...width('7%')}}>Станция назначения</TableHeaderColumn>
                        <TableHeaderColumn style={{...overallStyle, ...width('4%')}}>ЖД назначения</TableHeaderColumn>
                        <TableHeaderColumn style={{...overallStyle, ...width('4%')}}>Код груза</TableHeaderColumn>
                        <TableHeaderColumn
                            style={{...overallStyle, ...width('5%')}}>Дата планового ремонта</TableHeaderColumn>
                        <TableHeaderColumn
                            style={{...overallStyle, ...width('6%')}}>Количество дней простоя</TableHeaderColumn>
                        <TableHeaderColumn style={{...overallStyle, ...width('4%')}}>Тип вагона</TableHeaderColumn>
                        <TableHeaderColumn style={{...overallStyle, ...width('4%')}}>Модель</TableHeaderColumn>
                        <TableHeaderColumn style={{...overallStyle, ...width('3%')}}>Км</TableHeaderColumn>
                        <TableHeaderColumn style={{...overallStyle, ...width('5%')}}>Комментарий</TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody deselectOnClickaway={false} displayRowCheckbox={!showFileNameInput}>
                    {wagons.sort((a, b) => (a.number - b.number))
                        .map((wagon) =>
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
            </Table>


            <div>
                <OpenInputButton disabled={!selected}/>
            </div>

        </div>)
};

export default WagonTablePresentation;