const express = require("express");
const app = express();
const port = 8000;

app.use( express.json() );
app.use( express.urlencoded({ extended: true }));

const menuItems = [
    {name: "Pineapple Pizza",
    price: 18.95},
    {name: "Hamburger",
    price: 12.00},
    {name: "Tacos",
    price: 6.00},
    {name: "🍔",
    price: 13.50},
    {name: "Ice Cream",
    price: 5.00}
]

// req = request
// res = respond
app.get("/api", (req, res) => {
    res.json({ message: "Hello World!" })
});

app.get("/api/menu", (req, res) => {
    res.json({
        count: menuItems.length,
        results: menuItems});
});

app.post("/api/menu", (req, res) => {
    menuItems.push(req.body);
    res.json({
        count: menuItems.length,
        results: menuItems});
});

app.put("/api/menu/:id", (req, res) => {
    menuItems[req.params.id] = req.body;
    res.json({
        count: menuItems.length,
        results: menuItems});
});

app.delete("/api/menu/:id", (req, res) => {
    menuItems.splice(req.params.id, 1);
    res.json({
        count: menuItems.length,
        results: menuItems});
});

app.listen( port, () => console.log(`Listening on port: ${port}`));
