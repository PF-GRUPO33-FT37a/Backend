const Transactions = require('../../../db/models/transactionsSchema') 
const Products = require('../../../db/models/productSchema')

const postTransactionController = async(data) =>{
    const newTransaction = {
        idUser:data.idUser,
        amount:data.amount,
        products:data.products,
        date:data.date,
        status: data.status
    }
    const info = await Transactions.create(newTransaction)
    
    const products = data.products;
    for(const product of products){
        const {productId, size, cant} = product;
        const updateProduct = await Products.findByIdAndUpdate(
            productId,
            {
            $inc: { [`size.${size}.stock`]: -cant }
            },
            {new:true}
        )
    }
    return info
}

module.exports = postTransactionController