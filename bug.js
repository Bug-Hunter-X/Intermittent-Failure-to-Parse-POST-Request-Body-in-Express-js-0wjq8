const express = require('express');
const app = express();
app.use(express.json());
app.post('/users', (req, res) => {
  // Assuming 'users' is an array in memory
  const newUser = req.body;  
  users.push(newUser);
  res.status(201).json(newUser);
});

// ... other routes ...

app.listen(3000, () => console.log('Server listening on port 3000'));