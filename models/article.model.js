const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    content: {
      type: String, // text editor HTML / markdown
      required: true,
    },

    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "category",
      required: true,
    },

    featureImage: {
      type: String, // image URL or file path
    },

    videoLink: {
      type: String, // youtube or video url
      trim: true,
    },
  },
  { timestamps: true }
);

const Article = mongoose.model("article", articleSchema);

module.exports = Article;
