const {Router} = require('express');

const postTransactionHandler = require('./handlers/postTransactionHandler')

const transactions = Router();


transactions.post('/', postTransactionHandler)