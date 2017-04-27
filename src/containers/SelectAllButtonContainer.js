import React from 'react';
import {connect} from 'react-redux';
import SelectAllButton from "../components/SelectAllButton";
import {selectAll} from "../actions/actions";
import {deselectAll} from "../actions/actions";


const mapDispatchToProps = (dispatch) => ({
    onCheck: (event, isInputChecked) => {
        console.log(isInputChecked);
        dispatch(isInputChecked ? selectAll() : deselectAll())
    }
});

const SelectAllButtonContainer = connect(null, mapDispatchToProps)(SelectAllButton);
export default SelectAllButtonContainer;
