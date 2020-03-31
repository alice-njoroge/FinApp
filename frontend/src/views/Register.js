import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import {DISABLE_LOADING, DISPLAY_MESSAGE, ENABLE_LOADING, REGISTER_USER} from '../ActionTypes';

class Register extends Component {
    state = {
        user: {
            name: null,
            email: null,
            password: null,
            confirm_password: null
        },
        success: null,
        error: null
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
        if (this.state.password !== this.state.confirm_password) {
            this.setState({
                error: true
            });
        } else {
            let user = this.state.user;
            delete user['confirm_password'];

            axios.post('http://127.0.0.1:3002/signup', user).then(res => {
                console.log(res.data);
                this.props.register_user(res.data);
                this.props.display_message('success', 'user created successfully');
                this.props.history.push('/');

            }).catch(e => {
                console.log(e.response)
            });
        }

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

const mapStateToProps = state => {
    return {
        user: state.user
    };
};
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
        register_user: (user) => {
            return dispatch({type: REGISTER_USER, user})
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
export default connect(mapStateToProps, mapDispatchToProps)(Register);
