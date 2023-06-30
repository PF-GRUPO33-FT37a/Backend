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
		let firebaseUrls;
		if (req.files) {
			firebaseUrls = req.files.map((file) => file.firebaseUrl);
		}
	const product = {
		images: firebaseUrls,
	};

	const result = ProductsPrueba.create(product);
    res.status(200).json(result)
    }catch(err){
        res.status(400).json({error:err.message})
    }
})

module.exports = router;
