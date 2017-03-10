import React, {Component} from "react";
import {connect} from "react-redux";
import Header from './containers/Header';
import WagonTable from './containers/WagonTable';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {fetchWagons} from "./actions/actions";

class App extends Component {

    componentDidMount() {
       this.props.dispatch(fetchWagons());
    }
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