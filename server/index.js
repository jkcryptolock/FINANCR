const express = require('express');
const bodyParser = require('body-parser');
const PORT = 3000;

const app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + '/../public'));

app.listen(PORT, () => console.log(`FINANCR is connected on port ${PORT}`));