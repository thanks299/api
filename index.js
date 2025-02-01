const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to handle CORS
app.use(cors());

// Endpoint to return the required JSON response
app.get("/", (req, res) => {
  const response = {
    email: "thanksagbeble@gmail.com", 
    current_datetime: new Date().toISOString(),
    github_url: "https://github.com/thanks299/api.git",
  };
  res.status(200).json(response);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:5000`);
});