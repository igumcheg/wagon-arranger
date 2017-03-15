import React from 'react';
import {connect} from 'react-redux';
import ButtonPresentation from "../components/ButtonPresentation";
import {saveFile} from "../util/util";

const mapStateToProps = (state, ownProps) => ({
  float: 'right',
  label: 'Сохранить файл',
  disabled: ownProps.disabled,
  wagons: state.wagons
});

const mapDispatchToProps = (dispatch) => ({
  onClick: (wagons) => saveFile(wagons.map((wagon)=>(wagon.old)))
});

const SaveButton = connect(mapStateToProps, mapDispatchToProps)(ButtonPresentation);
export default SaveButton;