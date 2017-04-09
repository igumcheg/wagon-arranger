import React, {Component} from "react";
import {connect} from "react-redux";
import Header from './containers/Header';
import LoadingScreenContainer from './containers/LoadingScreenContainer';
import WagonTable from './containers/WagonTable';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {saveFile} from "./util/util";
import {closeFileNameInput} from "./actions/actions";

const mapStateToProps = (state) => {
    return {
        label: 'Создать',
        showFileNameInput: state.status.showFileNameInput,
        filename: state.status.filename,
        selectedWagons: state.wagons.filter((wagon)=> wagon.selected).map((wagon, index)=>({
            ...wagon,
            number: index + 1
        })),
        fullWidth: false,
        primary: true
    }
};

class App extends Component {

    componentDidUpdate() {
        this.handleKeyUp = this.handleKeyUp.bind(this);
        window.addEventListener('keyup', this.handleKeyUp);
    }


    handleKeyUp(e) {
        if (this.props.showFileNameInput) {
            switch (e.key) {
                case 'Escape':
                case 'Esc':
                    this.props.dispatch(closeFileNameInput());
                    break;
                case 'Enter':
                    saveFile(this.props.selectedWagons, this.props.filename, this.props.dispatch);
                    break;
                default:
                    break;
            }
        }
    }

    render() {
        return (
            <MuiThemeProvider>
                <div style={{position: 'absolute'}}>
                    <LoadingScreenContainer />
                    <Header/>
                    <WagonTable />
                </div>
            </MuiThemeProvider>
        );
    }
}

export default connect(mapStateToProps)(App);