const express = require("express");
const app = express();
const port = 8000;
const heroApp = require("./routes/here.routes")

const mongoose = require("mongoose");

const cors = require("cors");
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended: true}));

require("./config/mongoose.config");
heroApp(app);

app.listen(port, () => {console.log(`Backend server listening on port: ${port}`)});
