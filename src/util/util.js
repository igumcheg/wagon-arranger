import {selectedWagonsSent} from "../actions/actions";
export const loadDislocationFromFile = (file, dispatch, createAction) => {
    let formData = new FormData();
    formData.append("file", file);
    fetch('http://localhost:4567/parse', {
        method: 'POST',
        body: formData
    }).then(response => response.json())
        .then(function (wagons) {
                dispatch(createAction(file.name, wagons));
            }
        );
};

export const saveFile = (wagons, filename, dispatch) => {
    let formData = new FormData();
    formData.append("json", JSON.stringify({filename, wagons}));
    fetch('http://localhost:4567', {
        method: 'POST',
        body: formData
    }).then(function (wagons) {
            dispatch(selectedWagonsSent({filename, wagons}));
        }
    );
};
