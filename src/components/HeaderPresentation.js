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
            <AppBar title="Раума Карго" iconElementLeft={
               <div> <input id="myInput" type="file" ref={(ref) => this.myInput = ref} style={{ display: 'none' }}
               onChange= {this.props.onChange}/>
                 <IconButton>
                    <FileFileUpload color={'white'}
                     onClick={(e) => this.myInput.click()} />

                 </IconButton>
                 </div>}
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

export default HeaderPresentation = connect(null, mapDispatchToProps)(HeaderPresentation);

