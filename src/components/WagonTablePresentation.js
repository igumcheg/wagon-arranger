import React from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow} from 'material-ui/Table';
import WagonRow from './WagonRow';
import {width} from "./WagonRow";
import {overallStyle} from "./WagonRow";
import MergeButton from "./MergeButton"

const WagonTablePresentation = ({wagons, addLoaded, onCellChange}) => {
    console.log(JSON.stringify(wagons));
    return (
        <div style={{width: "auto"}}>
            <Table showCheckboxes={false}>
                <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                    <TableRow>
                        <TableHeaderColumn style={{...overallStyle, ...width('2%')}}>N</TableHeaderColumn>
                        <TableHeaderColumn style={{...overallStyle, ...width('4%')}}>Вагон</TableHeaderColumn>
                        <TableHeaderColumn style={{...overallStyle, ...width('6%')}}>Собственник</TableHeaderColumn>
                        <TableHeaderColumn style={{...overallStyle, ...width('7%')}}>Распорядитель</TableHeaderColumn>
                        <TableHeaderColumn style={{...overallStyle, ...width('5%')}}>Дата отправки</TableHeaderColumn>
                        <TableHeaderColumn style={{...overallStyle, ...width('7%')}}>Станция отправления</TableHeaderColumn>
                        <TableHeaderColumn style={{...overallStyle, ...width('6%')}}>ЖД Отправления</TableHeaderColumn>
                        <TableHeaderColumn style={{...overallStyle, ...width('3%')}}>Тип груза</TableHeaderColumn>
                        <TableHeaderColumn style={{...overallStyle, ...width('2%')}}>Вес</TableHeaderColumn>
                        <TableHeaderColumn style={{...overallStyle, ...width('5%')}}>Дата операции</TableHeaderColumn>
                        <TableHeaderColumn style={{...overallStyle, ...width('7%')}}>Текущая станция</TableHeaderColumn>
                        <TableHeaderColumn style={{...overallStyle, ...width('4%')}}>ЖД текущая</TableHeaderColumn>
                        <TableHeaderColumn style={{...overallStyle, ...width('5%')}}>Код операции</TableHeaderColumn>
                        <TableHeaderColumn style={{...overallStyle, ...width('5%')}}>Дата прибытия</TableHeaderColumn>
                        <TableHeaderColumn style={{...overallStyle, ...width('7%')}}>Станция назначения</TableHeaderColumn>
                        <TableHeaderColumn style={{...overallStyle, ...width('4%')}}>ЖД назначения</TableHeaderColumn>
                        <TableHeaderColumn style={{...overallStyle, ...width('4%')}}>Код груза</TableHeaderColumn>
                        <TableHeaderColumn style={{...overallStyle, ...width('5%')}}>Дата планового ремонта</TableHeaderColumn>
                        <TableHeaderColumn style={{...overallStyle, ...width('6%')}}>Количество дней простоя</TableHeaderColumn>
                        <TableHeaderColumn style={{...overallStyle, ...width('4%')}}>Тип вагона</TableHeaderColumn>
                        <TableHeaderColumn style={{...overallStyle, ...width('4%')}}>Модель</TableHeaderColumn>
                        <TableHeaderColumn style={{...overallStyle, ...width('3%')}}>Км</TableHeaderColumn>
                        <TableHeaderColumn style={{...overallStyle, ...width('5%')}}>Комментарий</TableHeaderColumn>
                    </TableRow>
                </TableHeader>
            </Table>
            {Object.keys(wagons).sort().map((number) =>
                <Table key={number} showCheckboxes={false}>
                    <TableBody >
                        <WagonRow onCellChange={onCellChange} isOld={true} {...wagons[number].old} />
                        {wagons[number].updated ?
                            <WagonRow isOld={false} onCellChange={onCellChange} {...wagons[number].updated} />
                            : null}
                    </TableBody>
                </Table>
            )
            }

            {addLoaded ? <MergeButton /> : null}
        </div>)
};

export default WagonTablePresentation;