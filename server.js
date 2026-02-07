const express = require("express");
const colors = require("colors");
const connectDB = require("./configer/dbconfig");
require("dotenv").config();
const cors = require("cors")

const app = express();

const PORT = process.env.PORT || 8000

connectDB()
app.use(cors());


app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get("/", (req,res) => {
    res.send("API is Running...")
})



app.use("/admin", require("./routes/admin.Route"));
app.use("/category", require("./routes/category.route"));
app.use("/article", require("./routes/article.route"));
app.use("/user", require("./routes/user.route"));
app.use("/media-type", require("./routes/mediaType.route"));
app.use("/media", require("./routes/media.router"))

app.listen(PORT, () => {
  console.log(`Server is running at PORT: http://localhost:${PORT}`.bgBlue.white);
});