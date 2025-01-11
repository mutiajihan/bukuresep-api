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

module.exports = router;
