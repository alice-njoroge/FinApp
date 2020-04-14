import React, {Component} from "react";
import axios from 'axios';
import {connect} from 'react-redux';
import {DISPLAY_MESSAGE, LOGIN_USER} from "../ActionTypes";
import {Spinner} from "react-bootstrap";

class Login extends Component {
    state = {
        user: {
            email: null,
            password: null
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
        axios.post('/login', this.state.user)
            .then(res => {
                const token = res.data.token;
                localStorage.setItem('token',token);
                axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
                this.props.login_user(res.data);
                this.props.display_message('success', 'logged in successfully');
                this.props.history.push('/')
            }).catch(e => {
            this.props.display_message('danger', e.response.data.error);
        });
    };

    render() {
        return (
            <div className="card o-hidden border-0 shadow-lg my-5">
                <div className="card-body p-0">
                    {/*Nested Row within Card Body */}
                    <div className="row">
                        <div className="col-lg-6 d-none d-lg-block bg-login-image"/>
                        <div className="col-lg-6">
                            <div className="p-5">
                                <div className="text-center">
                                    <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                                </div>
                                <form className="user" onSubmit={this.handleSubmit}>
                                    <div className="form-group">
                                        <input type="email" className="form-control form-control-user"
                                               id="email" onChange={this.handleChange} required
                                               aria-describedby="emailHelp"
                                               placeholder="Enter Email Address..."/>
                                    </div>
                                    <div className="form-group">
                                        <input type="password" className="form-control form-control-user"
                                               id="password" onChange={this.handleChange} required
                                               placeholder="Password"/>
                                    </div>
                                    <button type="submit" className="btn btn-primary btn-user btn-block">
                                         Login
                                    </button>
                                    <hr/>
                                    <a href="#" className="btn btn-google btn-user btn-block">
                                        <i className="fab fa-google fa-fw"/> Login with Google
                                    </a>
                                    <a href="#" className="btn btn-facebook btn-user btn-block">
                                        <i className="fab fa-facebook-f fa-fw"/> Login with Facebook
                                    </a>
                                </form>
                                <hr/>
                                <div className="text-center">
                                    <a className="small" href="#">Forgot Password?</a>
                                </div>
                                <div className="text-center">
                                    <a className="small" href="#">Create an Account!</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.auth.user
    }
};

const mapDispatchToProps = dispatch => {
    return {
        display_message: (type, message) => {
            return dispatch({
                type: DISPLAY_MESSAGE,
                payload: {
                    type: type,
                    message: message,
                }
            });
        },
        login_user: (user)=>{
            return dispatch({type:LOGIN_USER, user})
        }


    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);