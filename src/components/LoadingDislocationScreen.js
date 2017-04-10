import React from 'react';
import {Component} from 'react';
import LoadingDislocation from './LoadingDislocation';

const style = {
    zIndex: 2,
    position: 'absolute',
    width: '100%',
    textAlign: 'center',
    minHeight: '100%',
    backgroundColor: '#bcbcbc',
    overflow: 'auto'
};

const childStyle = {
    borderRadius: '10px',
    border: '1px solid #606060',
    margin: '200px',
    background: 'white',
    display: 'inline-block',
    padding: '100px',
    width: '200px'
};

const LoadingDislocationScreen = () => (
    <div style={style}>
        <div style={childStyle}><LoadingDislocation /></div>
    </div> : null
);

export default LoadingDislocationScreen;

