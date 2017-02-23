import React from 'react';
import {wagonFieldChanged} from "../actions/actions";
import {connect} from "react-redux";

class CellInput extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);


    }

    handleChange(event) {
        let action = wagonFieldChanged(this.props.wagonNumber,
            this.props.isOld,
            this.props.fieldName,
            event.target.value);

        let dispatch = this.props.dispatch;
        dispatch(action);
    }



    render() {
        return <input style={{
    ...this.props.style,
    width: '100%',
    height: '100%',
    }}
                      type="text"
                      name="name"
                      defaultValue={this.props.value}
                      />
    }
}
export default connect()(CellInput);