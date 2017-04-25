import React from 'react';
import {Component} from 'react'
import AppBar from 'material-ui/AppBar';
import {loadDislocationFromFile} from "../util/util";
import {newWagonsAdded} from "../actions/actions";
import {connect} from 'react-redux';

class HeaderPresentation extends Component {
    render() {
        return (
            <AppBar title="Раума Карго"
                    iconElementLeft={<div>
                    </div>}
                    iconElementRight={ this.props.loaded ?
                <div><h1 style={{whiteSpace: 'nowrap',
                                     overflow: 'hidden',
                                     textOverflow: 'ellipsis',
                                     margin: '0px',
                                     paddingTop: '0px',
                                     letterSpacing: '0px',
                                     fontSize: '18px',
                                     fontWeight: '400',
                                     color: 'rgb(255, 255, 255)',
                                     height: '64px',
                                     lineHeight: '64px',
                                     flex: '1 1 0%'
                                    }}>
                    Загружен файл: {this.props.addFilename}
                </h1>
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

