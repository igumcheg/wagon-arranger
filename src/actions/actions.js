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

export const openFileNameInput = (filename) => ({
    type: "OPEN_FILENAME_INPUT",
    filename
});

export const closeFileNameInput = (filename) => ({
    type: "CLOSE_FILENAME_INPUT",
    filename
});

export const fileNameChanged = (filename) => ({
    type: "CHANGE_FILENAME",
    filename
});

export const selectWagons = (wagonNumbers) => ({
    type: "SELECT_WAGONS",
    wagonNumbers
});

export const selectedWagonsSent = (filename, wagons) => ({
    type: "SENT_SELECTED_WAGONS",
    filename,
    wagons
});

