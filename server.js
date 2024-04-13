const express = require("express");
const articleRouter = require("./routes/articles");
const mongoose = require("mongoose");
const Article = require("./models/article");
const methodOverride = require('method-override')
const app = express();

mongoose.connect("mongodb://localhost/MohitscornerDataBase");
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'))
app.get("/", async (req, res) => {
  const article = await Article.find().sort({ createdAt: 'desc' });

  res.render("articles/index", { articles: article }
  )

})
app.use("/taxCalculator", articleRouter);
app.listen(3000);