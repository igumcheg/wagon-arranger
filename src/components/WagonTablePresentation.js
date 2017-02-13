import React from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import WagonItem from './WagonItem';

const WagonTablePresentation = ({wagons}) => {
    console.log(JSON.stringify(wagons));
    return (
        <Table showCheckboxes={false}>
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
                <WagonItem key={wagon.id} {...wagon} />
                )}
            </TableBody>
        </Table>)
};

export default WagonTablePresentation;