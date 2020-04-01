import React, {Component} from "react";
import axios from 'axios';

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

    handleSubmit = (e)=>{
        e.preventDefault();
        axios.post('http://127.0.0.1:3002/login', this.state.user)
            .then(res => {
                console.log(res.data);
                localStorage.setItem('token', res.data.token);
            }).catch(e => {
            console.log(e.response.data);
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

export default Login;