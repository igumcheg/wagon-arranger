export const wagonsReceived = (filename, wagons) => ({
  type: "RECEIVE_WAGONS",
  wagons,
  filename
});

export const newWagonsAdded = (filename, wagons) => ({
  type: "ADD_NEW_WAGONS",
  wagons,
  filename
});

export const wagonFieldChanged = (wagonNumber, isOld, fieldName, newValue) => ({
  type: "CHANGE_WAGON_FIELD",
  wagonNumber,
  isOld,
  fieldName,
  newValue
});

export const mergeWagons = () => ({
  type: "MERGE_WAGONS"
});

export const saveWagonsToFile = (filename, wagons) => ({
  type: "SAVE_WAGONS",
  wagons,
  filename
});