import {selectedWagonsSent} from "../actions/actions";
export const loadDislocationFromFile = (file, dispatch, createAction) => {
  let formData = new FormData();
  formData.append("file", figitle);
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
    if (filename && filename != "" ) {
        let formData = new FormData();
        formData.append("filename", filename);
        formData.append("wagons", JSON.stringify(wagons));
        fetch('http://localhost:4567', {
            method: 'POST',
            body: formData
        }).then(function (wagons) {
                dispatch(selectedWagonsSent({filename, wagons}));
            }
        );
    }
};
