const mongoose = require('mongoose');

const taxSchema = new mongoose.Schema({
  grossIncome: Number,
  extraIncome: Number,
  deduction: Number,
  ageGroup: String,
  overallIncomeAfterTax: Number
});

const taxRecord = mongoose.model('taxRecord', taxSchema);
module.exports = taxRecord;