import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Alert} from "react-bootstrap";

class Success extends Component {
    state = {
        show: true
    };

    handleClose = ()=>{
        this.setState({
            show:false
        })
    };

    render() {
        return (

            this.props.message_bus.type && this.state.show? (
                <Alert onClose={this.handleClose} variant={this.props.message_bus.type} dismissible={true}>
                    {this.props.message_bus.message}
                </Alert>
            ) : ''
        );
    }
}

const MapStateToProps = state => {
    return {
        message_bus: state.message_bus,
    };
};
export default connect(MapStateToProps)(Success);
