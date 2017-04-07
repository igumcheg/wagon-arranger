import React from 'react';
import {connect} from 'react-redux';
import ButtonPresentation from "../components/ButtonPresentation";
import {saveFile} from "../util/util";

const mapStateToProps = (state) => {
    console.log(JSON.stringify(state.wagons[0]));
    return {
        label: 'Создать',
        filename: state.status.filename,
        wagons: state.wagons.filter((wagon)=> wagon.selected),
        fullWidth: false,
        primary: true
    }
};

const mapDispatchToProps = (dispatch) => ({
    onClick: (wagons, filename) => {
       saveFile(wagons,filename, dispatch)
    }
});

const ReportButton = connect(mapStateToProps, mapDispatchToProps)(ButtonPresentation);
export default ReportButton;