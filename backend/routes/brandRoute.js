const express = require('express');
const { authMiddleware, isAdmin } = require('../middlewares/authMiddleware');
const { createBrand, updateBrand, getSingleBrand, deleteBrand, getAllBrand } = require('../controller/brandController');

const router = express.Router();



router.post('/', authMiddleware, isAdmin, createBrand);

router.put('/:id', authMiddleware, isAdmin, updateBrand);

router.delete('/:id', authMiddleware, isAdmin, deleteBrand);

router.get('/:id', getSingleBrand);

router.get('/', getAllBrand);

module.exports = router;
