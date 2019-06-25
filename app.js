const express = require('express');
const app = express();


const productRoutes = require('./api/routes/products');
const orderRoutes = require('./api/routes/order');
const morgan = require('morgan');
const bodyParser = require('body-parser');


console.log('called', app);
app.use(morgan('dev'));
app.use('/product', productRoutes);
app.use('/order', orderRoutes);
app.use((req,res,next) => {
    console.log('err');
    const err = new Error("Not found");
    err.status = 404;
    next(err);

});
app.use((err,req,res,next) =>{
    console.log('function');
    res.status(err.status|| 500);
    res.json({
        error:{
            message: err.message
        }
    })
});
module.exports = app;
