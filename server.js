const express = require('express');
const path = require('path');

const app = express();

// Serve static files from the 'sigma boy' directory
app.use(express.static(path.join(__dirname, 'sigma boy')));

// Route to serve the index.html when someone visits the root URL
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'sigma boy', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});