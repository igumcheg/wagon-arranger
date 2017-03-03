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

export const wagonsToFileSaved = (filename) => ({
    type: "SAVE_WAGONS",
    filename
});

export function fetchWagons(dispatch) {
    return function (dispatch) {
        return fetch('http://localhost:4567')
            .then(response => response.json())
            .then(function (wagons) {
                    dispatch(wagonsReceived('ololo', wagons));
                }
            );
    }
}