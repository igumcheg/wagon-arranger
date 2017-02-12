import React from 'react';
import FileInputForm from "./FileInputForm";
import {connect} from "react-redux";
import {loadDislocationFromFile} from "../util/util";
import {wagonsReceived} from "../actions/actions";

const mapDispatchToProps = (dispatch) => ({
  onChange: (event) => {
    let file = event.target.files[0];
    loadDislocationFromFile(file, dispatch, wagonsReceived);
  }
});

const mapStateToProps = (state) => ({
  name: "Dislocation",
  accept: ".xlsx",
  placeholder: "Дислокация",
  className: "inputClass"
});

const CurrentDislocationForm = connect(mapStateToProps, mapDispatchToProps)(FileInputForm);

export default CurrentDislocationForm;