const express = require("express");
const router = express.Router();
const Category = require("../models/Category");

router.post('/create', async(req, res) => {
    const dataCategory = new Category({
        categoryName: req.body.categoryName
    })
    try {
        const category = await dataCategory.save()
        res.json(category)
    } catch (error) {
        res.json({message: error})
    }
})

router.get('/', async(req, res)=>{
    try {
        const category = await Category.find()
        res.json(category)
    } catch (error) {
        res.json({message: error})
    }
})

module.exports = router