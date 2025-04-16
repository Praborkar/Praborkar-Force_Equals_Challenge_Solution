const express = require('express');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

const companies = [
  { id: 1, companyName: "TechCorp", matchScore: 86, status: "Target" },
  { id: 2, companyName: "InnovateInc", matchScore: 73, status: "Not Target" }
];

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (username === 'user1' && password === 'pass123') {
    const token = jwt.sign({ username }, 'secretKey');
    return res.json({ message: 'Login successful', token });
  }
  res.status(401).json({ message: 'Invalid credentials' });
});

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) return res.sendStatus(403);
  jwt.verify(token, 'secretKey', (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

app.get('/accounts', authenticateToken, (req, res) => {
  res.json(companies);
});

app.post('/accounts/:id/status', authenticateToken, (req, res) => {
  const company = companies.find(c => c.id === parseInt(req.params.id));
  if (company) {
    company.status = req.body.status;
    return res.json({ message: 'Status updated' });
  }
  res.status(404).json({ message: 'Company not found' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
