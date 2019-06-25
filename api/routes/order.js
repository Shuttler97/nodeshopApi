const express = require('express');
const router =  express.Router();

router.get('/',(req,res,next) => {
    res.status(200).json({
        message: 'Get Request order'
    });
});

router.post('/',(req,res,next) => {
    res.status(200).json({
        message: 'Post Request order'
    });
});
router.get('/:id',(req, res, next) => {
    const id = req.params.id;
    if (id ==='special') {
        res.status(200).json({
            id:id
        })
    }else {
        res.status(200).json({
            message: 'hello without id'
        })
    }
});
module.exports = router ;
