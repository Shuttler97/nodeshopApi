const express = require('express');
const router =  express.Router();

router.get('/', (req,res,next) => {
    res.status(200).json({
        message: 'Get Request'
    });
});

router.post('/',(req,res,next) => {
    res.status(200).json({
        message: 'Post Request'
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
