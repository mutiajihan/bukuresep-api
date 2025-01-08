const mongoose = require("mongoose");

const RecipeSchema = new mongoose.Schema({
  namaResep: {
    type: String,
    required: true,
  },

  bahan: {
    type: String,
    required: true,
  },

  instruksi: {
    type: String,
    required: true,
  },

  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Category",
  },
});

module.exports = mongoose.model("Recipe", RecipeSchema);
