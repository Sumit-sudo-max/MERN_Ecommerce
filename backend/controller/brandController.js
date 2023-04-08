const Brand = require('../models/brandModel');
const asyncHandler = require('express-async-handler');
const validateMongoDbId = require('../utils/validateMongodbId');


//CREATE BRAND
const createBrand = asyncHandler(async(req,res) =>{
    try{
        const newBrand = await Brand.create(req.body);
        res.json(newBrand);
    }catch(error){
        throw new Error(error);
    }
});

// UPDATE BRAND 
const updateBrand = asyncHandler(async(req, res) =>{
    const { id } = req.params;
    validateMongoDbId(id);
    try{
        const updatedBrand = await Brand.findByIdAndUpdate(
            id,
            req.body,
            {
                new : true,
            }
        );
        res.json(updatedBrand);
    }catch(error){
        throw new Error(error);
    }
});

//DELETE BRAND
const deleteBrand = asyncHandler(async(req, res) =>{
    const { id } = req.params;
    validateMongoDbId(id);
    try{
        const deletedBrand = await Brand.findByIdAndDelete(id);
        res.json(deletedBrand);
    }catch(error){
        throw new Error(error);
    }
})


//GET SINGLE BRAND
const getSingleBrand = asyncHandler(async(req, res) =>{
    const { id } = req.params;
    validateMongoDbId(id);
    try{
        const getBrand = await Brand.findById(id);
        res.json(getBrand);
    }catch(error){
        throw new Error(error);
    }
});

//GET ALL BRAND
const getAllBrand = asyncHandler(async(req, res) =>{
    try{
        const getAllBrands = await Brand.find();
        res.json(getAllBrands);
    }catch(error){
        throw new Error(error);
    }
});



module.exports = {
    createBrand,
    updateBrand,
    deleteBrand,
    getSingleBrand,
    getAllBrand
}