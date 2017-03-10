import React from 'react';
import {connect} from 'react-redux';
import ButtonPresentation from "../components/ButtonPresentation";

const mapStateToProps = (state, ownProps) => ({
    float: 'right',
    label: 'Сохранить файл',
    disabled: ownProps.disabled
});

const mapDispatchToProps = (dispatch) => ({
    onClick: () => console.log('ololo')
});

const SaveButton = connect(mapStateToProps, mapDispatchToProps)(ButtonPresentation);
export default SaveButton;