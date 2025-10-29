require('dotenv').config();
const express = require('express');
const app = express();
const tools = require('./routes/tools');

app.use(express.json());
app.use('/api/tools', tools);

app.get('/', (req, res) => res.send('Pic Tools backend running on Deta!'));

// Local dev server (keeps working when running locally)
if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => console.log('Local server running on port', PORT));
}

// Important for Deta: export the app
module.exports = app;
