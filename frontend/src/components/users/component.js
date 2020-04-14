import React, {Component} from 'react';
import {Card, Table} from "react-bootstrap";

class Users extends Component {
    render(){
        return(
            <div className="users">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 offset-2">
                            <Card>
                                <Card.Header>List of users</Card.Header>
                                <Card.Body>
                                    <Table>
                                        <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>First Name</th>
                                            <th>Last Name</th>
                                            <th>Username</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>Mark</td>
                                            <td>Otto</td>
                                            <td>@mdo</td>
                                        </tr>
                                        </tbody>
                                    </Table>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        )
    };
}
export default Users;