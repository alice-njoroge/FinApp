import React, {Component} from 'react';
import {Button, Card, Form} from "react-bootstrap";
import Select from 'react-select'

class CreateIncome extends Component {
    render() {
        const options = [
            {value: 'chocolate', label: 'Chocolate'},
            {value: 'strawberry', label: 'Strawberry'},
            {value: 'vanilla', label: 'Vanilla'}
        ];
        return (
            <div className="create-income">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 offset-2">
                            <Card>
                                <Card.Header>Create new Incomes Here </Card.Header>
                                <Card.Body>
                                    <Form>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <Form.Group controlId="month">
                                                    <Form.Label>Month</Form.Label>
                                                    <Form.Control type="number" placeholder="Enter month"/>
                                                </Form.Group>
                                            </div>
                                            <div className="col-md-6">
                                                <Form.Group controlId="year">
                                                    <Form.Label>Year</Form.Label>
                                                    <Form.Control type="number" placeholder="Enter year"/>
                                                </Form.Group>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <Form.Group controlId="amount">
                                                    <Form.Label>Amount</Form.Label>
                                                    <Form.Control type="number" placeholder="Enter amount"/>
                                                </Form.Group>
                                            </div>
                                            <div className="col-md-6">
                                                <Form.Group controlId="description">
                                                    <Form.Label>Income Source</Form.Label>
                                                    <Select options={options}/>
                                                </Form.Group>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <Form.Group controlId="description">
                                                    <Form.Label>Description</Form.Label>
                                                    <Form.Control as="textarea" rows="3"/>
                                                </Form.Group>
                                            </div>
                                            <div className="col-md-6">
                                                <Form.Group controlId="recorded_by_id">
                                                    <Form.Label>Recorded by:</Form.Label>
                                                    <Form.Control type="text" readOnly value="Alice"/>
                                                </Form.Group>
                                            </div>
                                        </div>
                                        <Button variant="primary" type="submit">
                                            Submit
                                        </Button>
                                    </Form>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateIncome;