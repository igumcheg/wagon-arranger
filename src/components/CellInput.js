import React from 'react';

const CellInput = ({
  value
}) =>(
    <input style={{width: '100%', height: '100%'}} type="text" name="name" defaultValue={value}/>
);

export default CellInput;