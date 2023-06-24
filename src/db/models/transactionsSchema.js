const mongoose = require('mongoose')
const Schema = mongoose.Schema

const transactionsSchema = new Schema({
    idUser: {
        type: mongoose.Types.ObjectId,
        ref: 'users',
        required: true
    },
    amount:{
        type: Number,
        required: true 
    },
    products:{
        type: [mongoose.Types.ObjectId],
        ref: 'products',
        required: true,
    },
    date: {
        type: String,
        required:true
    },
    status:{
        type: String,
        required: true
    }
},{
    versionKey: false
});

const Transactions = mongoose.model('Transactions', transactionsSchema);

module.exports = Transactions;