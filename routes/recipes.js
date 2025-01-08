const express = require("express");
const router = express.Router();
const Recipe = require("../models/Recipe");

router.post("/create", async (req, res) => {
  const dataRecipe = new Recipe({
    namaResep: req.body.namaResep,
    bahan: req.body.bahan,
    instruksi: req.body.instruksi,
    categoryId: req.body.categoryId,
  });
  try {
    const recipe = await dataRecipe.save();
    res.json(recipe);
  } catch (error) {
    res.json({ message: error });
  }
});

router.get("/", async (req, res) => {
  try {
    const recipe = await Recipe.find().populate("categoryId")
    res.json(recipe);
  } catch (error) {
    res.json({ message: error });
  }
});

module.exports = router;
