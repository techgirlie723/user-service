const express = require('express');
const app = express();
const port = 3001;

const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' }
];

app.get('/users', (req, res) => {
  res.json(users);
});

app.get('/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (user) res.json(user);
  else res.status(404).send({ error: 'User not found' });
});

app.listen(port, () => {
  console.log(`User Service listening on port ${port}`);
});
