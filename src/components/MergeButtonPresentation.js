import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const MergeButtonPresentation = ({onClick}) => (
    <RaisedButton
        label={'Соединить'}
        fullWidth={true}
        primary={true}
        onTouchTap={onClick}/>
);

export default MergeButtonPresentation;