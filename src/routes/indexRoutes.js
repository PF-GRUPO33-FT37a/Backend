const { Router } = require('express');

const usersRoutes = require('./UsersRoutes/indexUsers');
const productsRoutes = require('./ProductsRoutes/indexProducts');
const storeRoutes = require('./StoreRoutes/indexStore');
const reviewsRoutes = require('./ReviewsRoutes/indexReviews')
const paymentMethodRoutes = require('./PaymentRoutes/indexPayment')


const router = Router();

router.use('/users', usersRoutes);
router.use('/products', productsRoutes);
router.use('/store', storeRoutes);
router.use('/reviews', reviewsRoutes)
router.use('/payment',paymentMethodRoutes)

module.exports = router;
