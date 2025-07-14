const express = require('express');
const helmet = require('helmet');

const app = express();

// Use Helmet to secure HTTP headers
app.use(helmet());

app.get('/', (req, res) => {
  res.send('Hello, world! This Express app is protected by Helmet.');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
