import React, {useEffect, useState} from "react";
import {Button, Card, Col, Row, Table} from "react-bootstrap";
import axios from 'axios';
import {connect} from 'react-redux';
import {DISPLAY_MESSAGE} from "../ActionTypes";

function IncomeSources(props) {
    const [sources, setSources] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:3002/income-sources')
            .then(res => {
                setSources(res.data);
            }).catch(e => {
            console.log(e.response.data);
            props.display_message('danger',e.response.data.error);
            props.history.push('/login');
        })
    });

    const sources_list = sources.map((source, index) => {
        return (
            <tr key={index}>
                <td>{index + 1}</td>
                <td>{source.name}</td>
                <td>Actions</td>
            </tr>
        )
    });
    return (
        <div className="source">
            <Row>
                <Col md={{span: 8, offset: 2}}>
                    <Card>
                        <Card.Header className="text-center">Income Sources
                            <Button className="float-right" variant="primary">Create new</Button>
                        </Card.Header>
                        <Card.Body>
                            <Table>
                                <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Actions</th>
                                </tr>
                                </thead>
                                <tbody>
                                {sources_list}
                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}


const mapDispatchToProps = dispatch => {
return{
    display_message: (type, message) => {
        return dispatch({
            type: DISPLAY_MESSAGE,
            payload: {
                type: type,
                message: message,
            }
        });
    }
}
};
export default connect(null, mapDispatchToProps)(IncomeSources);
    