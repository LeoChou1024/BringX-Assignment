const express = require('express');
const cors = require('cors');
const app = express();
const states = require('./statesData');
app.use(cors());

app.get('/states', (req, res) => {
  const query = req.query['state'];
  const filteredStates = query
    ? // @ts-ignore
      states.filter((state) => state.toLowerCase().includes(query.toLowerCase())).slice(0, 8)
    : states.slice(0, 8);
  res.json(filteredStates);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
module.exports = app;
