const axios = require('axios');
const faker = require('faker');

const categories = ['Deposits', 'Entertainment', 'Health Care', 'Lodging', 'Merchandise', 'Restaurants', 'Services', 'Travel', 'Vehicle Services'];

const generateExpenses = () => {
    let expenseArr = [];

    for (let i = 1; i < 31; i++) {
        let category = categories[Math.floor(Math.random() * 9)];
        let amount = +faker.finance.amount();

        if (category !== 'Deposits') {
            amount *= -1;
        } else {
            amount *= 20;
        }

        expenseArr.push({"email": "demo@demo.com",
                         "date": `1/${i}/2019`,
                         "year": 2019,
                         "month": "January",
                         "category": category,
                         "amount": amount
                        })
    }
    
    return expenseArr;
}

let expenses = generateExpenses();

const generate = () => {
    expenses.forEach(expense => {
        axios.post('http://localhost:3000/addexpense', expense)
        .then(result => {
            console.log('success')
        })
        .catch(err => {
        });
    });
}

generate();

