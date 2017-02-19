import React, {Component} from "react";
import {connect} from "react-redux";
import Header from './components/Header';
import WagonTable from './components/WagonTable';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {

    render() {
        return (
            <MuiThemeProvider>
                <div>
                   <Header/>
                    <WagonTable />
                </div>
            </MuiThemeProvider>
        );
    }
}

export default connect()(App);