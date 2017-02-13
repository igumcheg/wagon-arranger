import React from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

const WagonTablePresentation = ({wagons}) => {
    console.log(JSON.stringify(wagons));
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHeaderColumn>N</TableHeaderColumn>
                    <TableHeaderColumn>Вагон</TableHeaderColumn>
                    <TableHeaderColumn>Собственник</TableHeaderColumn>
                    <TableHeaderColumn>Распорядитель</TableHeaderColumn>
                    <TableHeaderColumn>Дата отправки</TableHeaderColumn>
                    <TableHeaderColumn>Станция отправления</TableHeaderColumn>
                    <TableHeaderColumn>ЖД Отправления</TableHeaderColumn>
                    <TableHeaderColumn>Тип груза</TableHeaderColumn>
                    <TableHeaderColumn>Вес</TableHeaderColumn>
                    <TableHeaderColumn>Дата операции</TableHeaderColumn>
                    <TableHeaderColumn>Текущая станция</TableHeaderColumn>
                    <TableHeaderColumn>ЖД текущая</TableHeaderColumn>
                    <TableHeaderColumn>Код операции</TableHeaderColumn>
                    <TableHeaderColumn>Дата прибытия</TableHeaderColumn>
                    <TableHeaderColumn>Станция назначения</TableHeaderColumn>
                    <TableHeaderColumn>ЖД назначения</TableHeaderColumn>
                    <TableHeaderColumn>Код операции</TableHeaderColumn>
                    <TableHeaderColumn>Дата прибытия</TableHeaderColumn>
                    <TableHeaderColumn>Станция назначения</TableHeaderColumn>
                    <TableHeaderColumn>ЖД назначения</TableHeaderColumn>
                    <TableHeaderColumn>Код груза</TableHeaderColumn>
                    <TableHeaderColumn>Дата планового ремонта</TableHeaderColumn>
                    <TableHeaderColumn>Количество дней простоя</TableHeaderColumn>
                    <TableHeaderColumn>Тип вагона</TableHeaderColumn>
                    <TableHeaderColumn>Модель</TableHeaderColumn>
                    <TableHeaderColumn>Км</TableHeaderColumn>
                    <TableHeaderColumn>Комментарий</TableHeaderColumn>
                </TableRow>
            </TableHeader>
            <TableBody>
                {wagons.map((wagon) =>
                    <TableRow>
                        <TableRowColumn>{wagon.number}</TableRowColumn>
                        <TableRowColumn>{wagon.wagon}</TableRowColumn>
                        <TableRowColumn>{wagon.owner}</TableRowColumn>
                        <TableRowColumn>{wagon.manager}</TableRowColumn>
                        <TableRowColumn>{wagon.releaseDate}</TableRowColumn>
                        <TableRowColumn>{wagon.releaseStation}</TableRowColumn>
                        <TableRowColumn>{wagon.releaseRailroad}</TableRowColumn>
                        <TableRowColumn>{wagon.cargoType}</TableRowColumn>
                        <TableRowColumn>{wagon.weight}</TableRowColumn>
                        <TableRowColumn>{wagon.operationDate}</TableRowColumn>
                        <TableRowColumn>{wagon.currentStation}</TableRowColumn>
                        <TableRowColumn>{wagon.currentRailroad}</TableRowColumn>
                        <TableRowColumn>{wagon.operationCode}</TableRowColumn>
                        <TableRowColumn>{wagon.arrivalDate}</TableRowColumn>
                        <TableRowColumn>{wagon.arrivalStation}</TableRowColumn>
                        <TableRowColumn>{wagon.arrivalRailroad}</TableRowColumn>
                        <TableRowColumn>{wagon.cargoCode}</TableRowColumn>
                        <TableRowColumn>{wagon.repairDate}</TableRowColumn>
                        <TableRowColumn>{wagon.idleDays}</TableRowColumn>
                        <TableRowColumn>{wagon.wagonType}</TableRowColumn>
                        <TableRowColumn>{wagon.wagonModel}</TableRowColumn>
                        <TableRowColumn>{wagon.km}</TableRowColumn>
                        <TableRowColumn>{wagon.comment}</TableRowColumn>
                    </TableRow>
                )}
            </TableBody>
        </Table>)
};

export default WagonTablePresentation;