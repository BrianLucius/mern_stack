const express = require("express");
const cors = require('cors');
const app = express();
const port = 8000;

//mongoose
const mongoose = require("mongoose");

app.use(cors());
app.use( express.json() );
app.use( express.urlencoded({ extended: true }));

require("./config/mongoose.config");
require("./routes/author.routes")(app);

app.listen( port, () => console.log(`Listening on port: ${port}`));
