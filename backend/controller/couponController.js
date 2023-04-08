const Coupon = require('../models/couponModel');
const validateMongoDbId = require('../utils/validateMongodbId');
const asyncHandler = require("express-async-handler");



// CREATE
const createCoupon = asyncHandler(async(req, res) =>{
    try{
        const newCoupon =  await Coupon.create(req.body);
        res.json(newCoupon);
    }catch(error){
        throw new Error(error);
    }
});


// GET ALL 
const getAllCoupons = asyncHandler(async(req,res) =>{
    try{
        const coupons = await Coupon.find();
        res.json(coupons);
    }catch(error){
        throw new Error(error);
    }
});


// GET SINGLE
const getCoupon = asyncHandler(async(req,res) =>{
    const { id } = req.params;
    validateMongoDbId(id);
    try{
        const getSingleCoupon = await Coupon.findById(id);
        res.json(getSingleCoupon);
    }catch(error){
        throw new Error(error);
    }
});


// update SINGLE
const updateCoupon = asyncHandler(async(req , res) =>{
    const { id } = req.params;
    validateMongoDbId(id);
    try{
        const updatesCoupon = await Coupon.findByIdAndUpdate(
            id,
            req.body,
            {
                new : true,
            },
        );
        res.json(updatesCoupon);
    } catch(error){
        throw new Error(error);
    }
});

// DELETE COUPON
const deleteCoupon = asyncHandler(async( req, res) =>{
    const { id } = req.params;
    validateMongoDbId(id);
    try{
        const deletesCoupon = await Coupon.findByIdAndDelete(id);
        res.json(deletesCoupon);
    }catch(error){
        throw new Error(error);
    }
});



module.exports = {
    createCoupon,
    getAllCoupons,
    updateCoupon,
    deleteCoupon,
    getCoupon,
};

