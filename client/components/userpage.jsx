import React from 'react';
import Container from 'react-bootstrap/Container';
import Summary from './summary.jsx';

export default class Userpage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            balance: 0,
            credits: 0,
            debits: 0,
            categories: [],
            amounts: {}
        };

    }

    render() {
        return(
            <>
            <Summary balance={this.state.balance} 
                    credits={this.state.credits} 
                    debits={this.state.debits} 
            />
            </>
        )
    }

}