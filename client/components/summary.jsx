import React from 'react';
import Container from 'react-bootstrap/Container';

const Summary = (props) => {

    const month = () => {
        const d = new Date();
        const month = new Array();

        month[0] = "January";
        month[1] = "February";
        month[2] = "March";
        month[3] = "April";
        month[4] = "May";
        month[5] = "June";
        month[6] = "July";
        month[7] = "August";
        month[8] = "September";
        month[9] = "October";
        month[10] = "November";
        month[11] = "December";

        return month[d.getMonth()];

    }

    const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    });

    return (
        <Container id="summary">
            <h1>FINANCR Report for {month()}</h1>
            <h3 id="balance">Current Balance: {formatter.format(props.balance)}</h3>
            <h5 id="credit-debit">Credits: {formatter.format(props.credits)} | Debits: {formatter.format(props.debits)}</h5>
        </Container>
    )
}

export default Summary;