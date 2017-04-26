import React from 'react';
import {connect} from 'react-redux';
import DeleteFilterButton from "../components/DeleteFilterButton";
import {deleteFilter} from "../actions/actions";



const mapDispatchToProps = (dispatch) => ({
    onClick: () => dispatch(deleteFilter())
});

const DeleteFilterButtonContainer = connect(null, mapDispatchToProps)(DeleteFilterButton);
export default DeleteFilterButtonContainer;