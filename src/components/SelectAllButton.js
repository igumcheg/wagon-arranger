import React from 'react';
import {Component} from 'react';
import Checkbox from 'material-ui/Checkbox'



const SelectAllButton = ({onCheck}) => (
    <Checkbox onCheck={onCheck} />
);


export default SelectAllButton;