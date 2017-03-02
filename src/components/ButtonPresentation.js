import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const ButtonPresentation = ({onClick, label, float, disabled}) => (
    <div style={{width:'49.85%', float, border: '1px solid white'}}>
    <RaisedButton
        label={label}
        fullWidth={true}
        primary={true}
        onTouchTap={onClick}
        disabled={disabled}/>
    </div>
);

export default ButtonPresentation;