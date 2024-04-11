const express = require('express');
const app = express();
require('dotenv').config();
const db = require('./db/db')
const PORT = process.env.PORT || 3000;

const bodyParser = require('body-parser');
app.use(bodyParser.json()); //req.body

document.addEventListener('DOMContentLoaded', function () {
  var dropdownToggles = document.querySelectorAll('.dropdown-toggle');

  dropdownToggles.forEach(function (toggle) {
    toggle.addEventListener('click', function (event) {
      var dropdownMenu = this.nextElementSibling;
      dropdownMenu.classList.toggle('show');
      event.stopPropagation(); // Prevent the event from bubbling up
    });
  });

  document.addEventListener('click', function (event) {
    if (!event.target.closest('.dropdown')) {
      var dropdownMenus = document.querySelectorAll('.dropdown-menu');
      dropdownMenus.forEach(function (menu) {
        menu.classList.remove('show');
      });
    }
  });

  var taxForm = document.getElementById('taxForm');

  taxForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    // Retrieve input values
    var grossIncome = parseFloat(document.getElementById('grossIncome').value);
    var extraIncome = parseFloat(document.getElementById('extraIncome').value);
    var deduction = parseFloat(document.getElementById('deduction').value);
    var ageGroup = document.getElementById('ageGroup').value;

    // Calculate overall income
    var overallIncome = grossIncome + extraIncome - deduction;

    // Calculate tax based on age group
    var tax = 0;
    if (overallIncome > 800000) {
      if (ageGroup === 'under60') {
        tax = 0.3 * (overallIncome - 800000);
      } else if (ageGroup === '60to80') {
        tax = 0.4 * (overallIncome - 800000);
      } else if (ageGroup === 'above80') {
        tax = 0.1 * (overallIncome - 800000);
      }
    }

    // Calculate overall income after tax
    var overallIncomeAfterTax = overallIncome - tax;

    // Display overall income after tax (you can customize how you want to display it)
    alert("Overall Income After Tax: " + overallIncomeAfterTax.toFixed(2));
  });
});
