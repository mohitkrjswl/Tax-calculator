const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/taxRecord')
  .then(() => {
    console.log('connected');
  })
  .catch((error) => {
    console.log(error);
  })


$(document).ready(function () {
  $('.dropdown-toggle').click(function () {
    $(this).siblings('.dropdown-menu').toggleClass('show');
  });

  $(document).click(function (event) {
    if (!$(event.target).closest('.dropdown').length) {
      $('.dropdown-menu').removeClass('show');
    }
  });
});



