import React from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import headers from "../util/headers";


const HeaderCellContent = ({
    values,
    parameterName,
    onHeaderClick,
    onFilterSelect
}) => (<div>
<div style={{height: '30px',padding:'7px 0px'}} onClick={()=>onHeaderClick(parameterName)}>{headers[parameterName]}</div>
    {values.length > 1 ?
<DropDownMenu style={{width:'100%'}}
labelStyle={{padding: "0px 0px 5px 0px",
    margin: "0px",
    font: '12pt sans-serif',
    fontSize: "10px",
    color: "black",
    lineHeight: "12px",
    whiteSpace: "normal",
    textOverflow: "ellipsis",
    wordWrap: "break-word",
    overflow: "hidden",
    display:'block'
}}
 onChange = {(event, key, value)=>onFilterSelect(value, parameterName)}
underlineStyle={{border: "none"}}

iconStyle={{position: 'static',
    fill: '#00bcd4',
    border:'solid #adb5b5 1px',
    backgroundColor: '#e8eaea',
    display:'inline-block',
    widths: '40px',
    height: '15px'

}}
value={values[0]}>
    {values.map((value, index) =>
    <MenuItem key={index} label=" " value={value} primaryText={value}/>
)}
</DropDownMenu> : null}
    </div>
);

export default HeaderCellContent;