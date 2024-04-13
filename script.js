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
});

$(document).ready(function () {
  $('#taxForm').submit(function (event) {
    event.preventDefault(); // Prevent form submission

    // Get input values
    var grossIncome = parseFloat($('#grossIncome').val());
    var extraIncome = parseFloat($('#extraIncome').val());
    var ageGroup = $('#ageGroup').val();
    var deduction = parseFloat($('#deduction').val());

    // Calculate overall income
    var overallIncome = grossIncome + extraIncome - deduction;

    // Calculate tax based on age group
    var tax = 0;
    if (overallIncome > 800000) {
      if (ageGroup === 'under40') {
        tax = 0.3 * (overallIncome - 800000);
      } else if (ageGroup === '40to60') {
        tax = 0.4 * (overallIncome - 800000);
      } else if (ageGroup === 'above60') {
        tax = 0.1 * (overallIncome - 800000);
      }
    }

    // Calculate overall income after tax
    var overallIncomeAfterTax = overallIncome - tax;

    // Display overall income after tax
    alert("Overall Income After Tax: " + overallIncomeAfterTax);
  });
});
