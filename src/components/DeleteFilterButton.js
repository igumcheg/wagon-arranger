import React from 'react';
import {Component} from 'react'
import IconButton from 'material-ui/IconButton';
import ActionHighlightOff from "material-ui/svg-icons/action/highlight-off";
import headers from "../util/headers";

const loadingFileStyle = {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    margin: '0px',
    paddingTop: '0px',
    letterSpacing: '0px',
    fontSize: '18px',
    fontWeight: '400',
    color: 'rgb(255, 255, 255)',
    lineHeight: '20px',
    flex: '1 1 0%'
};

const DeleteFilterButton = ({
    onClick,
    filters
}) => ( filters.length > 0 ? <div>
        <h2 style={{...loadingFileStyle, fontSize: '12px',float:'left'}}>
            Применены фильтры: {filters.map((filter)=>
            headers[filter.parameter] +" - " + filter.value + '; '
            )}
        </h2>

        <IconButton tooltip="Удалить фильтры"

                    iconStyle={{width: '18px',
                                         height: '18px',
                                         color: 'white',
                                         padding: '0px 0px 0px 2px',
                                         float: 'left'
                                        }}

                    style={{width: '18px',
                                           height: '18px',
                                           padding: '0px',
                                           }}>

            <ActionHighlightOff onTouchTap={onClick}/>
        </IconButton>
    </div> : null
);
export default DeleteFilterButton;