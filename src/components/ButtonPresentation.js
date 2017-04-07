import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const ButtonPresentation = ({onClick, label, wagons, filename, fullWidth, primary, disabled}) => (
    <div>
        <RaisedButton
            label={label}
            fullWidth={fullWidth}
            primary={primary}
            disabled={disabled}
            onTouchTap={()=>onClick(wagons, filename)}/>
    </div>
);

export default ButtonPresentation;