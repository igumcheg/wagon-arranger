import React from 'react';
import {Component} from 'react'
import IconButton from 'material-ui/IconButton';
import ActionHighlightOff from "material-ui/svg-icons/action/highlight-off";

const DeleteFilterButton = ({ onClick
}) => (
    <IconButton tooltip="Удалить фильтр"

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

        <ActionHighlightOff onTouchTap={onClick} />
    </IconButton>
);
export default DeleteFilterButton;