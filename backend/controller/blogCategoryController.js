const Category = require('../models/blogCategoryModel');
const asyncHandler = require('express-async-handler');
const validateMongoDbId = require("../utils/validateMongodbId");

// CREATE BLOG CATEGORY
const createBlogCategory = asyncHandler(async(req, res) =>{
    try{
        const newCategory = await Category.create(req.body);
        res.json(newCategory);
    } catch (error) {
    throw new Error(error);
}
});

// UPDATE CATEGORIES
const updateBlogCategory = asyncHandler(async(req, res) =>{
    const { id } = req.params;
    validateMongoDbId(id);
    
        try {
            const updatedBlogCategory = await Category.findByIdAndUpdate(
                id,
                req.body,
                {
                    new : true,
                }
            );
            res.json(updatedBlogCategory);
        }catch (error) {
            throw new Error(error);
        }
});

// DELETE CATEGORY
const deleteBlogCategory = asyncHandler(async(req,res) => {
    const { id } = req.params;
    validateMongoDbId(id);
    try{
        const deletedBlogCategory = await Category.findByIdAndDelete(id);
        res.json(deletedBlogCategory);
    }catch(error){
        throw new Error(error);
    }
});

//GET SINGLE BLOG category  
const getBlogCategory = asyncHandler(async(req, res) =>{
    const { id } = req.params;
    validateMongoDbId(id);
    try{
        const getSingleBlogCategory = await Category.findById(id);
        res.json(getSingleBlogCategory);
    }catch(error){
        throw new Error(error);
    }
});

//GET ALL BLOG CATEGORIES
const getAllBlogCategories = asyncHandler(async(req, res) =>{
    try{
        const getAllBlogCategory = await Category.find();
        res.json(getAllBlogCategory);
    }catch(error){
        throw new Error(error);
    }
});


module.exports = {
    createBlogCategory,
    updateBlogCategory,
    deleteBlogCategory,
    getBlogCategory,
    getAllBlogCategories,
}