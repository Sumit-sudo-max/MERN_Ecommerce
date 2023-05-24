// const express = require("express");
// const {
//     createProduct,
//     getSingleProduct,
//     getAllProduct,
//     updateProduct,
//     deleteProduct,
//     addToWishlist,
//     rating,
//     uploadImages,
//     deleteImages
// } = require("../controller/productController");
// const { isAdmin, authMiddleware } = require("../middlewares/authMiddleware");
// const { uploadPhoto, productImgResize } = require("../middlewares/uploadImage");
// const router = express.Router();

// router.post("/", authMiddleware, isAdmin, createProduct);

// router.put(
//     '/upload/:id',
//     authMiddleware,
//     isAdmin,
//     uploadPhoto.array("images" ,10),
//     productImgResize,
//     uploadImages
// )

// router.get("/:id", getSingleProduct);
// router.put("/wishlist", authMiddleware, addToWishlist);
// router.put("/rating", authMiddleware, rating);

// router.put("/:id", authMiddleware, isAdmin, updateProduct);
// router.delete("/:id", authMiddleware, isAdmin, deleteProduct);
// router.delete('/delete/:id', authMiddleware, isAdmin, deleteImages);

// router.get("/", getAllProduct);

// module.exports = router;

const express = require("express");
const {
    createProduct,
    getSingleProduct,
    getAllProduct,
    updateProduct,
    deleteProduct,
    addToWishlist,
    rating,
    uploadImages,
    deleteImages

} = require("../controller/productController");
const { isAdmin, authMiddleware } = require("../middlewares/authMiddleware");
const { uploadPhoto, productImgResize } = require("../middlewares/uploadImage");

const router = express.Router();

router.post("/", authMiddleware, isAdmin, createProduct);

router.put(
        '/upload/:id',
        authMiddleware,
        isAdmin,
        uploadPhoto.array("images" ,10),
        productImgResize,
        uploadImages
    )

router.get("/:id", getSingleProduct);
router.put("/wishlist", authMiddleware, addToWishlist);
router.put("/rating", authMiddleware, rating);

router.put("/:id", authMiddleware, isAdmin, updateProduct);
router.delete("/:id", authMiddleware, isAdmin, deleteProduct);
router.delete('/delete/:id', authMiddleware, isAdmin, deleteImages);


router.get("/", getAllProduct);

module.exports = router;
