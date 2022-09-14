const mongoose = require("mongoose");
const database = "superheros_db";

mongoose.connect(`mongodb://localhost/${database}`,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log(`Connected to MongoDB database: ${database}`))
.catch(err => console.log(`There was an error connecting to MongDB databse ${database}: `, err));