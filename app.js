const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.use(express.json());

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.send("My Week 2 API!");
});

app.post("/user", (req, res) => {
    const { name, email } = req.body;

    if (!name || !email) {
        return res.status(400).json({
            message: "Name and email are required"
        });
    }

    res.json({
        message: `Hello, ${name}!`
    });
});

app.get("/user/:id", (req, res) => {
    res.json({
        message: `User ${req.params.id} profile`
    });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});