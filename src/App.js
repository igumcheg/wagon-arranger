import React, {Component} from "react";
import {connect} from "react-redux";
import 'ag-grid-root/dist/styles/ag-grid.css';
import 'ag-grid-root/dist/styles/ag-grid.css';
import 'ag-grid-root/dist/styles/theme-material.css';
import WagonTable from './components/WagonTable';
import CurrentDislocationForm from './components/CurrentDislocationForm';

class App extends Component {

  render() {
    return (
      <div>
       <CurrentDislocationForm />
        <div className="ag-material">
          <div style={{height: '800px'}}>
            <WagonTable />
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(App);