const express = require('express');
const app = express();

// This is crucial!  Ensure the body-parser is used *before* any routes that require it.
app.use(express.json());

app.post('/users', (req, res) => {
  // Check if req.body is empty for debugging purposes.
  if (Object.keys(req.body).length === 0) {
    console.error('Request body is empty!');
    return res.status(400).json({ error: 'Invalid request body' });
  }
  const newUser = req.body;
  users.push(newUser);
  res.status(201).json(newUser);
});

// ... other routes ...

app.listen(3000, () => console.log('Server listening on port 3000'));