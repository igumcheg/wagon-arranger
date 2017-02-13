import React, {Component} from "react";
import {connect} from "react-redux";
import CurrentDislocationForm from './components/CurrentDislocationForm';
import ModifiedDislocationForm from './components/ModifiedDislocationForm';
import WagonTable from './components/WagonTable';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
class App extends Component {

    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <CurrentDislocationForm />
                    <br></br>
                    <ModifiedDislocationForm/>
                    <WagonTable />
                </div>
            </MuiThemeProvider>
        );
    }
}

export default connect()(App);