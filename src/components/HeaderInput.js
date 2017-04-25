import React from 'react';
import {wagonFieldChanged} from "../actions/actions";
import {connect} from "react-redux";

class HeaderInput extends React.Component {
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

        return <textArea
            key={this.props.wagonNumber + this.props.fieldName}
            onChange={this.handleChange}
            style={{
        ...this.props.style,
        width: '100%',
        height: 'auto',
        resize: 'none',
        backgroundColor: 'transparent'
      }}
            type="text"
            name="name"
            defaultValue={this.props.value}
        />
    }
}

export default connect()(HeaderInput);