const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 5000;

app.use(express.json());

app.post('/update-file', (req, res) => {
  const { content } = req.body;
  const filePath = path.join(__dirname, 'textfile.txt');

  fs.writeFile(filePath, content, (err) => {
    if (err) {
      return res.status(500).json({ message: 'Failed to update file.' });
    }
    res.status(200).json({ message: 'File updated successfully.' });
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
