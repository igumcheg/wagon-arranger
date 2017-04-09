import React from 'react';
import {connect} from 'react-redux';
import InputFileName from "../components/InputFileName";
import {fileNameChanged} from "../actions/actions";

const mapStateToProps = (state) => ({
         input: '',
        filename: state.status.filename
});


const mapDispatchToProps = (dispatch) => ({
    handleChange: (event) => dispatch(fileNameChanged(event.target.value))
});

const InputFileNameContainer = connect(mapStateToProps, mapDispatchToProps)(InputFileName);
export default InputFileNameContainer;

