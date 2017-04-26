import React from 'react';
import {Component} from 'react'
import AppBar from 'material-ui/AppBar';
import {newWagonsAdded} from "../actions/actions";
import {connect} from 'react-redux';
import DeleteFilterButtonContainer from '../containers/DeleteFilterButtonContainer'


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


class HeaderPresentation extends Component {

    render() {
        return (
            <AppBar title="Раума Карго"
                    iconElementLeft={<div>
                    </div>}
                    iconElementRight={ this.props.loaded ?
                <div><h1 style={loadingFileStyle}>
                    Загружен файл: {this.props.addFilename}
                </h1>
                    <DeleteFilterButtonContainer/>
                </div>
             : null}
            />
        );
    }

}

const mapDispatchToProps = (dispatch) => ({
    onChange: (event) => {
        let file = event.target.files[0];
        loadDislocationFromFile(file, dispatch, newWagonsAdded);
    }
});

const mapStateToProps = (state) => ({
    loaded: state.status.loaded,
    addFilename: state.status.addFilename
});

export default HeaderPresentation = connect(mapStateToProps, mapDispatchToProps)(HeaderPresentation);

