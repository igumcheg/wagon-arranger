import React, {Component} from "react";
import {connect} from "react-redux";
import Header from './containers/Header';
import LoadingScreenContainer from './containers/LoadingScreenContainer';
import WagonTable from './containers/WagonTable';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {

    componentDidMount() {
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

export default connect()(App);