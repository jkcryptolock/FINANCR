import React from 'react';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';

const DataTable = (props) => {

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        });
    
    const sorted = props.transactions.sort((a,b) => {
        a = a.date.split('/');
        b = b.date.split('/');
        return +b[1] > +a[1] ? 1 : -1;
    })

    const listItems = sorted.map((entry, index) => 
        <tr key={index}>
        <td>{entry.date}</td>
        <td>{entry.category}</td>
        <td>{formatter.format(entry.amount)}</td>
        </tr>
    );
    
    return (
        <Container id="table">
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                    <th>Date</th>
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