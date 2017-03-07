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
