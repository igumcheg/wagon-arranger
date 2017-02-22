import React from 'react';

const CellInput = ({
    style,
    value
}) =>(
    <input style={{
    ...style,
    width: '100%',
    height: '100%',
    }}
           type="text"
           name="name"
           defaultValue={value}/>
);

export default CellInput;