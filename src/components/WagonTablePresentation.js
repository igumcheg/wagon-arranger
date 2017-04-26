import React from 'react';
import {
    Table,
    TableFooter,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn
} from 'material-ui/Table';
import {width} from "./WagonRow";
import OpenInputButton from "../containers/OpenInputButton"
import TableCell from "./TableCell"
import LoadingDislocationScreen from "./LoadingDislocationScreen"
import HeaderCellContent from './HeaderCellContent'

const WagonTablePresentation = ({
    wagons,
    showFileNameInput,
    onRowSelect,
    selected,
    loaded,
    onHeaderClick,
    getPossibleValues,
    onFilterSelect
}) => {

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
        wordWrap: "break-word",
    };

    let style = {...overallStyle};

    return (
        <div style={{width: "auto"}}>
            { !loaded ?
                <LoadingDislocationScreen/> : null}
            <Table height={'400px'} fixedFooter={true} showCheckboxes={true} multiSelectable={true} onRowSelection={(keys) => {
             let selectedPositions;
                if (keys === "all") {
                    selectedPositions = wagons.map((wagon) => wagon.wagon);
                } else if (keys === "none") {
                    selectedPositions = [];
                } else {
                    selectedPositions = keys.map(key => wagons[key].wagon);
                }
              onRowSelect(selectedPositions);
            }}>
                <TableHeader displaySelectAll={true} adjustForCheckbox={true}>

                    <TableRow style={{verticalAlign: 'top'}}>
                        <TableHeaderColumn style={{...overallStyle, ...width('3%')}}>
                            <HeaderCellContent parameterName={"number"} onHeaderClick={onHeaderClick} onFilterSelect={onFilterSelect} values={getPossibleValues(wagons, 'number')} headerName={"N"}/>
                        </TableHeaderColumn>

                        <TableHeaderColumn style={{...overallStyle, ...width('5%')}}>
                            <HeaderCellContent parameterName={"wagon"} onHeaderClick={onHeaderClick} onFilterSelect={onFilterSelect} values={getPossibleValues(wagons, 'wagon')} headerName={"Вагон"}/>
                        </TableHeaderColumn>

                        <TableHeaderColumn style={{...overallStyle, ...width('6%')}}>
                            <HeaderCellContent parameterName={"owner"} onHeaderClick={onHeaderClick} onFilterSelect={onFilterSelect} values={getPossibleValues(wagons, 'owner')} headerName={"Собственник"}/>
                        </TableHeaderColumn>

                        <TableHeaderColumn style={{...overallStyle, ...width('7%')}}>
                            <HeaderCellContent parameterName={"manager"} onHeaderClick={onHeaderClick} onFilterSelect={onFilterSelect} values={getPossibleValues(wagons, 'manager')} headerName={"Распорядитель"}/>
                        </TableHeaderColumn>

                        <TableHeaderColumn style={{...overallStyle, ...width('5%')}}>
                            <HeaderCellContent parameterName={"releaseDate"} onHeaderClick={onHeaderClick} onFilterSelect={onFilterSelect} values={getPossibleValues(wagons, 'releaseDate')} headerName={"Дата отправки"}/>
                        </TableHeaderColumn>

                        <TableHeaderColumn
                            style={{...overallStyle, ...width('7%')}}>
                            <HeaderCellContent parameterName={"releaseStation"} onHeaderClick={onHeaderClick} onFilterSelect={onFilterSelect} values={getPossibleValues(wagons, 'releaseStation')} headerName={"Станция отправления"}/>
                        </TableHeaderColumn>

                        <TableHeaderColumn style={{...overallStyle, ...width('6%')}}>
                            <HeaderCellContent parameterName={"releaseRailroad"} onHeaderClick={onHeaderClick} onFilterSelect={onFilterSelect} values={getPossibleValues(wagons, 'releaseRailroad')} headerName={"ЖД Отправления"}/>
                        </TableHeaderColumn>

                        <TableHeaderColumn style={{...overallStyle, ...width('3%')}}>
                            <HeaderCellContent parameterName={"cargoType"} onHeaderClick={onHeaderClick} onFilterSelect={onFilterSelect} values={getPossibleValues(wagons, 'cargoType')} headerName={"Тип груза"}/>
                        </TableHeaderColumn>

                        <TableHeaderColumn style={{...overallStyle, ...width('2%')}}>
                            <HeaderCellContent parameterName={"weight"} onHeaderClick={onHeaderClick} onFilterSelect={onFilterSelect} values={getPossibleValues(wagons, 'weight')} headerName={"Вес"}/>
                        </TableHeaderColumn>

                        <TableHeaderColumn style={{...overallStyle, ...width('5%')}}>
                            <HeaderCellContent parameterName={"operationDate"} onHeaderClick={onHeaderClick} onFilterSelect={onFilterSelect} values={getPossibleValues(wagons, 'operationDate')} headerName={"Дата операции"}/>
                        </TableHeaderColumn>

                        <TableHeaderColumn style={{...overallStyle, ...width('7%')}}>
                            <HeaderCellContent parameterName={"currentStation"} onHeaderClick={onHeaderClick} onFilterSelect={onFilterSelect} values={getPossibleValues(wagons, 'currentStation')} headerName={"Текущая станция"}/>
                        </TableHeaderColumn>

                        <TableHeaderColumn style={{...overallStyle, ...width('4%')}}>
                            <HeaderCellContent parameterName={"currentRailroad"} onHeaderClick={onHeaderClick} onFilterSelect={onFilterSelect} values={getPossibleValues(wagons, 'currentRailroad')} headerName={"ЖД текущая"}/>
                        </TableHeaderColumn>

                        <TableHeaderColumn style={{...overallStyle, ...width('5%')}}>
                            <HeaderCellContent parameterName={"operationCode"} onHeaderClick={onHeaderClick} onFilterSelect={onFilterSelect} values={getPossibleValues(wagons, 'operationCode')} headerName={"Код операции"}/>
                        </TableHeaderColumn>

                        <TableHeaderColumn style={{...overallStyle, ...width('5%')}}>
                            <HeaderCellContent parameterName={"arrivalDate"} onHeaderClick={onHeaderClick} onFilterSelect={onFilterSelect} values={getPossibleValues(wagons, 'arrivalDate')} headerName={"Дата прибытия"}/>
                        </TableHeaderColumn>

                        <TableHeaderColumn
                            style={{...overallStyle, ...width('7%')}}>
                            <HeaderCellContent parameterName={"arrivalStation"} onHeaderClick={onHeaderClick} onFilterSelect={onFilterSelect} values={getPossibleValues(wagons, 'arrivalStation')} headerName={"Станция назначения"}/>
                        </TableHeaderColumn>

                        <TableHeaderColumn style={{...overallStyle, ...width('4%')}}>
                            <HeaderCellContent parameterName={"arrivalRailroad"} onHeaderClick={onHeaderClick} onFilterSelect={onFilterSelect} values={getPossibleValues(wagons, 'arrivalRailroad')} headerName={"ЖД назначения"}/>
                        </TableHeaderColumn>

                        <TableHeaderColumn style={{...overallStyle, ...width('4%')}}>
                            <HeaderCellContent parameterName={"cargoCode"} onHeaderClick={onHeaderClick} onFilterSelect={onFilterSelect} values={getPossibleValues(wagons, 'cargoCode')} headerName={"Код груза"}/>
                        </TableHeaderColumn>

                        <TableHeaderColumn
                            style={{...overallStyle, ...width('5%')}}>
                            <HeaderCellContent parameterName={"repairDate"} onHeaderClick={onHeaderClick} onFilterSelect={onFilterSelect} values={getPossibleValues(wagons, 'repairDate')} headerName={"Дата планового ремонта"}/>
                        </TableHeaderColumn>

                        <TableHeaderColumn
                            style={{...overallStyle, ...width('6%')}}>
                            <HeaderCellContent parameterName={"idleDays"} onHeaderClick={onHeaderClick} onFilterSelect={onFilterSelect} values={getPossibleValues(wagons, 'idleDays')} headerName={"Количество дней простоя"}/>
                        </TableHeaderColumn>

                        <TableHeaderColumn style={{...overallStyle, ...width('4%')}}>
                            <HeaderCellContent parameterName={"wagonType"} onHeaderClick={onHeaderClick} onFilterSelect={onFilterSelect} values={getPossibleValues(wagons, 'wagonType')} headerName={"Тип вагона"}/>
                        </TableHeaderColumn>

                        <TableHeaderColumn style={{...overallStyle, ...width('4%')}}>
                            <HeaderCellContent parameterName={"wagonModel"} onHeaderClick={onHeaderClick} onFilterSelect={onFilterSelect} values={getPossibleValues(wagons, 'wagonModel')} headerName={"Модель"}/>
                        </TableHeaderColumn>

                        <TableHeaderColumn style={{...overallStyle, ...width('3%')}}>
                            <HeaderCellContent parameterName={"km"} onHeaderClick={onHeaderClick} onFilterSelect={onFilterSelect} values={getPossibleValues(wagons, 'km')} headerName={"Км"}/>
                        </TableHeaderColumn>

                        <TableHeaderColumn style={{...overallStyle, ...width('5%')}}>
                            <HeaderCellContent parameterName={"comment"} onHeaderClick={onHeaderClick} onFilterSelect={onFilterSelect} values={getPossibleValues(wagons, 'comment')} headerName={"Комментарий"}/>
                        </TableHeaderColumn>
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
                <TableFooter adjustForCheckbox={false}>
                    <TableRow>
                        <TableRowColumn>
                            <OpenInputButton disabled={!selected}/>
                        </TableRowColumn>
                    </TableRow>
                </TableFooter>
            </Table>


        </div>)
};

export default WagonTablePresentation;