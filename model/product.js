const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    id: String,
    category: String,
    filter: String,
    name: String,
    price: Number,
  },
  { collection: "products" }
);

module.exports = mongoose.model("Product", productSchema);
