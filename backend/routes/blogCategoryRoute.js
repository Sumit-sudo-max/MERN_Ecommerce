const express = require('express');
const { authMiddleware, isAdmin } = require('../middlewares/authMiddleware');
const { createBlogCategory, updateBlogCategory, deleteBlogCategory, getBlogCategory , getAllBlogCategories } = require('../controller/blogCategoryController');

const router = express.Router();


router.post('/', authMiddleware, isAdmin, createBlogCategory);

router.put("/:id", authMiddleware, isAdmin, updateBlogCategory);

router.delete("/:id", authMiddleware, isAdmin, deleteBlogCategory);

router.get('/:id',getBlogCategory);

router.get('/',getAllBlogCategories);


module.exports = router;