import React, {useState} from 'react';
import {Button, Card, Col, Form, Row} from "react-bootstrap";
import {useDispatch} from "react-redux";
import {createSource} from "../../Actions/FetchSources";

function CreateIncome(props) {
    const [name, setName] = useState(null);

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createSource(name));
        return props.history.replace('/income-sources')
    };

    return (
        <div className="create-source">
            <Row>
                <Col md={{span: 8, offset: 2}}>
                    <Card>
                        <Card.Header className="text-center">Create Source</Card.Header>
                        <Card.Body>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group controlId="name">
                                    <Form.Label>Name:</Form.Label>
                                    <Form.Control type="text"
                                                  onChange={(e) => setName(e.target.value)}
                                                  required
                                                  placeholder="Enter name"/>
                                </Form.Group>

                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form> </Card.Body>
                    </Card>
                </Col>

            </Row>
        </div>
    )
}

export default CreateIncome;