import React from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow} from 'material-ui/Table';
import WagonRow from './WagonRow';
import {width} from "./WagonRow";
import {overallStyle} from "./WagonRow";

const WagonTablePresentation = ({wagons}) => {
    console.log(JSON.stringify(wagons));
    return (
        <div style={{width: "auto"}}>
            <Table showCheckboxes={false}>
                <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                    <TableRow>
                        <TableHeaderColumn style={{...overallStyle, ...width('2%')}}>N</TableHeaderColumn>
                        <TableHeaderColumn style={{...overallStyle, ...width('5%')}}>Вагон</TableHeaderColumn>
                        <TableHeaderColumn style={{...overallStyle, ...width('7%')}}>Собственник</TableHeaderColumn>
                        <TableHeaderColumn style={{...overallStyle, ...width('7%')}}>Распорядитель</TableHeaderColumn>
                        <TableHeaderColumn style={{...overallStyle, ...width('5%')}}>Дата отправки</TableHeaderColumn>
                        <TableHeaderColumn style={{...overallStyle, ...width('10%')}}>Станция отправления</TableHeaderColumn>
                        <TableHeaderColumn style={{...overallStyle, ...width('6%')}}>ЖД Отправления</TableHeaderColumn>
                        <TableHeaderColumn style={{...overallStyle, ...width('5%')}}>Тип груза</TableHeaderColumn>
                        <TableHeaderColumn style={{...overallStyle, ...width('4%')}}>Вес</TableHeaderColumn>
                        <TableHeaderColumn style={{...overallStyle, ...width('5%')}}>Дата операции</TableHeaderColumn>
                        <TableHeaderColumn style={{...overallStyle, ...width('7%')}}>Текущая станция</TableHeaderColumn>
                        <TableHeaderColumn style={{...overallStyle}}>ЖД текущая</TableHeaderColumn>
                        <TableHeaderColumn style={{...overallStyle}}>Код операции</TableHeaderColumn>
                        <TableHeaderColumn style={{...overallStyle}}>Дата прибытия</TableHeaderColumn>
                        <TableHeaderColumn style={{...overallStyle}}>Станция назначения</TableHeaderColumn>
                        <TableHeaderColumn style={{...overallStyle}}>ЖД назначения</TableHeaderColumn>
                        <TableHeaderColumn style={{...overallStyle}}>Код груза</TableHeaderColumn>
                        <TableHeaderColumn style={{...overallStyle}}>Дата планового ремонта</TableHeaderColumn>
                        <TableHeaderColumn style={{...overallStyle}}>Количество дней простоя</TableHeaderColumn>
                        <TableHeaderColumn style={{...overallStyle}}>Тип вагона</TableHeaderColumn>
                        <TableHeaderColumn style={{...overallStyle}}>Модель</TableHeaderColumn>
                        <TableHeaderColumn style={{...overallStyle}}>Км</TableHeaderColumn>
                        <TableHeaderColumn style={{...overallStyle}}>Комментарий</TableHeaderColumn>
                    </TableRow>
                </TableHeader>
            </Table>
            {Object.keys(wagons).sort().map((number) =>
                <Table key={number} showCheckboxes={false}>
                    <TableBody >
                        <WagonRow isOld={true} {...wagons[number].old} />
                        {wagons[number].updated ? <WagonRow isOld={false} {...wagons[number].updated} /> : null}
                    </TableBody>
                </Table>
            )
            }
        </div>)
};

export default WagonTablePresentation;