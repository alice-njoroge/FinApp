import React, {Component} from "react";
import {Card, Table} from "react-bootstrap";
import {Link} from "react-router-dom";

class Incomes extends Component {
    componentDidMount() {
        this.props.getIncomes();
    }

    render() {
        const incomeList = this.props.incomes.map((income, index) => {
            return (
                <tr key={index + 1}>
                    <td>{income.id}</td>
                    <td>{income.month}</td>
                    <td>{income.year}</td>
                    <td>{income.amount}</td>
                    <td>{income.description}</td>
                    <td>{income.recorded_by_id}</td>
                    <td>{income.source.name}</td>
                </tr>
            )
        })
        return (
            <div className="incomes_list">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 offset-2">
                            <Card>
                                <div className="card-header"> Hello
                                    <Link to="/incomes/create" className="btn btn-outline-primary float-right">
                                        Create New
                                    </Link>
                                </div>
                                <Card.Body>
                                    <Table>
                                        <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Month</th>
                                            <th>Year</th>
                                            <th>Amount</th>
                                            <th>Description</th>
                                            <th>Recorded By</th>
                                            <th>Source Name</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {incomeList}
                                        </tbody>
                                    </Table>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Incomes;