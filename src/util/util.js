
import * as XLSX from "xlsx";
export const getChangedKey = (currentKey)=> {
  switch (currentKey) {
    case 'N':
      return 'number';

    case 'Вагон':
    case 'Номер вагона':

      return 'wagon';

    case 'Собственник':

      return 'owner';

    case 'Распорядитель':
    case 'Текущий клиент по заявке':

      return 'manager';

    case 'Дата отправки':

      return 'releaseDate';

    case 'Станция опер.':
    case 'Станция отправления':

      return 'releaseStation';

    case 'Дор. опер.':
    case 'ЖДОтправления':

      return 'releaseRailroad';

    case 'Тип груза':
    case 'Груз':

      return 'cargoType';

    case 'Вес':

      return 'weight';

    case 'Дата операции':
    case'Дата/время опер.':

      return 'operationDate';

    case 'Текущая станция':
    case 'Текущая ст. отпр. по заявке':

      return 'currentStation';

    case 'ЖД текущая':

      return 'currentRailroad';

    case 'Код операции':
    case 'Опер.':

      return 'operationCode';

    case 'Дата прибытия':

      return 'arrivalDate';

    case 'Станция назначения':
    case 'Ст. назн.':

      return 'arrivalStation';

    case 'ЖДНазначения':
    case 'Дор. назн.':

      return 'arrivalRailroad';

    case 'Код груза':
    case 'Код груза ЕТСНГ':

      return 'cargoCode';

    case 'Дата планового ремонта':

      return 'repairDate';

    case 'Количество дней простоя':
    case 'Простой на ст. назн.':

      return 'idleDays';

    case 'Тип вагона':

      return 'wagonType';

    case 'Модель':

      return 'wagonModel';

    case 'Км':
    case 'Ост. расстояние':

      return 'km';

    case 'Комментарий':

      return 'comment'
  }
};

export const changeKey = (obj, oldKey, newKey) => {
  let value = obj[oldKey];
  delete obj[oldKey];
  obj[newKey] = value;
};

export const loadDislocationFromFile = (file, dispatch, createAction) => {
  var reader = new FileReader();
  reader.onload = function (e) {
    var data = e.target.result;
    let workbook = XLSX.read(data, {type: 'binary'});
    workbook.SheetNames.forEach(function (sheetName) {
      // Here is your object
      var wagonArr = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheetName]);
      wagonArr.map(function (wagon) {
        for (var key in wagon) {
          let newKey = getChangedKey(key);
          changeKey(wagon, key, newKey)
        }
      });
      dispatch(createAction(wagonArr))
    });

  };
  reader.readAsBinaryString(file);
};