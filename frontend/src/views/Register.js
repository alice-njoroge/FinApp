import React, {Component} from 'react';
import {connect} from 'react-redux';
import {DISABLE_LOADING, DISPLAY_MESSAGE, ENABLE_LOADING} from '../ActionTypes';

class Register extends Component {
    state = {
        user: {
            name: null,
            email: null,
            password: null,
            confirm_password: null

        }
    };
    handleChange = (e) => {
        let user = this.state.user;
        user[e.target.id] = e.target.value;
        this.setState({
            user
        });

    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.enableLoading();
        this.props.display_message('success', 'Success Message');
        setTimeout(() => this.props.disableLoading(), 5000);
        setTimeout(() => this.props.display_message('warning',
            'This is a warning message'), 5000);
        setTimeout(() => this.props.display_message('danger',
            'This is a danger message'), 10000);
    };

    render() {
        return (
            <div className="card-body p-0">
                {/* Nested Row within Card Body */}
                <div className="row">
                    <div className="col-lg-5 d-none d-lg-block bg-register-image"/>
                    <div className="col-lg-7">
                        <div className="p-5">
                            <div className="text-center">
                                <h1 className="h4 text-gray-900 mb-4">Register Here!</h1>
                            </div>
                            <form className="user" onSubmit={this.handleSubmit}>
                                <div className="form-group row">
                                    <div className="col-sm-12 mb-3 mb-sm-0">
                                        <input type="text" onChange={this.handleChange}
                                               className="form-control form-control-user"
                                               id="name" placeholder="Name"/>
                                    </div>

                                </div>
                                <div className="form-group">
                                    <input type="email" onChange={this.handleChange}
                                           className="form-control form-control-user"
                                           id="email" placeholder="Email Address"/>
                                </div>
                                <div className="form-group row">
                                    <div className="col-sm-6 mb-3 mb-sm-0">
                                        <input type="password" onChange={this.handleChange}
                                               className="form-control form-control-user"
                                               id="password" placeholder="Password"/>
                                    </div>
                                    <div className="col-sm-6">
                                        <input type="password" onChange={this.handleChange}
                                               className="form-control form-control-user"
                                               id="confirm_password" placeholder="confirm Password"/>
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-primary btn-user btn-block">
                                    Register
                                </button>
                            </form>
                            <hr/>
                            <div className="text-center">
                                <a className="small" href="#">Forgot Password?</a>
                            </div>
                            <div className="text-center">
                                <a className="small" href="">Already have an account? Login!</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        enableLoading: () => {
            return dispatch({
                type: ENABLE_LOADING,
                loading: true
            })
        },
        disableLoading: () => {
            return dispatch({
                type: DISABLE_LOADING,
                loading: false,
            });
        },
        display_message: (type, message) => {
            return dispatch({
                type: DISPLAY_MESSAGE,
                payload: {
                    type: type,
                    message: message,
                },
            });
        },
    }
};
export default connect(null, mapDispatchToProps)(Register);
