const mongoose = require('mongoose');

// Declaring schema
const productCategorySchema = new mongoose.Schema(
    {
        title : {
            type:String,
            required: true,
            unique: true,
            index: true,
        },
    },
    {
        timestamps: true,
    }
);


module.exports = mongoose.model("ProductCategory", productCategorySchema);