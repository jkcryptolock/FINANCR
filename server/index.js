const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const { userLookup } = require('../db/config.js');
const PORT = 3000;

const app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + '/../public'));

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
      res.status(500).send({ error: err });
    });
});

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
        res.status(500).send({ error: err });
    })
});

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
        res.status(500).send({ error: err });
      });
});

app.post('/addexpense', (req, res) => {
    let newExpense = { year: +req.body.year,
                       month: req.body.month,
                       category: req.body.category,
                       amount: +req.body.amount
                    }
    console.log(newExpense)
    userLookup.update(
        { email: req.body.email },
        { $push: { data: newExpense } })
    .exec()
    .then(result => res.status(201).send())
    .catch(err => res.status(501).send())
});

app.listen(PORT, () => console.log(`FINANCR is connected on port ${PORT}`));