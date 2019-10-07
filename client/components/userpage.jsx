import React from 'react';
import axios from 'axios';
import Summary from './summary.jsx';
import Inputs from './inputs.jsx';
import DataTable from './table.jsx';
import Selectors from './selectors.jsx';

export default class Userpage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            month: '',
            balance: 0,
            credits: 0,
            debits: 0,
            monthTransactions: [],
            allTransactions: [],
            categories: []
        };

    }

    dateFinder() {
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

        let result = {
            date: `${d.getMonth() + 1}/${d.getDate()}/${d.getFullYear()}`,
            month: month[d.getMonth()],
            year: d.getFullYear()
        }

        return result;

    }

    pullAllData() {
        if (this.props.auth && this.props.user) {
            axios.get(`user?email=${this.props.user}`)
            .then(transactions => {
                this.setState( { allTransactions: transactions.data });
            })
            .catch(err => {
                console.log(err);
            })
        }
    }

    pullMonthData(month) {
        if (this.props.auth && this.props.user) {
            axios.get(`user?email=${this.props.user}&month=${month}`)
            .then(transactions => {
                this.setState( { monthTransactions: transactions.data });

                let total = 0;
                let debits = 0;
                let credits = 0;
                let categories = [];
                
                for (let i = 0; i < transactions.data.length; i++) {
                    categories.push(transactions.data[i].category)
                    total += transactions.data[i].amount;
                    if (transactions.data[i].amount > 0) {
                        debits += transactions.data[i].amount;
                    } else {
                        credits += transactions.data[i].amount;
                    }
                }

                categories = Array.from(new Set(categories));

                this.setState(
                    { month: month,
                      balance: total,
                      credits: credits,
                      debits: debits,
                      categories: categories
                    }
                );
            }
        )}
    }

    componentDidMount() {
        let currentDate = this.dateFinder();
        this.pullMonthData(currentDate.month);
        this.pullAllData();
    }

    componentWillUnmount() {
        this.setState( {
            month: '',
            balance: 0,
            credits: 0,
            debits: 0,
            monthTransactions: [],
            allTransactions: [],
            categories: []
        });
    }

    changeMonth(input) {
        this.pullMonthData(input);
    }

    addExpense(category, amount) {
        let currentDate = this.dateFinder();
        axios.post('/addexpense',
        { email: this.props.user,
          date: currentDate.date,
          year: currentDate.year,
          month: this.state.month,
          category: category,
          amount: amount
        })
        .then(result => {
            this.pullMonthData(this.state.month);
            this.pullAllData();
        })
        .catch(err => {
            console.log(err);
        });
    }

    render() {
        return(
            <>
            <Summary balance={this.state.balance} 
                    credits={this.state.credits} 
                    debits={this.state.debits}
                    month={this.state.month}
            />
            <Selectors changeMonth={this.changeMonth.bind(this)} 
                       transactions={this.state.monthTransactions}
                       allTransactions={this.state.allTransactions} />
            <Inputs categories={this.state.categories} 
                    addExpense={this.addExpense.bind(this)} />
            <DataTable transactions={this.state.monthTransactions} />
            </>
        )
    }

}