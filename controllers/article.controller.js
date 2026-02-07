const Article = require("../models/article.model");

// ================= CREATE =================
exports.createArticle = async (req, res) => {
  try {
    const { title, content, category, videoLink } = req.body;

    if (!title || !content || !category) {
      return res.status(400).json({
        status: false,
        message: "Title, content and category are required",
      });
    }

      const featureImage = req.file ? req.file.path : null;

    const article = await Article.create({
      title,
      content,
      category,
      featureImage,
      videoLink,
    });

    res.status(201).json({
      status: true,
      message: "Article created successfully",
      article,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: error.message,
    });
  }
};

// ================= GET ALL =================
exports.getAllArticles = async (req, res) => {
  try {
    const articles = await Article.find()
      .populate("category", "categoryName")
      .sort({ createdAt: -1 });

    res.status(200).json({
      status: true,
      count: articles.length,
      articles,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: error.message,
    });
  }
};

// ================= GET BY ID =================
exports.getArticleById = async (req, res) => {
  try {
    const article = await Article.findById(req.params.id).populate(
      "category",
      "categoryName"
    );

    if (!article) {
      return res.status(404).json({
        status: false,
        message: "Article not found",
      });
    }

    res.status(200).json({
      status: true,
      article,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: error.message,
    });
  }
};

// ================= UPDATE =================
exports.updateArticle = async (req, res) => {
  try {
    const article = await Article.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!article) {
      return res.status(404).json({
        status: false,
        message: "Article not found",
      });
    }

    res.status(200).json({
      status: true,
      message: "Article updated successfully",
      article,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: error.message,
    });
  }
};

// ================= DELETE =================
exports.deleteArticle = async (req, res) => {
  try {
    const article = await Article.findByIdAndDelete(req.params.id);

    if (!article) {
      return res.status(404).json({
        status: false,
        message: "Article not found",
      });
    }

    res.status(200).json({
      status: true,
      message: "Article deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: error.message,
    });
  }
};
