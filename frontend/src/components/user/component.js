import React, {Component} from 'react';
import {Card, Col, Form, Row} from "react-bootstrap";

class User extends Component {
    componentDidMount() {
        this.props.getUser();
    }

    render(){
        return(
            <div className="users">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 offset-3">
                            <Card>
                                <Card.Header>View your Profile Here:</Card.Header>
                                <Card.Body>
                                    <Form>
                                        <Form.Group as={Row} controlId="name">
                                            <Form.Label column sm="2">
                                                Name
                                            </Form.Label>
                                            <Col sm="10">
                                                <Form.Control plaintext value={this.props.user ? this.props.user.name : '' } />
                                            </Col>
                                        </Form.Group>

                                        <Form.Group as={Row} controlId="formPlaintextPassword">
                                            <Form.Label column sm="2">
                                                Email
                                            </Form.Label>
                                            <Col sm="10">
                                                <Form.Control type="email" plaintext value ={this.props.user ? this.props.user.email : '' } />
                                            </Col>
                                        </Form.Group>
                                    </Form>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        )
    };
}
export default User;