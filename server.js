const express = require("express");
const app = express();

const PORT = 5000;

// Root route
app.get("/", (req, res) => {
  res.send("Welcome to Hello Server!");
});

// About route
app.get("/about", (req, res) => {
  res.send("This is a simple Node.js server.");
});

// Contact route
app.get("/contact", (req, res) => {
  res.send("Contact us at: example@email.com");
});

// Dynamic route (extra)
app.get("/user/:name", (req, res) => {
  res.send(`Hello, ${req.params.name}!`);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});