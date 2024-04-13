const mongoose = require('mongoose');
const { marked } = require('marked')
const taxSchema = new mongoose.Schema({
  grossIncome: {
    type: Number,
    required: true
  },
  extraIncome: {
    type: Number
  },
  age: {
    type: String,
    required: true
  },
  deduction: {
    type: Number,
  },
  overallIncome: {
    type: Number,
  },
  date: {
    type: Date,
    default: Date.now
  },

});

const taxRecord = mongoose.model('taxRecord', taxSchema);
module.exports = taxRecord;