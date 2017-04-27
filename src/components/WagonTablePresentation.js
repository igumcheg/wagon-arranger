import React, {Component} from "react";
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
import SelectAllButtonContainer from '../containers/SelectAllButtonContainer'


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
const WagonTablePresentation = ({
    wagons,
    mainLoaded,
    loaded,
    showFileNameInput,
    selected,
    getPossibleValues,
    onRowSelect,
    onHeaderClick,
    onFilterSelect
})=> (
    <div style={{width: "auto"}}>
        { !loaded ?
            <LoadingDislocationScreen/> : null}
        <Table height={'400px'} fixedFooter={true} showCheckboxes={true} multiSelectable={true} onRowSelection={(keys) => {
             let selectedPositions = keys.map(key => wagons[key].wagon);
              onRowSelect(selectedPositions);
            }}>
            <TableHeader displaySelectAll={false} adjustForCheckbox={false}>

                <TableRow style={{verticalAlign: 'top'}}>
                    <TableHeaderColumn
                        style={{paddingLeft:'24px',paddingTop:'32px',paddingRight:'24px',...width('5.53%')}}>
                        <SelectAllButtonContainer />
                    </TableHeaderColumn>

                    <TableHeaderColumn style={{...overallStyle, ...width('3%')}}>
                        <HeaderCellContent parameterName={"number"} onHeaderClick={onHeaderClick}
                                           onFilterSelect={onFilterSelect}
                                           values={getPossibleValues(wagons, 'number')}/>
                    </TableHeaderColumn>

                    <TableHeaderColumn style={{...overallStyle, ...width('5%')}}>
                        <HeaderCellContent parameterName={"wagon"} onHeaderClick={onHeaderClick}
                                           onFilterSelect={onFilterSelect}
                                           values={getPossibleValues(wagons, 'wagon')}/>
                    </TableHeaderColumn>

                    <TableHeaderColumn style={{...overallStyle, ...width('6%')}}>
                        <HeaderCellContent parameterName={"owner"} onHeaderClick={onHeaderClick}
                                           onFilterSelect={onFilterSelect}
                                           values={getPossibleValues(wagons, 'owner')}/>
                    </TableHeaderColumn>

                    <TableHeaderColumn style={{...overallStyle, ...width('7%')}}>
                        <HeaderCellContent parameterName={"manager"} onHeaderClick={onHeaderClick}
                                           onFilterSelect={onFilterSelect}
                                           values={getPossibleValues(wagons, 'manager')}/>
                    </TableHeaderColumn>

                    <TableHeaderColumn style={{...overallStyle, ...width('5%')}}>
                        <HeaderCellContent parameterName={"releaseDate"}
                                           onHeaderClick={onHeaderClick}
                                           onFilterSelect={onFilterSelect}
                                           values={getPossibleValues(wagons, 'releaseDate')}/>
                    </TableHeaderColumn>

                    <TableHeaderColumn
                        style={{...overallStyle, ...width('7%')}}>
                        <HeaderCellContent parameterName={"releaseStation"}
                                           onHeaderClick={onHeaderClick}
                                           onFilterSelect={onFilterSelect}
                                           values={getPossibleValues(wagons, 'releaseStation')}/>
                    </TableHeaderColumn>

                    <TableHeaderColumn style={{...overallStyle, ...width('6%')}}>
                        <HeaderCellContent parameterName={"releaseRailroad"}
                                           onHeaderClick={onHeaderClick}
                                           onFilterSelect={onFilterSelect}
                                           values={getPossibleValues(wagons, 'releaseRailroad')}/>
                    </TableHeaderColumn>

                    <TableHeaderColumn style={{...overallStyle, ...width('3%')}}>
                        <HeaderCellContent parameterName={"cargoType"} onHeaderClick={onHeaderClick}
                                           onFilterSelect={onFilterSelect}
                                           values={getPossibleValues(wagons, 'cargoType')}/>
                    </TableHeaderColumn>

                    <TableHeaderColumn style={{...overallStyle, ...width('2%')}}>
                        <HeaderCellContent parameterName={"weight"} onHeaderClick={onHeaderClick}
                                           onFilterSelect={onFilterSelect}
                                           values={getPossibleValues(wagons, 'weight')}/>
                    </TableHeaderColumn>

                    <TableHeaderColumn style={{...overallStyle, ...width('5%')}}>
                        <HeaderCellContent parameterName={"operationDate"}
                                           onHeaderClick={onHeaderClick}
                                           onFilterSelect={onFilterSelect}
                                           values={getPossibleValues(wagons, 'operationDate')}/>
                    </TableHeaderColumn>

                    <TableHeaderColumn style={{...overallStyle, ...width('7%')}}>
                        <HeaderCellContent parameterName={"currentStation"}
                                           onHeaderClick={onHeaderClick}
                                           onFilterSelect={onFilterSelect}
                                           values={getPossibleValues(wagons, 'currentStation')}/>
                    </TableHeaderColumn>

                    <TableHeaderColumn style={{...overallStyle, ...width('4%')}}>
                        <HeaderCellContent parameterName={"currentRailroad"}
                                           onHeaderClick={onHeaderClick}
                                           onFilterSelect={onFilterSelect}
                                           values={getPossibleValues(wagons, 'currentRailroad')}/>
                    </TableHeaderColumn>

                    <TableHeaderColumn style={{...overallStyle, ...width('5%')}}>
                        <HeaderCellContent parameterName={"operationCode"}
                                           onHeaderClick={onHeaderClick}
                                           onFilterSelect={onFilterSelect}
                                           values={getPossibleValues(wagons, 'operationCode')}/>
                    </TableHeaderColumn>

                    <TableHeaderColumn style={{...overallStyle, ...width('5%')}}>
                        <HeaderCellContent parameterName={"arrivalDate"}
                                           onHeaderClick={onHeaderClick}
                                           onFilterSelect={onFilterSelect}
                                           values={getPossibleValues(wagons, 'arrivalDate')}/>
                    </TableHeaderColumn>

                    <TableHeaderColumn
                        style={{...overallStyle, ...width('7%')}}>
                        <HeaderCellContent parameterName={"arrivalStation"}
                                           onHeaderClick={onHeaderClick}
                                           onFilterSelect={onFilterSelect}
                                           values={getPossibleValues(wagons, 'arrivalStation')}/>
                    </TableHeaderColumn>

                    <TableHeaderColumn style={{...overallStyle, ...width('4%')}}>
                        <HeaderCellContent parameterName={"arrivalRailroad"}
                                           onHeaderClick={onHeaderClick}
                                           onFilterSelect={onFilterSelect}
                                           values={getPossibleValues(wagons, 'arrivalRailroad')}/>
                    </TableHeaderColumn>

                    <TableHeaderColumn style={{...overallStyle, ...width('4%')}}>
                        <HeaderCellContent parameterName={"cargoCode"} onHeaderClick={onHeaderClick}
                                           onFilterSelect={onFilterSelect}
                                           values={getPossibleValues(wagons, 'cargoCode')}/>
                    </TableHeaderColumn>

                    <TableHeaderColumn
                        style={{...overallStyle, ...width('5%')}}>
                        <HeaderCellContent parameterName={"repairDate"} onHeaderClick={onHeaderClick}
                                           onFilterSelect={onFilterSelect}
                                           values={getPossibleValues(wagons, 'repairDate')}/>
                    </TableHeaderColumn>

                    <TableHeaderColumn
                        style={{...overallStyle, ...width('6%')}}>
                        <HeaderCellContent parameterName={"idleDays"} onHeaderClick={onHeaderClick}
                                           onFilterSelect={onFilterSelect}
                                           values={getPossibleValues(wagons, 'idleDays')}/>
                    </TableHeaderColumn>

                    <TableHeaderColumn style={{...overallStyle, ...width('4%')}}>
                        <HeaderCellContent parameterName={"wagonType"} onHeaderClick={onHeaderClick}
                                           onFilterSelect={onFilterSelect}
                                           values={getPossibleValues(wagons, 'wagonType')}/>
                    </TableHeaderColumn>

                    <TableHeaderColumn style={{...overallStyle, ...width('4%')}}>
                        <HeaderCellContent parameterName={"wagonModel"} onHeaderClick={onHeaderClick}
                                           onFilterSelect={onFilterSelect}
                                           values={getPossibleValues(wagons, 'wagonModel')}/>
                    </TableHeaderColumn>

                    <TableHeaderColumn style={{...overallStyle, ...width('3%')}}>
                        <HeaderCellContent parameterName={"km"} onHeaderClick={onHeaderClick}
                                           onFilterSelect={onFilterSelect}
                                           values={getPossibleValues(wagons, 'km')}/>
                    </TableHeaderColumn>

                    <TableHeaderColumn style={{...overallStyle, ...width('5%')}}>
                        <HeaderCellContent parameterName={"comment"} onHeaderClick={onHeaderClick}
                                           onFilterSelect={onFilterSelect}
                                           values={getPossibleValues(wagons, 'comment')}/>
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
        
    </div>);
export default WagonTablePresentation;