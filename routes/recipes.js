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
    const recipe = await Recipe.find().populate("categoryId");
    res.json(recipe);
  } catch (error) {
    res.json({ message: error });
  }
});

router.delete("/:ID", async (req, res) => {
  try {
    const recipe = await Recipe.deleteOne({
      _id: req.params.ID,
    });
    res.json(recipe);
  } catch (error) {
    res.json({
      message: error,
    });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const recipe = await Recipe.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json({
      message: "Recipe Updated",
      Data: recipe,
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

module.exports = router;
