// The code in add.js handles what happens when the user clicks the "Add a review" button.

// When user clicks add-btn
$("#add-btn").on("click", function(event) {
  event.preventDefault();

  // Make a newReview object
  var newReview = {
    title: $("#title").val().trim(),
    brew_name: $("#brew_name").val().trim(),
    comment: $("#comment").val().trim(),
    rating: $("#rating").val().trim()
  };

  // Send an AJAX POST-request with jQuery
  //debugger;
  $.post("/api/new", newReview)
    // On success, run the following code
    .done(function(data) {
      // Log the data we found
      console.log(data);
    });

  // Empty each input box by replacing the value with an empty string
  $("#title").val("");
  $("#brew_name").val("");
  $("#comment").val("");
  $("#rating").val("");

});
