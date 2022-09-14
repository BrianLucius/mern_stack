const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/athletes_db", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then (()=>{
    console.log("Established a connection")
})
.catch((err)=>{
    console.log("There has been an error:", err)
})

