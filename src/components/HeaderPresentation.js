import React from 'react';
import {Component} from 'react'
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import FileFileUpload from 'material-ui/svg-icons/file/file-upload';
import {loadDislocationFromFile} from "../util/util";
import {newWagonsAdded} from "../actions/actions";
import {connect} from 'react-redux';

class HeaderPresentation extends Component {
    render() {
        return (
            <AppBar title="Раума Карго"
                    iconElementLeft={
               <div> <input id="myInput" type="file" ref={(ref) => this.myInput = ref} style={{ display: 'none' }}
               onChange= {this.props.onChange}/>
                 <IconButton>
                    <FileFileUpload color={'white'}
                     onClick={(e) => this.myInput.click()} />

                 </IconButton>
                 </div>}
                    iconElementRight={ this.props.addLoaded ?
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
    addLoaded: state.status.addLoaded,
    addFilename: state.status.addFilename
});

export default HeaderPresentation = connect(mapStateToProps, mapDispatchToProps)(HeaderPresentation);

