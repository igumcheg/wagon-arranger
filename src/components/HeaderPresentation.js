import React from 'react';
import AddDislocationForm from "./AddDislocationForm";

let onClick = () => {
    console.log("clicked");
};

const HeaderPresentation = ({
    mainLoaded,
    addLoaded,
    mainFilename,
    addFilename,
}) => (
    <div>
        {mainLoaded ?
            <div>
                Загружен основной файл: {mainFilename}
                <AddDislocationForm />
            </div>
            : null}
        {addLoaded ?
            <div>
                Загружен дополнительный файл: {addFilename}
            </div>
            : null}
    </div>
);

export default HeaderPresentation;

