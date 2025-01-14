const express = require("express");
const router = express.Router();
const Review = require("../models/Review");

router.post("/create", async (req, res) => {
  const dataReview = new Review({
    recipeId: req.body.recipeId,
    userId: req.body.userId,
    rating: req.body.rating,
    comment: req.body.comment,
  });
  try {
    const review = await dataReview.save();
    res.json(review);
  } catch (error) {
    res.json({ message: error });
  }
});

router.get("/", async (req, res) => {
  try {
    const review = await Review.find().populate("recipeId");
    res.json(review);
  } catch (error) {
    res.json({ message: error });
  }
});

router.delete("/:ID", async (req, res) => {
  try {
    const review = await Review.deleteOne({
      _id: req.params.ID,
    });
    res.json(review);
  } catch (error) {
    res.json({
      message: error,
    });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const review = await Review.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json({
      message: "Review Updated",
      Data: review,
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const review = await Review.findById(req.params.id);
    res.status(200).json(recipe);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
