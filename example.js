  
    // const taxableIncome = grossIncome + extraIncome - deductions;// Calculate tax based on age group
  // taxableIncome - 800000); // Calculate tax on exceeding amount  // let tax = 0;
  // if (taxableIncome > 800000) { // Check if income exceeds 8 Lakhs
  //   const taxRate = (ageGroup === 'under40') ? 0.3 : (ageGroup === '40to60') ? 0.4 : 0.1;
  //   tax = taxRate * (
  // }


//   const form = document.getElementById('taxForm');

// form.addEventListener('submit', function (event) {
//   event.preventDefault(); // Prevent default form submission

//   // Get user input values
//   const grossIncome = parseFloat(document.getElementById('grossIncome').value);
//   const extraIncome = parseFloat(document.getElementById('extraIncome').value) || 0;
//   const deductions = parseFloat(document.getElementById('deduction').value) || 0;
//   const ageGroup = document.getElementById('ageGroup').value;
 
//   function tax(ageGroup, grossIncome, extraIncome, deduction) {
//     const taxableIncome = grossIncome + extraIncome - deduction;

//     // Check if taxable income is less than or equal to 8 Lakhs
//     if (taxableIncome <= 800000) {
//       return 0;
//     } else {
//       // Calculate tax based on age and taxable income
//       let taxRate;
//       if (ageGroup < 40) {
//         taxRate = 0.3;
//       } else if (ageGroup >= 40 && age < 60) {
//         taxRate = 0.4;
//       } else {
//         taxRate = 0.1;
//       }

//       return (taxableIncome - 800000) * taxRate;
//     }
//   }
//   // Calculate overall income (taxable income - tax)
//   const overallIncome = taxableIncome - tax;
//   alert("Your over all Income is " + overallIncome.toFixed(2));

//   // Reset the form
//   form.reset();
// });