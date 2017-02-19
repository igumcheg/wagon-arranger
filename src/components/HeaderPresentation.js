import React from 'react';
import AddDislocationForm from "./AddDislocationForm";
import MainDislocationForm from "./MainDislocationForm";

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
            : <MainDislocationForm/>}
        {addLoaded ?
            <div>
                Загружен дополнительный файл: {addFilename}
            </div>
            : null}
    </div>
);

export default HeaderPresentation;

