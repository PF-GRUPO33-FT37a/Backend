const { Router } = require('express');
const ProductsPrueba = require('../db/models/productsPrubeScheme')
const usersRoutes = require('./UsersRoutes/indexUsers');
const productsRoutes = require('./ProductsRoutes/indexProducts');
const storeRoutes = require('./StoreRoutes/indexStore');
const reviewsRoutes = require('./ReviewsRoutes/indexReviews')
const paymentMethodRoutes = require('./PaymentRoutes/indexPayment')
const purchaseRoutes = require('./PurchaseRoutes/indexPurchase')
const transactionsRoutes = require('./TransactionsRoutes/indexTransactions')


const router = Router();

router.use('/users', usersRoutes);
router.use('/products', productsRoutes);
router.use('/store', storeRoutes);
router.use('/reviews', reviewsRoutes);
router.use('/transactions', transactionsRoutes)
router.use('/payment',paymentMethodRoutes)
router.use('/purchase', purchaseRoutes)
router.post('/produuctsPrueba', async(req,res)=>{
    try{
        let data = req.body
	const product = {
		name: data.name,
		category: data.category,
		gender: data.gender,
		size: data.size,
		color: data.color,
		season: data.season,
		images: data.images,
		stock: data.stock,
		brand: data.brand,
		price: data.price,
		articleCode: data.articleCode,
	};

	const result = ProductsPrueba.create(product);
    res.status(200).json(result)
    }catch(err){
        res.status(400).json({error:err.message})
    }
})

module.exports = router;
