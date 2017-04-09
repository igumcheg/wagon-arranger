import React from 'react';
import {connect} from 'react-redux';
import ButtonPresentation from "../components/ButtonPresentation";
import {saveFile} from "../util/util";

const mapStateToProps = (state, ownProps) => {
    return {
        label: 'Создать',
        disabled: ownProps.disabled,
        filename: state.status.filename,
        wagons: state.wagons.filter((wagon)=> wagon.selected).map((wagon,index)=>({...wagon, number: index+1})),
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