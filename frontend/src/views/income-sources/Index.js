import React, {useEffect} from 'react';
import {Card, Col, Row, Table} from 'react-bootstrap';
import {useDispatch, useSelector} from 'react-redux';
import {DISPLAY_MESSAGE} from '../../ActionTypes';
import {FetchSources} from '../../Actions/FetchSources';
import {Link} from "react-router-dom";

function Index(props) {

    const sources = useSelector(state => state.income_sources);// mapStateToProps
    const dispatch = useDispatch();

    // componentdidmount
    useEffect(() => {
        dispatch(FetchSources())
    }, []);

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
                            <Link to="/income-sources/create" className="btn btn-primary float-right">Create</Link>
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

export default Index;
