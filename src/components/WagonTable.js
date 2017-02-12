import React, {Component} from "react"
import {connect} from "react-redux";
import {AgGridReact} from 'ag-grid-react';

const mapDispatchToProps = (dispatch) =>({
  // onCellClick: dispatch({
  //   type: "CELL_CLICKED"
  // })
});

const mapStateToProps = (state) => {
  return {
    rowData: state.wagons,
    columnDefs: [
      {headerName: 'N', field: 'number', width: 50},
      {headerName: 'Вагон', field: 'wagon'},
      {headerName: 'Собственник', field: 'owner'},
      {headerName: 'Распорядитель', field: 'manager'},
      {headerName: 'Дата отправки', field: 'releaseDate'},
      {headerName: 'Станция отправления', field: 'releaseStation'},
      {headerName: 'ЖД Отправления', field: 'releaseRailroad'},
      {headerName: 'Тип груза', field: 'cargoType'},
      {headerName: 'Вес', field: 'weight'},
      {headerName: 'Дата операции', field: 'operationDate'},
      {headerName: 'Текущая станция', field: 'currentStation'},
      {headerName: 'ЖД текущая', field: 'currentRailroad'},
      {headerName: 'Код операции', field: 'operationCode'},
      {headerName: 'Дата прибытия', field: 'arrivalDate'},
      {headerName: 'Станция назначения', field: 'arrivalStation'},
      {headerName: 'ЖД назначения', field: 'arrivalRailroad'},
      {headerName: 'Код груза', field: 'cargoCode'},
      {headerName: 'Дата планового ремонта', field: 'repairDate'},
      {headerName: 'Количество дней простоя', field: 'idleDays'},
      {headerName: 'Тип вагона', field: 'wagonType'},
      {headerName: 'Модель', field: 'wagonModel'},
      {headerName: 'Км', field: 'km'},
      {headerName: 'Комментарий', field: 'comment'}
    ],
    rowHeight: "48",
    enableSorting: "true",
    enableFilter: "true"
  }
};

const WagonTable = connect(mapStateToProps, mapDispatchToProps)(AgGridReact);

export default WagonTable;


