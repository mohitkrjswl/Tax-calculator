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


const form = document.getElementById('taxForm');

form.addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent default form submission

  // Get user input values
  const grossIncome = parseFloat(document.getElementById('grossIncome').value);
  const extraIncome = parseFloat(document.getElementById('extraIncome').value) || 0;
  const deductions = parseFloat(document.getElementById('deduction').value) || 0;
  const ageGroup = document.getElementById('ageGroup').value;

  // Calculate taxable income (after deductions)
  const taxableIncome = grossIncome + extraIncome - deductions;
  console.log("taxableIncome:", taxableIncome);

  // Calculate tax rate based on age group
  let taxRate = 0; // Initialize tax rate to 0
  if (taxableIncome > 800000) {
    if (ageGroup === 'under40') {
      taxRate = 0.3;
    } else if (ageGroup === '40to60') {
      taxRate = 0.4;
    } else if (ageGroup === 'above60') {
      taxRate = 0.1;
    }
  }
  console.log("taxRate: ", taxRate);

  // Calculate tax amount
  const tax = (taxableIncome - 800000) * taxRate;

  console.log("Tax: ", tax);

  // Calculate overall income (taxable income - tax)
  const overallIncome = taxableIncome - tax;
  console.log("overallIncome: ", overallIncome);

  // Populate the modal with the calculated result
  const modalResult = document.getElementById('modalResult');
  modalResult.textContent = " Your Overall Income will be: ₹" + overallIncome.toFixed(2);

  // Show the modal
  const modal = document.getElementById('resultModal');
  modal.style.display = "block";

  // Reset the form
  form.reset();
});

function closeModal() {
  const modal = document.getElementById('resultModal');
  modal.style.display = "none";
}
// function resetFormAndCloseModal() {
//   const modal = document.getElementById('resultModal');
//   modal.style.display = "none";
//   form.reset();
// }

