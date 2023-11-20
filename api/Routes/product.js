const express = require('express');
const router = express.Router();

router.get('/',(req, res, next)=>{
    res.status(200).json({
        message: 'Product List'
    });
    
});
router.post('/',(req, res, next)=>{
    res.status(200).json({
        message: 'Create Product'
    });
});
router.put('/',(req, res, next)=>{
    res.status(200).json({
        message: 'Update All Update'
    });
});
router.patch('/',(req, res, next)=>{
    res.status(200).json({
        message: 'Update a Product'
    });
});
router.delete('/',(req, res, next)=>{
    res.status(200).json({
        message: 'Delete Product'
    });
});

module.exports = router;