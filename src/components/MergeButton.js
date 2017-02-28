import React from 'react';
import {connect} from 'react-redux';
import {mergeWagons} from "../actions/actions";
import MergeButtonPresentation from "./MergeButtonPresentation";

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
    onClick: () => dispatch(mergeWagons())
});

const MergeButton = connect(mapStateToProps, mapDispatchToProps)(MergeButtonPresentation);
export default MergeButton;