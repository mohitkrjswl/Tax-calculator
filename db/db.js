const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/taxRecord')
  .then(() => {
    console.log('connected');
  })
  .catch((error) => {
    console.error('Error connecting to dadabase', error);
  })