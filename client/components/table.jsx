import React from 'react';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';

const DataTable = (props) => {

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        });

    const listItems = props.transactions.map(entry => 
        <tr>
        <td>{entry.category}</td>
        <td>{formatter.format(entry.amount)}</td>
        </tr>
    );
    
    return (
        <Container id="table">
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                    <th>Description</th>
                    <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {listItems}
                </tbody>
            </Table>
        </Container>
    )
}

export default DataTable;