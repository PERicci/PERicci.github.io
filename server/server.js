import express from 'express';

const app = express();
const port = process.env.PORT || 4000;

app.get('/', (req, res) => {
  res.json({ message: 'Server is running! Check /api for more information' });
});

app.get('/api', (req, res) => {
  res.json({ message: 'Hello from server!' });
});


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});