const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

// Allow requests from frontend (Replace <FRONTEND_URL> later)
app.use(cors({ origin: "<FRONTEND_URL>" }));

// Endpoint to roll a dice
app.get("/roll", (req, res) => {
    const diceRoll = Math.floor(Math.random() * 6) + 1;
    res.json({ roll: diceRoll });
});

// Endpoint to wake up the server
app.get("/wake", (req, res) => {
    res.json({ message: "Server is awake!" });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
