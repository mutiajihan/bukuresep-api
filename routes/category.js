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

router.delete("/:ID", async (req, res) => {
  try {
    const category = await Category.deleteOne({
      _id: req.params.ID,
    });
    res.json(category);
  } catch (error) {
    res.json({
      message: error,
    });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const category = await Category.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json({
      message: "Category Updated",
      Data: category,
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    res.status(200).json(recipe);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router