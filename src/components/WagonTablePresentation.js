import React from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import WagonRow from './WagonRow';

const WagonTablePresentation = ({wagons}) => {
    console.log(JSON.stringify(wagons));
    return (
        <div>
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
            </Table>
            {Object.keys(wagons).sort().map((number) =>
                <Table key={number} showCheckboxes={false}>
                    <TableBody >
                        <WagonRow {...wagons[number].old} />
                        {wagons[number].updated ? <WagonRow {...wagons[number].updated} /> : null}
                    </TableBody>
                </Table>
            )
            }
        </div>)
};

export default WagonTablePresentation;