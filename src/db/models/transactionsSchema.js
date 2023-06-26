const mongoose = require('mongoose')
const Schema = mongoose.Schema
const autopopulate = require('mongoose-autopopulate');

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
       type:[
        {
            productId:{
                type: mongoose.Types.ObjectId,
                ref: 'ProductsPueba',
                autopopulate:true,
                required: true,
            },
            size:{
                type:String
            },
            cant:{
                type: Number,
                required:true
            }
        }
       ]
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


transactionsSchema.plugin(autopopulate);

const Transactions = mongoose.model('Transactions', transactionsSchema);

module.exports = Transactions;