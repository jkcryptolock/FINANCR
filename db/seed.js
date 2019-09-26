const axios = require('axios');
const faker = require('faker');

const categories = ['Deposits', 'Entertainment', 'Health Care', 'Lodging', 'Merchandise', 'Restaurants', 'Services', 'Travel', 'Vehicle Services'];

const generateExpenses = () => {
    let expenseArr = [];

    for (let i = 0; i < 500; i++) {
        let month = faker.date.month();
        let category = categories[Math.floor(Math.random() * 9)];
        let amount = +faker.finance.amount();

        if (category !== 'Deposits') {
            amount *= -1;
        } else {
            amount *= 20;
        }

        expenseArr.push({"year": 2019,
                         "month": month,
                         "category": category,
                         "amount": amount
                        })
    }
    
    return expenseArr;
}

let expenses = generateExpenses();


let data = [
    {"email": "demo@demo.com",
    "password": "password",
    "data": expenses
    }];

const seed = document => {
    axios({
        method: 'post',
        url: 'http://localhost:3000/user',
        data: document
    })
    .then(data => {
        console.log('success');
    })
    .catch(err => {
        console.log(err);
    })
}

seed(data);




