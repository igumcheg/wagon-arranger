import React from 'react';
import {connect} from 'react-redux';
import DeleteFilterButton from "../components/DeleteFilterButton";
import {deleteFilter} from "../actions/actions";

const mapStateToProps = (state) => ({
    filters: state.filtering
});


const mapDispatchToProps = (dispatch) => ({
    onClick: () => dispatch(deleteFilter())
});

const DeleteFilterButtonContainer = connect(mapStateToProps, mapDispatchToProps)(DeleteFilterButton);
export default DeleteFilterButtonContainer;