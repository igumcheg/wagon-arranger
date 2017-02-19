import React from 'react';
import FileInputForm from "./FileInputForm";
import {connect} from "react-redux";
import {loadDislocationFromFile} from "../util/util";
import {newWagonsAdded} from "../actions/actions";

const mapDispatchToProps = (dispatch) => ({
    onChange: (event) => {
        let file = event.target.files[0];
        loadDislocationFromFile(file, dispatch, newWagonsAdded);
    }
});

const mapStateToProps = (state) => ({
    name: "Dislocation",
    accept: ".xlsx",
    placeholder: "Доп файл",
    className: "inputClass"
});

const AddDislocationForm = connect(mapStateToProps, mapDispatchToProps)(FileInputForm);

export default AddDislocationForm;