import React from 'react';
import {Component} from 'react'
import ReportButton from '../containers/ReportButton'
import CancelButtonContainer from '../containers/CancelButtonContainer'

import TextField from 'material-ui/TextField';

const InputFileName = ({handleChange, handleClick}) => (

        <div>
            <TextField hintText="Введите название отчета"  onChange={ handleChange }/>
            <div style={{width: '45%', float:'left',  textAlign: 'center'}}>
                <CancelButtonContainer/>
            </div>
            <div style={{width: '45%', marginLeft: '10px', float:'left'}}>
                <ReportButton />
            </div>
        </div>

);

export default InputFileName;
