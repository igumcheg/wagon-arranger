import React from 'react';
import {connect} from 'react-redux';
import ButtonPresentation from "../components/ButtonPresentation";
import {closeFileNameInput} from "../actions/actions";

const mapStateToProps = (state) => {
    return {
        label: 'Отмена',
        filename: state.status.filename,
        wagons: state.wagons.filter((wagon)=> wagon.selected),
        fullWidth: false,
        primary: false
    }
};

const mapDispatchToProps = (dispatch) => ({
    onClick: () => dispatch(closeFileNameInput())
});

const CancelButtonContainer = connect(mapStateToProps, mapDispatchToProps)(ButtonPresentation);
export default CancelButtonContainer;
