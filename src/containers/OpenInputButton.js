import React from 'react';
import {connect} from 'react-redux';
import ButtonPresentation from "../components/ButtonPresentation";
import {openFileNameInput} from "../actions/actions";

const mapStateToProps = (state, ownProps) => ({
  label: 'Создать отчет',
  disabled: ownProps.disabled,
  wagons: state.wagons,
  fullWidth: true,
  primary: true
});

const mapDispatchToProps = (dispatch) => ({
  onClick: () => dispatch(openFileNameInput())
});

const OpenInputButton = connect(mapStateToProps, mapDispatchToProps)(ButtonPresentation);
export default OpenInputButton;