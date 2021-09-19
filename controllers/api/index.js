const router = require('express').Router();
const userRoutes = require('./user-routes');
const categoryRoutes = require('./category-routes');
const transactionRoutes = require('./transaction-routes');
const blogpostRoutes = require('./blogpost-routes');
const newpost = require('./newpost-routes');


router.use('/user', userRoutes);
router.use('/category', categoryRoutes);
router.use('/transaction', transactionRoutes);
router.use('/blogpost', blogpostRoutes);
router.use('/newpost', newpost);

module.exports = router;
