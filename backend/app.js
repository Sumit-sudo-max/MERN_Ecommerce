const express = require('express');
const dotenv = require('dotenv');
const connectDatabase = require('./config/database');
const app = express();
const authRouter = require('./routes/authRoute');
const productRouter = require('./routes/productRoute');
const blogRouter = require ('./routes/blogRoute');
const categoryRouter = require('./routes/productCategoryRoute');
const brandRouter = require('./routes/brandRoute');
const blogCategoryRouter = require('./routes/blogCategoryRoute');
const couponRouter = require("./routes/couponRoute");
const colorRouter = require("./routes/colorRoute");
const enqRouter = require("./routes/enquiryRoute");
// const uploadRouter = require("./routes/uploadRoute");
const bodyParser = require('body-parser');
const { notFound, errorHandler } = require('./middlewares/errorHandler');
const cookieParser = require("cookie-parser");
const morgan = require('morgan');
const cors = require('cors');




dotenv.config({path: '../backend/config/config.env'});

connectDatabase();

//morgan was deprecated so i wrote combined
app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/api/user',authRouter)
app.use('/api/product', productRouter);
app.use('/api/blog', blogRouter);
app.use('/api/category', categoryRouter);
app.use('/api/blogCategory', blogCategoryRouter);
app.use("/api/brand", brandRouter);
app.use("/api/coupon", couponRouter);
app.use("/api/color", colorRouter);
app.use("/api/enquiry", enqRouter);
// app.use("/api/upload", uploadRouter);




app.use(notFound);
app.use(errorHandler);




app.listen(process.env.PORT, () => {
    console.log(`Server is running on port: ${process.env.PORT} `);
});