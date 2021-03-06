const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const { userLookup } = require('../db/config.js');
const PORT = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + '/../public'));

//Find User's Transactions

app.get('/user', (req, res) => {
    userLookup.find({ email: req.query.email })
    .exec()
    .then(doc => {
      let transactions = doc[0].data;
      let result = [];
      if (req.query.month) {
          for (let i = 0; i < transactions.length; i++) {
              if (transactions[i].month === req.query.month) {
                  result.push(transactions[i]);
              }
          }
          res.status(200).send(result);
      } else {
        res.status(200).send(transactions);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(404).send({ error: err });
    });
});

//Verify User Exists and Password Matches

app.get('/auth', (req, res) => {
    userLookup.find({ email: req.query.email })
    .exec()
    .then(doc => {
        let user = doc[0].email;
        let pw = doc[0].password;
        if ((req.query.email === user) && (req.query.password === pw)) {
            res.status(200).send('success');
        } else {
            res.send('Incorrect Information');
        }
    })
    .catch(err => {
        res.status(500).send("can't find user");
    })
});

//Add User to Database

app.post('/user', (req, res) => {
    const user = new userLookup({
      _id: new mongoose.Types.ObjectId(),
      email: req.query.email,
      password: req.query.password,
      data: []
    });
    user.save()
      .then(result => {
        res.status(201).send('success');
      })
      .catch(err => {
        res.status(500).send("can't find user");
      });
});

//Add Expense to User's Transactions

app.post('/addexpense', (req, res) => {
    let newExpense = { date: req.body.date,
                       year: +req.body.year,
                       month: req.body.month,
                       category: req.body.category,
                       amount: +req.body.amount
                    }
    userLookup.update(
        { email: req.body.email },
        { $push: { data: newExpense } })
    .exec()
    .then(result => res.status(201).send('success'))
    .catch(err => res.status(500).send('adding expense failed'))
});

app.listen(PORT, () => console.log(`FINANCR is connected on port ${PORT}`));