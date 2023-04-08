const express = require('express');
const { 
        createdUser, 
        loginUser, 
        getUser, 
        updateUser, 
        getAllUsers, 
        deleteUser, 
        blockUser, 
        unblockUser, 
        handleRefreshToken, 
        logout, 
        updatePassword, 
        forgotPassword, 
        resetPassword, 
        loginAdmin, 
        getWishlist, 
        userCart, 
        applyCoupon, 
        createOrder, 
        getOrders, 
        getAllOrders, 
        getUserCart, 
        emptyCart, 
        saveAddress,
        updateOrdersStatus
    } = require('../controller/userController');
const router = express.Router();
const { authMiddleware, isAdmin}= require('../middlewares/authMiddleware');


router.post('/register', createdUser);
router.post("/forgot-password-token", forgotPassword);
router.post('/reset-password/:token', resetPassword);
router.put('/password', authMiddleware, updatePassword);
router.post('/login', loginUser);
router.post("/admin-login", loginAdmin);
router.post("/cart" , authMiddleware, userCart);
router.post("/cart/applycoupon", authMiddleware, applyCoupon);
router.post("/cart/cash-order", authMiddleware, createOrder);

router.get("/all-users", getAllUsers);
router.get("/get-orders", authMiddleware, getOrders);
router.get("/getallorders", authMiddleware, isAdmin, getAllOrders);
router.post("/getorderbyuser/:id", authMiddleware, isAdmin, getAllOrders);

router.get('/refresh', handleRefreshToken);
router.get("/logout", logout);
router.get("/wishlist", authMiddleware, getWishlist);
router.get("/cart", authMiddleware, getUserCart);

router.get('/:id', authMiddleware, isAdmin, getUser);
router.delete("/empty-cart", authMiddleware, emptyCart);

router.delete("/:id",deleteUser)

router.put(
    "/order/update-order/:id",
    authMiddleware,
    isAdmin,
    updateOrdersStatus
);

router.put("/edit-user",  authMiddleware, updateUser);
router.put("/save-address", authMiddleware, saveAddress);

router.put('/block-user/:id', authMiddleware, isAdmin, blockUser);
router.put('/unblock-user/:id', authMiddleware, isAdmin, unblockUser);




module.exports = router;