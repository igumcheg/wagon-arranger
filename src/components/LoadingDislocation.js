import React from 'react';
import {Component} from 'react'
import FileFileDownload from 'material-ui/svg-icons/file/file-download';
import IconButton from 'material-ui/IconButton';
import {loadDislocationFromFile} from "../util/util";
import {newWagonsAdded} from "../actions/actions";
import {connect} from "react-redux";
import {blue500} from 'material-ui/styles/colors';


class LoadingDislocation extends Component {
    render() {
        return <div>
            <div style={{fontFamily: 'Tahoma, Arial, sans-serif', color: '#64676b', fontSize: "18px"}}>
                Загрузите дислокацию
            </div>
            <div><input id="myInput" type="file" ref={(ref) => this.myInput = ref} style={{ display: 'none' }}
                        onChange={this.props.onChange}/>
                <IconButton iconStyle={{width: '60', height: '60'}} style={{width: '60', height: '60', padding: '0'}}>
                    <FileFileDownload onClick={(e) => this.myInput.click()}/>
                </IconButton>
            </div>
        </div>
    }
}

const mapDispatchToProps = (dispatch) => ({
    onChange: (event) => {
        let file = event.target.files[0];
        loadDislocationFromFile(file, dispatch, newWagonsAdded);
    }
});

export default connect(null, mapDispatchToProps)(LoadingDislocation);
