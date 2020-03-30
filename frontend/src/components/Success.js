import React, {Component} from 'react';
import {connect} from 'react-redux';

class Success extends Component {
  render() {
    return (
      this.props.message_bus.type ? (
        <div
          className={`alert alert-${this.props.message_bus.type} alert-dismissible fade show`}
          role="alert">
          {this.props.message_bus.message}
          <button type="button" className="close" data-dismiss="alert"
                  aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      ) : ''
    );
  }
}

const MapStateToProps = state =>{
    return {
      message_bus: state.message_bus,
    };
};
export default connect(MapStateToProps) (Success);
