import React from 'react';
import {connect} from 'react-redux';
import {mergeWagons} from "../actions/actions";
import ButtonPresentation from "./ButtonPresentation";

const mapStateToProps = (state, ownProps) => ({
    float: 'left',
    label: 'Соединить',
    disabled: ownProps.disabled
});

const mapDispatchToProps = (dispatch) => ({
    onClick: () => dispatch(mergeWagons())
});

const MergeButton = connect(mapStateToProps, mapDispatchToProps)(ButtonPresentation);
export default MergeButton;